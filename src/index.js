import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Missing />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/post", element: <NewPost /> },
      { path: "/post/:id", element: <PostPage /> },
      { path: "/about", element: <About /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
