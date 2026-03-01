import axios from "axios";

import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setErrors] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res); // for us to check
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err);
      });
  }, []);

  return (
    <div>
      <h1 className="text-xl font bold p-2">
        This page demonstrates how to load data for a component...
      </h1>
      {error && <p className="text-red-400">{error.message}</p>}
      <ul className="p-3">
        {users.map((user) => (
          <li key={user.id} className="text-lg text-purple-500">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
