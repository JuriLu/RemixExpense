import { redirect } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { addExpense } from "~/data/expenses.server";   // because of .sever this will be imported on backend bundle

export default function AddExpensesPage() {
  const navigate = useNavigate()  // useNavigate() => Remix Hook

  function closeHandler(){
    navigate('..')
  }

  return (
      <Modal onClose={closeHandler}>
        <ExpenseForm />
      </Modal>   
  );
}

// CODE THAT TALKS WITH MONGODB AND STORES DATA


export async function action({request}){
  const formData = await request.formData()
  // formData.get('title')  One Method
  const expenseData = Object.fromEntries(formData) //get Key:Value Pairs Object
  console.log(expenseData,formData);

  await addExpense(expenseData)

  return redirect('/expenses') //Must return smth se sbo
}

/* NOTES
        {Line: 23} {request} here is object destructuring to get access to the request property that 
                  is part of the object that is automatically recieved on the action() function , 
                  provided by Remix


// request stores some information about the request that triggered the execution 
    of this action function, Which yields a promise, which resolves to an object that gives us access
    to the submitted data (apparently from the post method)
 
*/