import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

import {
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { useNavigate } from "react-router";

const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value, // Updates the specific field being typed in
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents page reload
    console.log("Form Submitted:", formData);
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);
        navigate("/", { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
    //
    // You would typically send 'formData' to your backend API here
  };

  const handleGoogleSignUp = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user.displayName);
        //console.log(token);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="min-w-[50vw] min-h-[50vh] flex flex-col flex-1 m-2 p-10 bg-blue-100 border-2 rounded-2xl shadow-2xl">
      <h2 className="font-bold text-3xl text-purple-600 justify-center items-center">
        SignUp
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4 p-2 flex flex-row items-center gap-2">
          <label htmlFor="username">
            <h4 className="text-purple-900 text-lg">Username:</h4>
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            minLength={5}
            onChange={handleChange}
            required
            className=" border-2 rounded-lg border-purple-600 bg-white text-xl text-black"
          />
        </div>

        <div className="mb-4 p-2 flex flex-row items-center gap-2">
          <label htmlFor="email">
            <h4 className="text-purple-900 text-lg">Email:</h4>
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className=" border-2 rounded-lg border-purple-600 bg-white text-xl text-black"
          />
        </div>
        <div className="mb-4 p-2 flex flex-row items-center gap-2">
          <label htmlFor="password">
            <h4 className="text-purple-900 text-lg">Password: </h4>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className=" border-2 rounded-lg border-purple-600 bg-white text-xl text-black"
          />
        </div>
        <div className="mb-4 p-2 flex flex-row items-center gap-2">
          <button
            type="submit"
            className="btn btn-accent bg-purple-600 hover:bg-blue-700 text-white"
          >
            Create Account & Login
          </button>
          <h3 className="text-2xl text-gray-400">OR</h3>
          <button
            onClick={handleGoogleSignUp}
            className="m-2 p-2 btn btn-accent bg-amber-300 max-w-[180px]"
          >
            <FcGoogle /> SignUp via Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
