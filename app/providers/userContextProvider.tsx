import { useFetcher } from '@remix-run/react';
import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { createContext, useEffect, useRef, useState } from 'react';
import { isServer } from 'shared/utils';

import type { IUserContext } from '~/types/interfaces/iUserContext';
import { isUserContext } from '~/types/interfaces/iUserContext';

import { defaultUserContext } from '../../public/defaultUserContext';

type UserContextType = [IUserContext, Dispatch<SetStateAction<IUserContext>>];

const UserContext = createContext<UserContextType | undefined>(undefined);

function UserContextProvider({
  children,
  specifiedUserContext,
}: {
  children: ReactNode;
  specifiedUserContext: IUserContext | null;
}) {
  const [userContext, setUserContext] = useState<IUserContext>(() => {
    if (specifiedUserContext) {
      if (isUserContext(specifiedUserContext)) {
        return specifiedUserContext;
      }

      return defaultUserContext();
    }

    if (isServer()) {
      return defaultUserContext();
    }

    return defaultUserContext();
  });

  useEffect(() => {
    const user = specifiedUserContext?.user;
    const forms = specifiedUserContext?.forms;

    setUserContext((prevContext) => ({
      ...prevContext,
      user: {
        id: user?.id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
        avatar: user?.avatar,
        isAuthenticated: user?.isAuthenticated || false,
        isEmailConfirm: user?.isEmailConfirm,
        progressInfo: user?.progressInfo,
        phone: user?.phone,
        birthday: user?.birthday,
        gender: user?.gender,
      },
      forms,
    }));
  }, [specifiedUserContext]);

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

    persistUserContextRef.current.submit(
      { context: JSON.stringify(userContext) },
      { action: 'actions/set-user-context', method: 'POST' },
    );
  }, [
    userContext.user?.id,
    userContext?.search,
    userContext?.language,
    userContext?.theme,
    userContext?.forms?.resume,
    userContext?.forms?.vacancy,
  ]);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={[userContext, setUserContext]}>{children}</UserContext.Provider>
  );
}

export { UserContext, UserContextProvider };
