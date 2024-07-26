import axios from 'axios'
import React, { useState } from 'react'

function Post({posts , setPosts}) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const postHandler =() => {
    axios.post("https://jsonplaceholder.typicode.com/posts" , { title , body})
    .then((res) => {
      setPosts([...posts, res.data]);
      setTitle("");
      setBody(""); 
    })
    .catch((error)=> console.log(error))
  }
    return (
        <div className=" bg-red-700 flex flex-col gap-2 px-2 p-6 mt-5 rounded-lg ">
        <input
          className="p-1 rounded-lg"
          type="text"
          value={title}
          placeholder="Enter post title here"
          onChange={(event) => setTitle(event.target.value)}
        />
        <input
          className="p-1 rounded-lg"
          type="text"
          value={body}
          placeholder="Enter post body here"
          onChange={(event) => setBody(event.target.value)}
        />
        <button onClick={postHandler} >Create</button>
      </div>
      )
    }

export default Post