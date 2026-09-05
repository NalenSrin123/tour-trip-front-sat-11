import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCategoryPage from "./pages/admin/categories/CreateCategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin/categories/create"
          element={<CreateCategoryPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;