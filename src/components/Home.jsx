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
      <h1>This is home...for the following users:</h1>
      {error && <p className="text-red-400">{error.message}</p>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
