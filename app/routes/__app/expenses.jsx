import { json } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { FaDownload, FaPlus } from "react-icons/fa";
import ExpensesList from "~/components/expenses/ExpensesList";
import { getExpenses } from "~/data/expenses.server";

// Layout Components can be used like representative components
// In Our case we create a route file expenses.jsx that will be a layout components and a
//  expenses folders , that will be the sub routes of expenses file. You put the <Outlet />
//  inside the expenses.jsx and whatever HTML element you want and the sub routes of expenses
//  will be loaded inside this expenses.jsx through Outlet (just like Angular).
// You can also remove indes.jsx from expenses folder


export default function ExpensesLayout() {
  const expenses = useLoaderData();

  return (
    <>
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="add">
            <FaPlus/>
            <span>Add Expense</span>
          </Link>
          {/* Regular link here because we are redirecting to a new link where it loads the Raw Data */}
          <a href="/expenses/raw"><FaDownload/> Load Raw Data</a>
        </section>
        <ExpensesList expenses={expenses} />
      </main>
    </>
  );
}

export async function loader(){
   const expenses = await getExpenses();
   return expenses
  //  const expenses = await getExpenses()  //yields a promise
  //  return json(expenses)
}


