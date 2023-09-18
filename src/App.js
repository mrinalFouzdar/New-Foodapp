import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurnatMenu from "./components/RestaurnatMenu";
import UserContext from "./utils/useContext";

const About = lazy(() => import("./components/About"));
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(() => {
    const data = {
      name: "Mrinal Fouzdar",
    };

    setUserName(data.name);
  }, []);
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
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className="app" id="app">
        <UserContext.Provider value={{ loggedInUser: "Elon mask" }}>
          <Header />
        </UserContext.Provider>
        <Outlet />
      </div>
    </UserContext.Provider>
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
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            {" "}
            <Grocery />
          </Suspense>
        ),
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
