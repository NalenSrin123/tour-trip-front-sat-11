const BASE_URL = "http://tour-trip-sat-11-laravel.duckdns.org/api/tour-categories";

export async function updateCategory(id, payload) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      category_name: payload.name,
      description: payload.description,
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to update category");
  }

  return await response.json();
}