import { prisma } from './database.server'
import { hash } from 'bcryptjs';

export async function signup({email,password}){  // Object destructuring
     //VALIDATION FOR UNIQUE EMAIL
   const existingUser = await prisma.user.findFirst({ where: { email } })

   if(existingUser) {
     const error = new Error ('A user with the provided email address exists already');
     error.status = 422;
     throw error
   }

   //HASHING PASSWORD
   const passwordHash = await hash(password,12)

   await prisma.user.create({
     data:{
          email:email,
          password:passwordHash
     }
})


}