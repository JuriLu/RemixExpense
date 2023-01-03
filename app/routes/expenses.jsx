import { Outlet } from "@remix-run/react";
import expensesStyle from "~/styles/expenses.css";

// Layout Components can be used like representative components
// In Our case we create a route file expenses.jsx that will be a layout components and a
//  expenses folders , that will be the sub routes of expenses file. You put the <Outlet />
//  inside the expenses.jsx and whatever HTML element you want and the sub routes of expenses
//  will be loaded inside this expenses.jsx through Outlet (just like Angular).
// You can also remove indes.jsx from expenses folder

export default function ExpensesLayout() {
  return (
    <main>
      <p>Shared Element</p>
      <Outlet />
    </main>
  );
}

// Styles here will be available also for the nested routes of this route
export function links() {
  return [{ rel: "stylesheet", href: expensesStyle }];
}
