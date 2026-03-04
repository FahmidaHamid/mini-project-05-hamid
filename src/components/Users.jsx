import { useLoaderData } from "react-router";
import { AuthContext } from "../contexts/AuthContext";
import { use } from "react";

const Users = () => {
  // const { user } = use(AuthContext); --> check if a user could find the context
  // console.log(user);
  const users = useLoaderData();

  return (
    <div className="m-3 p-2">
      <h2 className="text-xl text-green-500 p-2">
        Users are loaded by <b>useLoaderData</b>, the loader function is defined
        in the utility file and called from the MainRoute.
      </h2>{" "}
      <div className="m-4 p2">
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <h1>{`${user.id}: ${user.name}`}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Users;
