import {prisma} from './database.server'
import {createCookieSessionStorage, redirect} from '@remix-run/node';

import {compare, hash} from 'bcryptjs';

const SESSION_SECRET = process.env.SESSION_SECRET

const sessionStorage = createCookieSessionStorage({
    cookie: {
        secure: process.env.NODE_ENV === 'production', // check for Https secures
        secrets: [SESSION_SECRET],
        sameSite: 'lax',                                 // protection against malicious requests
        maxAge: 30 * 24 * 60 * 60,                             // length calculated for 30 days (in seconts)
        httpOnly: true
    }
});

async function createUserSession(userId, redirectPath) {
    const session = await sessionStorage.getSession();
    session.set('userId', userId)
    return redirect(redirectPath, {
        headers: {
            'Set-Cookie': await sessionStorage.commitSession(session)
        }
    })                                        //logic to create a new response, in which will be stored the cookie
}

export async function getUserFromSession(request) {
    const session = await sessionStorage.getSession(
        request.headers.get('Cookie')
    );

    const userId = session.get('userId')

    if (!userId) {
        return null
    } else {
        return userId
    }
}

export async function destroyUserSession(request) {
    const session = await sessionStorage.getSession(
        request.headers.get('Cookie')
    )

    return redirect('/', {
        headers: {
            'Set-Cookie': await sessionStorage.destroySession(session)
        }
    })


}

export async function requireUserSession(request) {
    const userId = await getUserFromSession(request);

    //WILL BE CALLED AS GUARD
    if (!userId) {
        throw redirect('/auth?mode=login');                                               // THIS CANCELS THE FUNCTION AND REDIRECTS , BUT IT WON'T TRIGGER A catchBoundary
    }

    return userId
}

export async function getUser(id) {  // we don't need the userId here because we are getting from getExpenses (useMatches())
    try {
        return await prisma.user.findFirst({where: {id}})
    } catch (error) {
        console.log(error);
    }
}

export async function signup({email, password}) {  // Object destructuring

    //VALIDATION FOR UNIQUE EMAIL
    const existingUser = await prisma.user.findFirst({where: {email}})

    if (existingUser) {
        const error = new Error('A user with the provided email address exists already');
        error.status = 422;
        throw error
    }

    //HASHING PASSWORD
    const passwordHash = await hash(password, 12)

    const user = await prisma.user.create({
        data: {
            email: email,
            password: passwordHash
        }
    })

    return createUserSession(user.id, '/expenses')
}

export async function login({email, password}) {
    const existingUser = await prisma.user.findFirst({where: {email}})

    if (!existingUser) {
        const error = new Error(
            `Couldn't log you in, please check your credentials`
        );
        error.status = 401;
        throw error
    }

    const passwordCorrect = await compare(password, existingUser.password)

    if (!passwordCorrect) {
        const error = new Error(
            `Couldn't log you in, please check your credentials`
        );
        error.status = 401;
        throw error
    }

    return createUserSession(existingUser.id, '/expenses')

}
