export type ValueOf<T> = T[keyof T]

export function isServer() {
	return typeof document === "undefined"
}