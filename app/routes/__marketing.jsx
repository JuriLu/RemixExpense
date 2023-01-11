import {Outlet} from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import marketingStyles from "~/styles/marketing.css"
import {getUser, getUserFromSession} from "~/data/auth.server";
import {redirect} from "@remix-run/node";

export default function MarketingLayout(){
     return (
     <>
          <MainHeader/>
          <Outlet/>
     </>
     )
}

export async function loader({request}){
     const userId =  await getUserFromSession(request)
     if(userId){
          return await getUser(userId)
     }
     return redirect('/auth')
}

export function links(){
     return [{rel:'stylesheet',href:marketingStyles}]
}
