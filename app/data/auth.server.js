import {prisma} from './database.server'

export async function signup({email,password}){  // Object destructuring
     //VALIDATION FOR UNIQUE EMAIL
   const existingUser = prisma.user.findFirst({ where: { email } })

   if(existingUser) {
     const error = new Error ('A user with the provided email address exists already');
     error.status = 422;
     throw error
   }

   
}