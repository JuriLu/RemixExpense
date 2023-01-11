import {prisma} from './database.server'

export async function addExpense(expenseData, userId) {
    try {
        return await prisma.expense.create({
            data: {
                title: expenseData.title,  // -> in expensesForm  its name='title'
                amount: +expenseData.amount,
                date: new Date(expenseData.date),
                User: {connect: {id: userId}}  // connection between expenses and user
            },
        });
    } catch (error) {
        console.log(error)
        throw error;
    }
}

export async function getExpenses(userId) {

    if(!userId){
        throw new Error('Failed to get Expenses')
    }
    try {
        // {where} {orderby} ect
        return await prisma.expense.findMany(
            {
                where: {userId},                //object destructure
                orderBy: {date: 'desc'}
            }
        )
    } catch (error) {
        console.log(error)
        throw new Error('Can not read data.');
    }
}

export async function getExpense(id) {  // we don't need the userId here because we are getting from getExpenses (useMatches())
    try {
        return await prisma.expense.findFirst({where: {id}})
    } catch (error) {
        console.log(error);
        throw new Error('Failed to add expense.');
    }
}

export async function updateExpense(id, expenseData) {
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
        throw new Error('Failed to update expense.');
    }
}

export async function deleteExpense(id) {
    try {
        await prisma.expense.delete({
            where: {id}
        });
    } catch (error) {
        console.log(error)
        throw new Error('Failed to delete expense.');
    }
}
