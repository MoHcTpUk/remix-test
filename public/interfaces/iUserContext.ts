import type { DefaultTheme } from "styled-components";

export default interface IUserContext {
	theme: DefaultTheme
	setTheme: (theme: DefaultTheme) => void
	language: string
	setLanguage: (lang: string) => void
}