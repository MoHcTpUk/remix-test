import { useFetcher } from '@remix-run/react';
import { LanguageEnum } from 'public/enums/languageEnum';
import { ThemeEnum } from 'public/enums/themeEnum';
import type { IUserContext } from 'public/interfaces/iUserContext';
import { isUserContext } from 'public/interfaces/iUserContext';
import { createContext, useEffect, useRef, useState } from 'react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { isServer } from 'shared/utils';

type UserContextType = [IUserContext | null, Dispatch<SetStateAction<IUserContext | null>>];

const UserContext = createContext<UserContextType | undefined>(undefined);

function defaultUserContext() {
	return {
		theme: ThemeEnum.Light,
		language: LanguageEnum.EN
	} as IUserContext
}

function UserContextProvider({ children, specifiedUserContext }: { children: ReactNode; specifiedUserContext: IUserContext | null }) {
	const [userContext, setUserContext] = useState<IUserContext | null>(() => {
		if (specifiedUserContext) {
			if (isUserContext(specifiedUserContext)) {
				return specifiedUserContext
			}
			else {
				return null
			}
		}

		if (isServer()) {
			return null
		}

		return defaultUserContext()
	});

	const persistUserContext = useFetcher();
	const persistUserContextRef = useRef(persistUserContext);

	useEffect(() => {
		persistUserContextRef.current = persistUserContext;
	}, [persistUserContext]);

	const mountRun = useRef(false);

	useEffect(() => {
		if (!mountRun.current) {
			mountRun.current = true;
			return;
		}
		if (!userContext) {
			return;
		}

		persistUserContextRef.current.submit({ context: JSON.stringify(userContext) }, { action: 'actions/set-user-context', method: 'post' });
	}, [userContext]);

	return <UserContext.Provider value={[userContext, setUserContext]}>{children}</UserContext.Provider>;
}

export { UserContextProvider, UserContext };