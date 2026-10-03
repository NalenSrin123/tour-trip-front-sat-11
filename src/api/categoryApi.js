const BASE_URL = "https://tour-trip-back-sat-11-laravel.onrender.com";

export const createCategory = async (categoryName, description) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${BASE_URL}/api/categories`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(token && {
        Authorization: `Bearer ${token}`,
      }),
    },
    body: JSON.stringify({
      category_name: categoryName,
      description: description,
    }),
  });

  const text = await response.text();

  let data = null;

  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      data = text;
    }
  }

  if (!response.ok) {
    throw new Error(
      data?.message ||
        data ||
        `Failed to create category (${response.status})`
    );
  }

  return data;
};