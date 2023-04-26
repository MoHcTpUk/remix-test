import { useContext } from "react";
import { UserContext } from "./providers/userContextProvider";
import { getUserTheme } from "./i18n/utils";
import { useTranslation } from "react-i18next";

function useUserContext() {
	const context = useContext(UserContext);
	if (context === undefined) {
		throw new Error('useUserContext must be used within a UserContextProvider');
	}
	return context;
}

function useApp() {
	const [userContext, setUserContext] = useUserContext()
	const theme = getUserTheme(userContext)
	const { i18n, t } = useTranslation()

	return { userContext, setUserContext, theme, t, i18n }
}

export { useUserContext, useApp }