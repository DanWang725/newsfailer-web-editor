import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";

export function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/about" element={} />
        <Route exact path="/edit" element={} /> */}
      </Routes>
    </div>
  );
}