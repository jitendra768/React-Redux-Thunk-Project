import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayoutes from "./Applayoutes/AppLayoutes";
import ProductList from "./View/ProductListing";
import ControlComponents from "./Components/React-Topics/Controll&Uncontrolled/ControlComponents";
import Counter from "./Components/React-Topics/CustomHook/Counter";
import Usememo from "./Components/React-Topics/UseMemo/Usememo";
import Usecallback from "./Components/React-Topics/UseCallback/Usecallback";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Login from "./Pages/Login";
import UseStateHook from "./Components/React-Topics/Usestate/UseStateHook";
import Counter1 from "./Components/React-Topics/LifeCycle/LifeCycle";
import Topiccss from "./Components/React-Topics/Card/Topiccss";
import Register from "./Pages/Register";


const router = createBrowserRouter([
  {
    element: <AppLayoutes />,
    children: [
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>,
      },
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/topics",
        element: <Topiccss />,
      },
      {
        path: "/control",
        element: <ControlComponents />,
      },
      {
        path: "/customHook",
        element: <Counter />,
      },
      {
        path: "/useMemo",
        element: <Usememo />,
      },
      {
        path: "/callback",
        element: <Usecallback />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/usestate",
        element: <UseStateHook />,
      },
      {
        path: "/lifecycle",
        element: <Counter1 />,
      },
      {
        path: "/*",
        element: <Navigate to={'/login'} replace/>,
      },
    ],
  },
]);

export default router;
