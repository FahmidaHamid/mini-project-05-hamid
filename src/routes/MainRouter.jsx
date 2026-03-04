import AboutUs from "../components/AboutUs";
import Home from "../components/Home";
import Root from "../layout/Root";
import SignUp from "../components/SignUp";
import Login from "../components/Login";
import Users from "../components/Users";
import Posts from "../components/Posts";
import PostDetails from "../components/PostDetails";
import { postDetailsLoader, postsLoader, usersLoader } from "../utils/loaders";
import PrivateRoute from "./PrivateRoute";

const MainRouter = [
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "/aboutus", Component: AboutUs },
      { path: "/signup", Component: SignUp },
      { path: "/login", Component: Login },
      {
        path: "/users",
        element: (
          <PrivateRoute>
            <Users></Users>
          </PrivateRoute>
        ),

        loader: usersLoader,
      },
      { path: "/posts", Component: Posts, loader: postsLoader },
      {
        path: "/posts/:id",
        Component: PostDetails,
        loader: postDetailsLoader,
      },
    ],
  },
];

export default MainRouter;
