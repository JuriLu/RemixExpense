import AuthForm from "~/components/auth/AuthForm";
import { login, signup } from "~/data/auth.server";
import { validateCredentials } from "~/data/validation.server";
import authStyles from "~/styles/auth.css";

export default function AuthPage() {
  return <AuthForm />;
}

export async function action({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const  authMode = searchParams.get("mode") || "login";

  const formData = await request.formData();
  const credentials = Object.fromEntries(formData);

  //Validation
  try {
    validateCredentials(credentials)
  } catch (error) {
    return error
  }

  try {
    if (authMode === "login") {
      return await login(credentials) // this also return the redirect response that is in the auth.server.js
    } else {
      return await signup(credentials);
    }
  } catch (error) {
    if(error.status === 422){
      return {message:error.message}
    }
  }

  
}

export function links() {
  return [{ rel: "stylesheet", href: authStyles }];
}
