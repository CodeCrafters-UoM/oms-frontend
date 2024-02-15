import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/routes";
import ItemDetails from "./components/ItemDetails";

function App() {
  return (
    <>
      <ItemDetails />
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
