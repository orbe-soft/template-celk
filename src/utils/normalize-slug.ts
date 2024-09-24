export function normalizeSlug(slug: string[]) {
  const isEditing = slug.includes("edit");

  const idRegex =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  // checks if is a valid uuid
  const hasId = idRegex.test(slug[0]);

  const id = hasId ? slug[0] : undefined;

  return {
    isEditing,
    id,
  };
}
