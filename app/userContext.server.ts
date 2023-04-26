import { createCookieSessionStorage } from "@remix-run/cloudflare";
import type { IUserContext } from "public/interfaces/iUserContext";
import { isUserContext } from "public/interfaces/iUserContext";
import { defaultUserContext } from "../public/defaultUserContext";

// TODO: Security - add cookie secrets

// const sessionSecret = process.env.SESSION_SECRET;
// if (!sessionSecret) {
//   throw new Error('SESSION_SECRET must be set');
// }

const SESSION_NAME = 'userContext'

const userContextStorage = createCookieSessionStorage({
	cookie: {
		name: 'user_context',
		secure: true,
		// secrets: [sessionSecret],
		sameSite: 'lax',
		path: '/',
		httpOnly: true,
	},
});

async function getUserContextSession(request: Request) {
	const session = await userContextStorage.getSession(request.headers.get('Cookie'));
	return {
		getUserContext: () => {
			const rawSession = session.get(SESSION_NAME);

			if (!rawSession)
				return defaultUserContext()

			const userContext = JSON.parse(rawSession);
			return isUserContext(userContext) ? userContext : null;
		},
		setUserContext: (userContext: IUserContext) => session.set(SESSION_NAME, JSON.stringify(userContext)),
		commit: () => userContextStorage.commitSession(session),
	};
}

export { getUserContextSession, SESSION_NAME };