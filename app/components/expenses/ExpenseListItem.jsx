import { Link, useFetcher} from "@remix-run/react";
import { FaCalendarAlt, FaEdit, FaEraser } from "react-icons/fa";

function ExpenseListItem({id, title, amount, date}) {
  // const submit = useSubmit()
  // function deleteExpenseItemHandler() {
  //   submit(null,{
  //     method:'delete',
  //     action: `/expenses/${id}`
  //   })
  // }

  const fetcher = useFetcher()
  const fetcherData = fetcher.data

  function deleteExpenseItemHandler() {
   const proceed =  confirm('Confirm delete');

   if(!proceed){
    return;
   } 
    fetcher.submit(null,{
      method:'delete',
      action: `/expenses/${id}`
    })
    // console.log(`Expense with id ${fetcherData.deletedId} was Deleted`) TBD
  }

  
  

  if (fetcher.state !== 'idle'){
    return <article className="expense-item locked">
      <p>Deleting...</p>
    </article>
  }
  

  const editedDate = new Date(date).toUTCString().substring(0,16)
  

  return (
    <article className="expense-item">
      <div>
        <h2 className="expense-title">{title}</h2>
        <p className="expense-amount">${amount.toFixed(2)}</p>
        <p className="expense-date">
          <span><FaCalendarAlt/> {editedDate}</span>
        </p>
      </div>
      <menu className="expense-actions">
        <button onClick={deleteExpenseItemHandler}><FaEraser className="biggerFonts"/></button>
        <Link to={id}><FaEdit className="biggerFonts"/></Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;


/*  NOTES
    Without specifying the action, the DELETE REQUEST GOES TO /expense, but we need it to /expense/$id
    So, it goes to $id , which already has an action(), how do we solve this?

    We have one for update/add and one for delete, which we want to make a whole other function 

    1. One method is to differentiate with query parameters ?mode=delete, and check in backend to see if it is
        the value of query param as a value.
    2. One other way we can use the method
    
*/