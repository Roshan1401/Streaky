import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile.tsx";
import Leaderboard from "./pages/Leaderboard.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="leaderboard" />} />
        <Route path="leaderboard" element={<Leaderboard />} />

        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
