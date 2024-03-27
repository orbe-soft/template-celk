export type PaginatedParams<T = unknown> = {
  page: number;
  limit: number;
} & T;

export type PaginatedResponse<T> = {
  data: T[];
  limit: number;
  page: number;
  total: number;
};
