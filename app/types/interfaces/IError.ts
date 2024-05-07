export interface IError {
  status?: string;
  error?: string;
}

export type FieldErrors = Record<string, string | undefined>;
