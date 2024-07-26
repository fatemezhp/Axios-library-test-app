import axios from "axios";
import React, { useState } from "react";

function DeletePost({setPosts , posts}) {
  const [id, setId] = useState("");
  const deleteHandler = () => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        const updatedPosts = posts.filter(post => post.id !== parseInt(id));
        setPosts(updatedPosts);
        setId("");
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };
  return (
    <div className=" h-32 bg-red-600 flex flex-col gap-2 px-2 p-6 mt-5 rounded-lg ">
      <input
        className="p-1 rounded-lg"
        type="number"
        value={id}
        placeholder="Enter post number here"
        onChange={(event) => setId(event.target.value)}
      />
      <button onClick={deleteHandler}>Delete</button>
    </div>
  );
}

export default DeletePost;
