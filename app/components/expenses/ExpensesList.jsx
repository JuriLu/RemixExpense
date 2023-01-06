import ExpenseListItem from './ExpenseListItem';

function ExpensesList({ expenses }) {

  return (
    <ol id="expenses-list">
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ExpenseListItem
            id={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        </li>
      ))}
    </ol>
  );
}

export default ExpensesList;
