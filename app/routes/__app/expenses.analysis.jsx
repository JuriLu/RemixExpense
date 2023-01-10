 import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import { getExpenses } from "~/data/expenses.server";
import { json } from "react-router";
import { useCatch, useLoaderData } from "@remix-run/react";
import Error from "~/components/util/Error";
   
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

   export function CatchBoundary(){

    const caughtResponse = useCatch();

    return <main>
      <Error title={caughtResponse.statusText}>
        <p>{caughtResponse.data?.message || `Something went wrong, could not load expenses`}</p>
      </Error>
    </main>
   }