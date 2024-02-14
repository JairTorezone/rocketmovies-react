import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Movie } from "../pages/Movie";
import { Profile } from "../pages/Profile";
import { Preview } from "../pages/Preview";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/preview" element={<Preview />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  );
}
