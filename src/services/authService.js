const API_URL = import.meta.env.VITE_API_URL;


// User Login
// POST /api/login
export const login = async ({ email, password }) => {
  const response = await fetch(`${API_URL}/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Login failed");
  }

  return data;
};

export const resendOtp = async ({ email }) => {
  const res = await axios.post(`${API_URL}/auth/resend-otp`, { email });
  return res.data;
};

export const registerUser = async (userData) => {
  const res = await axios.post(`${API_URL}/auth/register`, userData);
  return res.data;
}
// register

const AuthService = {
  register: async (formData) => {
    const response = await fetch(`${API_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Register failed");
    }

    return data;
  },
};

export default AuthService;

// Verify Admin OTP
// POST /api/verify-otp
export const verifyOtp = async ({ email, otp }) => {
  const response = await fetch(`${API_URL}/api/verify-otp`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      email,
      otp,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "OTP verification failed");
  }

  return data;
};
