import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Movie } from "../pages/Movie";
import { Profile } from "../pages/Profile";
import { Details } from "../pages/Details";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/movie" element={<Movie />} />
    </Routes>
  );
}
