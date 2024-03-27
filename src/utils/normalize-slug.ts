export function normalizeSlug(slug: string[]) {
  const isEditing = slug.includes("edit");

  const idRegex = /\b[a-f\d]{24}\b/;

  const hasId = idRegex.test(slug[0]);

  const id = hasId ? slug[0] : null;

  return {
    isEditing,
    id,
  };
}
