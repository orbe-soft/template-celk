import { PaginatedParams, PaginatedResponse } from "../types";

export type UserPreview = {
  id: string;
  firstName: string;
  lastName: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string
};

export type GetUsersParams = PaginatedParams;
export type GetUsersResponse = PaginatedResponse<UserPreview>;

export type CreateUserData = {
  firstName: string;
  lastName: string;
  email: string;
};
export interface UpdateUserData extends Partial<Omit<CreateUserData, "email">> {
  id: string;
}
