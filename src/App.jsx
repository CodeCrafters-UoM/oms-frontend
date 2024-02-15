import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import AddItems from "./components/AddItems";

function App() {
  return (
    <>
    <AddItems />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
