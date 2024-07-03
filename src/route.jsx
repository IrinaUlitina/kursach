

import {
    RouterProvider,
    createBrowserRouter,
  } from "react-router-dom";
import Header from "./component/header";
import Ligi from "./page/ligi";
import KalendarLigi from "./page/kalendarLigi";
import Komand from "./page/komand";
import KalendarKomand from "./page/kalendaKomand";

  
  export function AppRouste(params) {

    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <>
            <Header link={"ligi"}/>
            <Ligi/>
          </>
        ),
      },
      {
        path: "/liga/:id",
        element: (
          <>
            <Header link={"ligi"}/>
            <KalendarLigi/>
          </>
        ),
      },
      {
        path: "/komand",
        element: (
          <>
            <Header link={"komand"}/>
            <Komand/>
          </>
        ),
      },
      {
        path: "/komand/:id",
        element: (
          <>
            <Header link={"komand"}/>
            <KalendarKomand/>
          </>
        ),
      },
     
   
    ]);
  
    return <RouterProvider router={router} />;
  }
  