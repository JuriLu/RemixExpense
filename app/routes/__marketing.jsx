import {Outlet} from "@remix-run/react";
import MainHeader from "~/components/navigation/MainHeader";
import marketingStyles from "~/styles/marketing.css"
import {getUserFromSession} from "~/data/auth.server";

export default function MarketingLayout(){
     return (
     <>
          <MainHeader/>
          <Outlet/>
     </>
     )
}

export async function loader({request}){
     return await getUserFromSession(request)
}

export function links(){
     return [{rel:'stylesheet',href:marketingStyles}]
}
