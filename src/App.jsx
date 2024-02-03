import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Key from "./pages/Key";
import Progression from "./pages/Progression";
import Scale from "./pages/Scale";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Key />,
    },
    {
      path: "key",
      element: <Key />,
    },
    {
      path: "progression",
      element: <Progression />,
    },
    {
      path: "scale",
      element: <Scale />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
