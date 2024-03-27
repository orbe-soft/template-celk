import { PaginatedParams, PaginatedResponse } from "../types";

export type UserPreview = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
};

export type User = {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: object;
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
