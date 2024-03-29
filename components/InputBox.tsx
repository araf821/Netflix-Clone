import React, { useCallback, useState } from "react";
import Input from "./Input";
import axios from "axios";
import { signIn } from "next-auth/react";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export function InputBox() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVar) => (currentVar === "login" ? "register" : "login"));
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        callbackUrl: "/profiles",
      });
    } catch (error) {
      console.log(error);
    }
  }, [email, password]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
      });
      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, login]);

  return (
    <div className="flex justify-center ">
      <div className="bg-black/70 px-10 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
        <h2 className="text-white text-4xl mb-8 font-semibold">
          {variant === "login" ? "Sign In" : "Sign Up"}
        </h2>
        <div className="flex flex-col gap-4">
          {variant === "register" && (
            <Input
              id="name"
              label="Name"
              value={name}
              onChange={(e: any) => setName(e.target.value)}
            />
          )}

          <Input
            id="email"
            type="email"
            label="Email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />

          <Input
            id="password"
            type="password"
            label="Password"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
          />
        </div>

        <button
          onClick={variant === "login" ? login : register}
          className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700   transition"
        >
          {variant === "login" ? "Login" : "Sign Up"}
        </button>

        {/* Third Party Authentication Buttons */}
        <div className="flex flex-row items-center gap-4 mt-8 justify-center">
          <div
            onClick={() => signIn("google", { callbackUrl: "/profiles" })}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
          >
            <FcGoogle size={30} />
          </div>
          <div
            onClick={() => signIn("github", { callbackUrl: "/profiles" })}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center cursor-pointer hover:opacity-80 transition"
          >
            <FaGithub size={30} />
          </div>
        </div>

        <p className="text-neutral-500 mt-12">
          {variant === "login"
            ? "First time here? "
            : "Already have an account? "}
          <span
            onClick={toggleVariant}
            className="text-white ml-1 hover:underline cursor-pointer"
          >
            {variant === "login" ? "Create new account!" : "Sign in!"}
          </span>
        </p>
      </div>
    </div>
  );
}
