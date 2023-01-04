// In this case this sub route will still be part of expenses route , but now part of the 
//  layout component
// Resource Route

import { DUMMY_EXPENSES } from "./__app/expenses.analysis";

export function loader(){
  return DUMMY_EXPENSES
}