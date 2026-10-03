import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const verifyOtp = async ({ email, code }) => {
  const res = await axios.post(`${API_URL}/auth/verify-otp`, { email, code });
  return res.data;
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