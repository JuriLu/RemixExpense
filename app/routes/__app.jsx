// /expenses/add

import expensesStyles from '~/styles/expenses.css'
import { Outlet } from "@remix-run/react";
import ExpensesHeader from '~/components/navigation/ExpensesHeader';
import {getUser, getUserFromSession} from "~/data/auth.server";

export default function ExpensesLayout(){
     return (
     <>
          <ExpensesHeader/>
          <Outlet />
     </>
     )
}

// Styles here will be available also for the nested routes of this route
export function links(){
     return [{rel: 'stylesheet',href: expensesStyles}]
}

export async function loader({request}){
    const userId = await getUserFromSession(request)
    return await getUser(userId)
}
