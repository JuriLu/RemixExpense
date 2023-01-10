import { json } from "@remix-run/node";
import { 
  Form, 
  Link,
   useActionData, 
   useMatches, 
   useTransition as useNavigation, 
   useParams } from "@remix-run/react";
import { FaTruckLoading } from "react-icons/fa";

function ExpenseForm() {
  const today = new Date().toISOString().slice(0, 10); // yields something like 2023-09-10
  const validationErrors = useActionData();
  // const expenseData = useLoaderData();
  const params = useParams();
  const matches = useMatches(); // use all the data of this parent path
  const expenses = matches.find(match => match.id === 'routes/__app/expenses').data // console.log(matches) to see it.This Gets us the array with all the data
  const expenseData = expenses.find(expense => expense.id === params.id) 
  const navigation = useNavigation();

 
  //translation: if we have and ID and still can not find expenseData (we are on edit mode but id doesn't exist)
 if(params.id && !expenseData){
   return <p>Invalid Expense Id.</p>   //Method 1
  // throw new Response()      Method 2
 }
 
  const defaultValues = expenseData ? {
    title: expenseData.title,
    amount: expenseData.amount,
    date: expenseData.date,
  } : {
    title: '',
    amount: '',
    date: '',
  }

  const isSubmitting = navigation.state !== 'idle'

  return (
    <Form 
    method={expenseData ? 'patch' : 'post'}
    className="form"
     id="expense-form">
      <p>
        <label htmlFor="title">Expense Title</label>
        <input 
        type="text" 
        id="title" 
        name="title"
        required 
        maxLength={30} 
        defaultValue={defaultValues.title} />
      </p>

      <div className="form-row">
        <p>
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            min="0"
            step="0.01"
            required
            defaultValue={defaultValues.amount}
          />
        </p>
        <p>
          <label htmlFor="date">Date</label>
          <input 
          type="date" 
          id="date" 
          name="date"
          max={today} 
          required
          defaultValue={defaultValues.date ? defaultValues.date.slice(0,10) : ''} 
           />
        </p>
      </div>
      { validationErrors && (
        <ul>
        {Object.values(validationErrors).map((error) => (<li key={error}>{error}</li>))}
        </ul>
        )
      }
      <div className="form-actions">
        <button disabled={isSubmitting}>{isSubmitting? <span>Saving... <FaTruckLoading/></span> : 'Save Expense' }</button>
        <Link to="..">Cancel</Link>
      </div>
    </Form>
  );
}

export default ExpenseForm;
