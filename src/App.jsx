// axios library is a new way to fetch data and easier to fetch ,and better performance
import { useState } from "react";
import Posts from "./components/Posts";
import Layout from "./Layout";
import Login from "./components/Login";

function App() {
  const [login,setLogin] = useState(null)
  return (

    !!login 
    ? <Login login={login} setLogin={setLogin} /> 
    : <Layout setLogin={setLogin} > <Posts/> </Layout>
 
  );
}

export default App;
