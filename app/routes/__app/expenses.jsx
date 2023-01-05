import { Link, Outlet } from "@remix-run/react";
import { FaDownload, FaPlus } from "react-icons/fa";
import ExpensesList from "~/components/expenses/ExpensesList";
import expensesStyle from "~/styles/expenses.css";
import { DUMMY_EXPENSES } from "./expenses.analysis";

// Layout Components can be used like representative components
// In Our case we create a route file expenses.jsx that will be a layout components and a
//  expenses folders , that will be the sub routes of expenses file. You put the <Outlet />
//  inside the expenses.jsx and whatever HTML element you want and the sub routes of expenses
//  will be loaded inside this expenses.jsx through Outlet (just like Angular).
// You can also remove indes.jsx from expenses folder

const dummyExpenses = DUMMY_EXPENSES

export default function ExpensesLayout() {
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
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}

// Styles here will be available also for the nested routes of this route
export function links() {
  return [{ rel: "stylesheet", href: expensesStyle }];
}

