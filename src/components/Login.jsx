import React, { useState } from "react";

function Login({login, setLogin}) {
  const [fullName, setFullName] = useState("");
  
  return (
    <div className=" backdrop-blur-[3px] fixed top-0 left-0  w-full h-full bg-dark-400">

      <span className="font-bold text-3xl m-5 cursor-pointer" onClick={() => setLogin(null)}> X </span>

      <form className="flex absolute top-1/3 left-1/3">
        <label htmlFor="fname">Enter you full name here :</label>
        <input
          className="p-4 rounded"
          name="fname"
          type="fullName"
          placeholder="your fullName..."
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
        <button>submit</button>
      </form>
    </div>
  );
}

export default Login;
