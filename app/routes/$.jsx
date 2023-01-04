import { redirect } from "@remix-run/node";

//Splat Route
export function loader({params}){
     if(params['*'] === 'exp'){
          return redirect('/expenses')
     }
     
     return redirect('/notFound');
}