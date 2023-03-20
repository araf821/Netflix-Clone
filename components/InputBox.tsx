import React, { useCallback, useState } from "react";
import Input from "./Input";

export function InputBox() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((currentVar) => (currentVar === "login" ? "register" : "login"));
  }, []);

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

        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700   transition">
          {variant === 'login' ? "Login" : "Sign Up"}
        </button>
        <p className="text-neutral-500 mt-12">
          {variant === 'login' ? "First time here? " : "Already have an account? "}
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
