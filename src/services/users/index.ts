import axios from "@/libs/axios";

import {
  User,
  GetUsersParams,
  GetUsersResponse,
  CreateUserData,
  UpdateUserData,
} from "./types";

export const users = {
  async get(params: GetUsersParams) {
    const { data: users } = await axios.get<GetUsersResponse>("/user", {
      params,
    });
    return users;
  },
  async getById(userId: string) {
    const { data: user } = await axios.get<User>("/user/" + userId);
    return user;
  },
  async create(createUserData: CreateUserData) {
    const { data: createdUser } = await axios.post<User>(
      "/user/create",
      createUserData,
    );
    return createdUser;
  },
  async update({ id: userId, ...updateUserData }: UpdateUserData) {
    const { data: updatedUser } = await axios.put<User>(
      "/user/" + userId,
      updateUserData,
    );
    return updatedUser;
  },
  async delete(userId: string) {
    const { data: deletedUser } = await axios.delete<User>("/user/" + userId);
    return deletedUser;
  },
};
