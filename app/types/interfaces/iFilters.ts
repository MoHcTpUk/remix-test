export interface IFilter {
  date_of_post?: string | null;
  specialization?: string[] | null;
  salary_estimate_from?: string | null;
  employment?: string[] | null;
  features?: string[] | null;
  education_level?: string[] | null;
  work_experience?: string[] | null;
  id?: string;
  query?: string;
  search_by_city?: string;
  limit?: string;
  number_of_vacancies?: string;
  number_of_employees?: string[] | null;
  current_page?: string;
  current_token?: string;
  max_page_size?: string;
}
