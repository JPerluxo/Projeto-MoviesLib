import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

import Home from "./pages/Home/index.jsx";
import Movie from "./pages/Movie/index.jsx";
import Search from "./pages/Search/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="movie/:id" element={<Movie/>}/>
          <Route path="search" element={<Search/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
