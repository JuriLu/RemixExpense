import {json} from "react-router";
import {destroyUserSession} from "~/data/auth.server";

export function action({request}) {
    if (request.method !== 'DELETE') {
        throw json({message: 'Invalid request method'}, {status: 400})
    }

return destroyUserSession(request)
}
