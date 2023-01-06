import {prisma} from './database.server'

export async function addExpense(expenseData){
     try {
          return await prisma.expense.create({data: {
               title: expenseData.title,  // -> in expensesForm  its name='title'
               amount: +expenseData.amount,
               date: new Date(expenseData.date)
          }});
     } catch (error) {
          console.log(error)
          throw error;
     }
}

export async function getExpenses(){
  try {
     const expenses = await prisma.expense.findMany({orderBy: {date:'desc'}})   // {where} {orderby} ect
     return expenses
  } catch (error) {
     console.log(error)
     throw error
  }
}

export async function getExpense(id){
     try {
          const expense = await prisma.expense.findFirst({where: { id } })
          return expense
     } catch (error) {
          console.log(error);
          throw error;
     }
}

export async function updateExpense(id, expenseData){
     try {
          await prisma.expense.update({
               where: {id},  // where : {id:id} shortcut
               data: {
                    title: expenseData.title,  
                    amount: +expenseData.amount,
                    date: new Date(expenseData.date)
               }
          })  
     } catch (error) {
          console.log(error);
          throw error
     }
     
     
}