import { redirect } from "@remix-run/node";
import AuthForm from "~/components/auth/AuthForm";
import { signup } from "~/data/auth.server";
import { validateCredentials } from "~/data/validation.server";
import authStyles from "~/styles/auth.css";

export default function AuthPage() {
  return <AuthForm />;
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);
  console.log(credentials);

  //Validation
  try {
    validateCredentials(credentials)
  } catch (error) {
    return error
  }

  if (authMode === "login") {
    //login Logic
  } else {
    await signup(credentials);
    return redirect('/expenses') 
  }
}

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
