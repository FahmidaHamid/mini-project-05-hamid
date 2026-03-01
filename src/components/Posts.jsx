import React from "react";
import { Link, useLoaderData } from "react-router";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <div className="m-3 p-2">
      <h2 className="text-xl text-green-500">
        Posts are loaded use <b>useLoaderData</b>, loader defined in the
        MainRoute{" "}
      </h2>
      <ul className="m-5 p-5">
        {posts.map((post) => (
          <div className="b-1" key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
