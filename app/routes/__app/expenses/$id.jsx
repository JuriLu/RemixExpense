import {redirect} from "@remix-run/node";
import {useNavigate} from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import {deleteExpense, updateExpense} from "~/data/expenses.server";
import {validateExpenseInput} from "~/data/validation.server";
import {requireUserSession} from "~/data/auth.server";
// import { getExpense } from "~/data/expenses.server";

export default function UpdateExpensesPage() {
    const navigate = useNavigate();  // useNavigate() => Remix Hook

    function closeHandler() {
        navigate('..')
    }

    return (
        <Modal onClose={closeHandler}>
            <ExpenseForm/>
        </Modal>
    );
}

export async function loader({request}) {
    await requireUserSession(request)
}

export async function action({params, request}) {
    const expenseId = params.id;

    if (request.method === 'PATCH') {
        const formData = await request.formData();
        const expenseData = Object.fromEntries(formData)

        try {
            validateExpenseInput(expenseData);
        } catch (error) {
            return error
        }

        await updateExpense(expenseId, expenseData);
        return redirect('/expenses')

    } else {      // automatically know its DELETE because post is in another action() (to /add)
        await deleteExpense(expenseId);
        return {deletedId: expenseId};
    }
}
