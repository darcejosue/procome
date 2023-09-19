import React from "react";
import { Route, Routes } from "react-router-dom";

import Semanal from "../components/semanal";
import Any from "../components/anyComponent";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Semanal />} />
      <Route path="/Any" element={<Any />} />
    </Routes>
  );
}

export default Router;