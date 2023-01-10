import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";

import sharedStyles from "~/styles/shared.css";
import Error from "./components/util/Error";

export const meta = () => ({
  charset: "utf-8",
  title: "Expenses App",
  viewport: "width=device-width,initial-scale=1",
});

function Document ({title, children}){
  return (
    <html lang="en">
      <head>
      <title>{title}</title>
        <Meta />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Links />
      </head>
      <body>
         {children}   {/* < Outlet /> */}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
   <Document title="Expense App">
    <Outlet/> {/* instead of the children */}
   </Document>
  );
}

export function CatchBoundary(){
const caughtResponse =  useCatch();

  return <Document title={caughtResponse.statusText}>
    <main>
      <Error title={caughtResponse.statusText}>
        <p>{caughtResponse.data?.message || 'Something Wrong, please try again'}</p>
        <p>Back to<Link to=''> safety</Link></p>
      </Error>
    </main>
  </Document>
}

// Error Boundary is for un handled errors [for e.x backend errors, server errors]
export function ErrorBoundary({error}){
    return <Document title="An error ocurred">
      <main>
        <Error title="An error ocurred">
          <p>{error.message || 'Something Wrong, please try again'}</p>
          <p>Back to<Link to=''> Safety</Link></p>
        </Error>
      </main>
    </Document>
  }

export function links() {
  return [{ rel: "stylesheet", href: sharedStyles }];
}
