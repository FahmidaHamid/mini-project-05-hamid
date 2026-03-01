import { useLoaderData } from "react-router";

const Users = () => {
  const users = useLoaderData();

  return (
    <div>
      <h1>There are {users.length} users...</h1>
      <div>
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
