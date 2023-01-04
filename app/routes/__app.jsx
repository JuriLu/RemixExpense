// /expenses/add

import expensesStyles from '~/styles/expenses.css'
import { Outlet } from "@remix-run/react";
import ExpensesHeader from '~/components/navigation/ExpensesHeader';

export default function ExpensesLayout(){
     return (
     <>
          <ExpensesHeader/>
          <Outlet />
     </>
     )
}

export function links(){
     return [{rel: 'stylesheet',href: expensesStyles}]
}