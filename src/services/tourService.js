const API_BASE_URL = (
    import.meta.env.VITE_API_URL || "http://localhost:8000"
).replace(/\/$/, "");

export async function createTour(tourData) {
  let response;

  try {
    response = await fetch(`${API_BASE_URL}/api/tours`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(tourData),
    });
  } catch (error) {
    throw new Error(
      `Cannot connect to the backend API at ${API_BASE_URL}. Make sure the backend is running and VITE_API_URL is correct.`
    );
  }

  let responseData = null;
  try {
    responseData = await response.json();
  } catch {
    responseData = null;
  }

  if (!response.ok) {
    const validationMessage =
      responseData?.message ||
      Object.values(responseData?.errors || {}).flat().join(" ");
    throw new Error(validationMessage || `Create Tour failed (${response.status}).`);
  }

  return responseData;
}


export async function fetchTours() {
  const response = await fetch(`${API_BASE_URL}/api/tours`);
  if (!response.ok) {
    throw new Error(`Failed to load tours (${response.status}).`);
  }
  return response.json();
}
