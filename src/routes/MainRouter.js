import AboutUs from "../components/AboutUs";
import Home from "../components/Home";
import Root from "../layout/Root";
import SignUp from "../components/SignUp";
import Login from "../components/Login";

const MainRouter = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/aboutus", Component: AboutUs },
      { path: "/signup", Component: SignUp },
      { path: "/login", Component: Login },
    ],
  },
];

export default MainRouter;
