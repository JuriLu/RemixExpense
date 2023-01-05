import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
// import { getExpense } from "~/data/expenses.server";

export default function UpdateExpensesPage() {
  const navigate = useNavigate();  // useNavigate() => Remix Hook

  function closeHandler(){
    navigate('..')
  }

  return (
      <Modal onClose={closeHandler}>
        <ExpenseForm />
      </Modal>
  );
}

// REMOVED BECAUSE ITS REDUNDANT , WE CAN USE THE LOADER FROM expenses FOR THIS CASE ALSO
// export async function loader({params}){
//   console.log('EXPENSE ID LOADER')

//   const expenseId = params.id;   // the name of the param set
//   const expense = await getExpense(expenseId)
//   return expense
// }
