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
import Products from "./View/cart/Products";
import MyUseEffect from "./Components/React-Topics/UseEffect/MyUseEffect";
import ParentComponent from "./Components/React-Topics/Useref/ForwardRef";
import { ThemeButton } from "./Components/React-Topics/Usecontext/ThemeContext";
import DatePiker from "./Components/React-Topics/DatePiker";
import CustomDatePicker from "./Components/React-Topics/CustomDatePicker";
import Mymainclass from "./Components/React-Topics/Classbased/Mymainclass";
import FuntionalTabForm from "./Components/React-Topics/TabedForm/FuntionalTabForm";
import Imagegallery from "./Components/React-Topics/ImageGallery/Imagegallery";
import Dropdown from "./Components/React-Topics/DependentDropdown/Dropdown";
import HomePage from "./Components/Header/HomePage";
import AddMoreField from "./Components/React-Topics/AddMoreField/AddMoreField";
import MainTodo from "./Components/React-Topics/Todo/MainTodo";

const router = createBrowserRouter([
  {
    element: <AppLayoutes />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/ProductList",
        element: <ProductList />,
      },
      {
        path: "/productcart",
        element: <Products />,
      },
      {
        path: "/",
        element: <HomePage />,
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
        path: "/effect",
        element: <MyUseEffect />,
      },
      {
        path: "/farwardref",
        element: <ParentComponent />,
      },
      {
        path: "/theme",
        element: <ThemeButton />,
      },
      {
        path: "/datepicker",
        element: <DatePiker />,
      },
      {
        path: "/cdatepicker",
        element: <CustomDatePicker />,
      },
      {
        path: "/class_component",
        element: <Mymainclass />,
      },
      {
        path: "/functiontabForm",
        element: <FuntionalTabForm />,
      },
      {
        path: "/images",
        element: <Imagegallery />,
      },
      {
        path: "/dropdown",
        element: <Dropdown />,
      },
      {
        path: "/addfield",
        element: <AddMoreField />,
      },
      {
        path: "/todo",
        element: <MainTodo />,
      },
      {
        path: "/*",
        element: <Navigate to={"/login"} replace />,
      },
    ],
  },
]);

export default router;
