import { Link } from "@remix-run/react";
import { FaCalendar, FaCalendarAlt, FaCalendarDay, FaCalendarTimes, FaCalendarWeek, FaEdit, FaEraser } from "react-icons/fa";

function ExpenseListItem({id, title, amount,date }) {
  function deleteExpenseItemHandler() {
    // tbd
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
        <button onClick={deleteExpenseItemHandler}><FaEraser/></button>
        <Link to={id}><FaEdit/></Link>
      </menu>
    </article>
  );
}

export default ExpenseListItem;
