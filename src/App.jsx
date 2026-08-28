import { Navigate, Route, Routes } from "react-router-dom";
import OtpVerifyPage from "./pages/public/auth/OtpVerifyPage";

const App = () => {
  return (
    <Routes>
      <Route path="/verify-otp" element={<OtpVerifyPage />} />
      <Route path="*" element={<Navigate to="/verify-otp" replace />} />
    </Routes>
  );
};

export default App;
