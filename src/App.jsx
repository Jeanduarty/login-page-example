import React from "react";

import { Home } from "./templates/Home";
import { RequireAuth } from "./contexts/Auth/util";
import { Route, Routes } from "react-router-dom";
import { Private } from "./templates/Private";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/private"
        element={
          <RequireAuth>
            <Private />
          </RequireAuth>
        }
      />
    </Routes>
  );
}

export default App;
