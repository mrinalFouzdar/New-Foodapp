import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurnatMenu from "./components/RestaurnatMenu";
const AppLayout = () => {
  // useEffect(() => {
  //   // Disable text selection on the entire component
  //   document.getElementById('app').addEventListener('keydown', function (e) {
  //     if (e.ctrlKey || e.metaKey) {
  //       // Allow Ctrl or Command key combinations
  //       return;
  //     }
  //     e.preventDefault();
  //   });
  
  //   // Disable right-click context menu
  //   document.getElementById('app').addEventListener('contextmenu', function (e) {
  //     e.preventDefault();
  //   });
  
  //   return () => {
  //     // Cleanup event listeners when the component unmounts
  //     document.getElementById('app').removeEventListener('keydown', preventCopy);
  //     document.getElementById('app').removeEventListener('contextmenu', preventContextMenu);
  //   }
  // }, []);
  return (
    <div className="app" id="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurnatMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root)
root.render(<RouterProvider router={appRouter} />);
