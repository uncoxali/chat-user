export interface GetData {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data?: DataEntity[] | null;
  support: Support;
}
export interface DataEntity {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface Support {
  url: string;
  text: string;
}
