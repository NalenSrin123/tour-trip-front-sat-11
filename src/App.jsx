import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminLayout } from "./layouts/AdminLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={null} />
          <Route path="*" element={null} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;