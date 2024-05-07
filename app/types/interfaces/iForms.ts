import type {
  EntityCreateFeedbackRequest,
  EntityForgotPasswordRequest,
  EntitySignInRequest,
  EntitySignUpRequest,
} from 'shared/client/data-contracts';
import type { Company } from 'shared/v2/companies';
import type { Resume } from 'shared/v2/resumes';

export interface IMessage {
  en: string;
  th: string;
}

export interface FieldError {
  [key: string]: IMessage;
}

export interface ISignInResponse {
  fields: EntitySignInRequest;
  success: boolean;
  formError: null | string;
  fieldErrors: {
    email: IMessage | null;
    password: IMessage | null;
  };
}

export interface IUpdateProfile {
  success: boolean;
  formError: IMessage | null;
  emailConfirmed: boolean;
  fieldErrors: {
    password: IMessage | null;
    passwordConfirm: IMessage | null;
    first_name: IMessage | null;
    last_name: IMessage | null;
    birthday: IMessage | null;
  } | null;
}

export interface IUpdateResume {
  fieldErrors: Record<string, IMessage>;
  formError: IMessage | null;
  success?: boolean;
}

export interface IUpdateVacancy {
  fieldErrors: Record<string, IMessage> | null;
  formError: IMessage | null;
  success?: boolean;
}

export interface IUpdateCompany {
  fieldErrors: Record<string, IMessage> | null;
  formError: IMessage | null;
  success?: boolean;
}

export interface IForgotPasswordResponse {
  fields: EntityForgotPasswordRequest;
  formError: null | string;
  fieldErrors: Record<string, IMessage> | null;
  status?: number;
}

export interface ISignUpResponse {
  fields: EntitySignUpRequest;
  formError: IMessage | null;
  fieldErrors: {
    first_name: IMessage | null;
    last_name: IMessage | null;
    email: IMessage | null;
    password: IMessage | null;
    password_confirm: IMessage | null;
    policy: IMessage | null;
    locale: IMessage | null;
  } | null;
}

export interface IResetPassword {
  fields: EntitySignUpRequest;
  formError: IMessage | null;
  fieldErrors: {
    password: IMessage | null;
    password_confirm: IMessage | null;
  } | null;
}

export interface ListResumeResponse {
  success: boolean;
  formError: {
    en: string;
    th: string;
  } | null;
  fieldErrors: unknown | null;
  resumes: Resume[] | null;
  id: string | null;
}

export interface ListCompaniesResponse {
  success: boolean;
  formError: {
    en: string;
    th: string;
  } | null;
  fieldErrors: unknown | null;
  companies: Company | null;
  id: string | null;
}

export interface PublishError {
  status?: string;
  error?: string;
}

export interface IBodyFormData {
  id: string;
  [key: string]: unknown | undefined;
}
export interface IFeedback {
  bodyFormData: EntityCreateFeedbackRequest;
  success: boolean;
  formError: null | string;
  fieldErrors: {
    email: IMessage | null;
  } | null;
}
