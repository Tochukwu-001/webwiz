"use client";

import React, { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import {setDoc, doc} from "firebase/firestore";
import { auth, db } from "./Firebase";



function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Sign-in functionality
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("User Signed In:", userCredential.user);
      const user = auth.currentUser;
      console.log("User Signed In:", userCredential.user);
      if(user){
        // Redirect to blog page after successful sign-in
        window.location.href = "/blog";
      }
     
  
      // Redirect user to profile page
    } catch (error) {
      console.error("Sign-in Error:", error.message);
  // Handle errors here, such as displaying an error message to the user
    }
  };
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-800 px-4 z-0">
      <div className="w-full max-w-md bg-gradient-to-br from-gray-800 via-gray-700 to-gray-800 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-cyan-400 text-center mb-6">Sign In</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-lg bg-gray-700 text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-lg bg-gray-700 text-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold hover:scale-105 transform transition-all duration-300"
          >
            Sign In
          </button>
        </form>
        <div className="text-center text-gray-400 text-sm mt-4">
          Forgot your password?{" "}
          <span className= "text-cyan-400 cursor-pointer hover:underline" >
            Reset here
          </span>
        </div>
      </div>
    </div>
  );
}


export default AuthForm;

