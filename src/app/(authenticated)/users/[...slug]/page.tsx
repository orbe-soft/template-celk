import { type Metadata } from "next";
import { normalizeSlug } from "@/utils/normalize-slug";
import { Form } from "./form";

export interface IParams {
  [key: string]: string[];
}

export function generateMetadata({ params }: { params: IParams }): Metadata {
  const { isEditing } = normalizeSlug(params.slug);

  const title = isEditing ? "Edit user" : "New user";

  return {
    title,
  };
}

export default function Users() {
  return <Form />;
}
