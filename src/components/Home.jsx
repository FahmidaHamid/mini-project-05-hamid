import axios, { CanceledError } from "axios";

import { useEffect, useState } from "react";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [error, setErrors] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    // approach 01
    axios
      .get("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        console.log(res); // for us to check
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        if (err instanceof CanceledError) return; // don't show
        setErrors(err);
        setIsLoading(false);
      });
    return () => {
      // clean up logic...
      controller.abort();
    };
    // approach 02 -> async-await
    // const getUsers = async () => {
    //   try {
    //     const res = await axios.get(
    //       "https://jsonplaceholder.typicode.com/users",
    //     );
    //     setUsers(res.data);
    //   } catch (err) {
    //     setErrors(err.message);
    //   }
    // };
    // getUsers();
  }, []);

  return (
    <div>
      <h1 className="text-xl font bold p-2">
        This page demonstrates how to load data for a component...
      </h1>
      {isLoading && (
        <>
          <h1 className="text-3xl text-red-600">Loading ...</h1>
          <span className="loading loading-infinity loading-xs"></span>
          <span className="loading loading-infinity loading-sm"></span>
          <span className="loading loading-infinity loading-md"></span>
          <span className="loading loading-infinity loading-lg"></span>
          <span className="loading loading-infinity loading-xl"></span>
        </>
      )}
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

/*
Notes on CanceledError:

The CanceledError in React with Axios indicates 
that an HTTP request was intentionally aborted before 
completion, most commonly when a component unmounts. 

This is a normal part of memory leak prevention and 
can be handled using the AbortController API and an if 
check in the catch block.

*/

/*
In React, component unmounting is the final phase in the component lifecycle where a component instance and its associated DOM elements are removed from the web page. 
freeCodeCamp
freeCodeCamp
 +1
This happens in scenarios such as:
Conditional Rendering: When a condition that renders a component becomes false, the component is unmounted.
Navigation: When the user navigates to a different page or view in a single-page application using a router, the previous component(s) may be unmounted.
Parent Removal: When a parent component is unmounted, all its child components are also unmounted. 
Stack Overflow
Stack Overflow
 +3


*/
