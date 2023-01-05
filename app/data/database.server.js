// Special filename
/*  We can include .server.js to tell that the code in here will be included on the server , so on the 
     backend. This is made to separate backend from frontend, import , bundles and more
*/

import { PrismaClient } from '@prisma/client';

/**
 * @type PrismaClient
 */
let prisma;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
  prisma.$connect();
} else {
  if (!global.__db) {
    global.__db = new PrismaClient();
    global.__db.$connect();
  }
  prisma = global.__db;
}

export { prisma };