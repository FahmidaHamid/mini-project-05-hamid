import { Link, NavLink, useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
  const post = useLoaderData();
  //const navigate = useNavigate();
  return (
    <div>
      <div className="p-2 m-1">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </div>
      <NavLink to="/posts">
        <button
          className="btn btn-outline border-2 border-purple-400 bg-purple-50"
          // onClick={() => navigate(-1)}
        >
          Go Back
        </button>
      </NavLink>
    </div>
  );
};

export default PostDetails;
