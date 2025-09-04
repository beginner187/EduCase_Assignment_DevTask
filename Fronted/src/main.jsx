import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="w-[350px] h-[600px] bg-gray-200 border-1 border-slate-600 border-solid rounded-lg p-4">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </div>
  </div>
);
