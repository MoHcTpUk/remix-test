import { useContext } from 'react';
import { useTranslation } from 'react-i18next';

import { getUserTheme } from './i18n/utils';
import { UserContext } from './providers/userContextProvider';

function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
}

function useApp() {
  const [userContext, setUserContext] = useUserContext();
  const theme = getUserTheme(userContext);
  const { i18n, t } = useTranslation();

  return { userContext, setUserContext, theme, t, i18n };
}

export { useApp, useUserContext };
