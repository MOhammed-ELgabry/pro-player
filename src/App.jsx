import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<h1>register</h1>} />
        <Route path="/login" element={<h1>login</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
