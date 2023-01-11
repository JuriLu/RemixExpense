// In this case this sub route will still be part of expenses route , but now part of the 
//  layout component
// Resource Route

import {getExpenses} from "~/data/expenses.server"
import {requireUserSession} from "~/data/auth.server";

export async function loader({request}) {
    await requireUserSession(request)

    const expenses = await getExpenses()
    if (!expenses || expenses.length === 0) {
        return 'No Data Loaded'
    }
    return expenses
}

