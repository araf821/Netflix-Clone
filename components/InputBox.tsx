import React, { useState } from "react";
import Input from "./Input";

export function InputBox() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <div className="flex justify-center ">
      <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
        <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
        <div className="flex flex-col gap-4">
          <Input
            id="name"
            label="Username"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
          />

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
          Sign In
        </button>
      </div>
    </div>
  );
}
