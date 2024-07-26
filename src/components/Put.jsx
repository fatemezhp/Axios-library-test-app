import axios from "axios";
import { useState } from "react";

function Put({posts , setPosts}) {
    const [id, setId] = useState("");
    const [title,setTitle ] = useState("");

    const putHandler =() => {
      axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, { title })
      .then((res) => {
        const updatedPosts = posts.map(post => 
          post.id === parseInt(id) ? { ...post, title: res.data.title } : post)
          setId("");
          setTitle("")
        
        setPosts(updatedPosts);
      })
      .catch((error) => console.log(error));
    }
  return (
    <div className=" bg-red-500 flex flex-col gap-2 px-2 p-6 mt-5 rounded-lg ">
    <input
      className="p-1 rounded-lg"
      type="number"
      value={id}
      placeholder="Enter post number here"
      onChange={(event) => setId(event.target.value)}
    />
    <input
      className="p-1 rounded-lg"
      type="text"
      value={title}
      placeholder="change title"
      onChange={(event) => setTitle(event.target.value)}
    />
    <button onClick={putHandler} >Update</button>
  </div>
  )
}

export default Put