// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Result from "./pages/Result";

// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Main />,
//     },
//     {
//       path: "/result/:key:/scale/:progression",
//       element: <Result />,
//     },
//   ]);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route
          path="/result/:key?/:scale?/:progression?"
          element={<Result />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
