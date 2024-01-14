import { createBrowserRouter } from "react-router-dom";
import Main from "./Main";
import Home from "../components/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      //   {
      //     path: "/about",
      //     element: <About></About>,
      //   },
      //   {
      //     path: "/resume",
      //     element: <Resume></Resume>,
      //   },
      //   {
      //     path: "/contact",
      //     element: <Contact></Contact>,
      //   },
      //   {
      //     path: "/projects",
      //     element: <Projects></Projects>,
      //   },
      //   {
      //     path: "/blog",
      //     element: <Blog></Blog>,
      //   },
    ],
  },
]);
