 import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import { getExpenses } from "~/data/expenses.server";
import { json } from "react-router";
import { useLoaderData } from "@remix-run/react";
   
   export default function ExpensesAnalysisPage() {
    const expenses = useLoaderData()

     return (
       <main>
         <Chart expenses={expenses} />
         <ExpenseStatistics expenses={expenses} />
       </main>
     );
   }
   
   export async function loader(){
    const expenses = await getExpenses()

    if(!expenses || expenses.length === 0){
      throw json(
        {message:'Could not load expenses for the requested analysis'},
        {
          status:400,
          statusText:'Could not load expenses for the requested analysis'
        },
        )
    }
    return expenses // return json(expenses) another way
   }