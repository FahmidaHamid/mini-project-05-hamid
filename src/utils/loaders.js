import axios from "axios";

export async function postsLoader() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //return res.data.slice(0, 10);
  return res.data;
}

export async function postDetailsLoader({ params }) {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
  );
  return res.data;
}

export async function usersLoader() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
}
