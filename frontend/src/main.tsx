import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Profile from "./pages/Profile.tsx";
import Leaderboard from "./pages/Leaderboard.tsx";
import Explore from "./pages/Explore.tsx";
import Rank from "./pages/Rank.tsx";
import Login from "./components/layout/Login.tsx";
import GetStarted from "./pages/GetStarted/GetStarted.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Navigate to="leaderboard" />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="profile/:username" element={<Profile />} />
        <Route path="explore" element={<Explore />} />
        <Route path="rank" element={<Rank />} />
        <Route path="get-started" element={<GetStarted />} />
      </Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  </BrowserRouter>,
);
