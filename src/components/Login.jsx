import axios from "axios";
import React, { useState } from "react";
import styles from '../css/Login.module.css'
function Login({login, setLogin}) {
  const [fullName, setFullName] = useState("");
  
  const posetHandler = () => {
    axios.post("https://jsonplaceholder.typicode.com/users", { title : fullName})
    .then((res) => console.log(res))
  }
  return (
    <div id={styles.Blur} className="fixed left-1/4 top-1/4  w-1/2 h-1/4">

      <span className="font-bold text-3xl m-5 cursor-pointer" onClick={() => setLogin(null)}> X </span>

      <div className="flex flex-col gap-3 p-8">
    
        <input
          className="p-4 rounded"
          name="fname"
          type="fullName"
          placeholder="Enter your fullName..."
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
        />
        <button onClick={posetHandler}>submit</button>
      </div>
    </div>
  );
}

export default Login;
