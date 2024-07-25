import axios from "axios";
import { useEffect, useState } from "react";
// at the first  place we start our journy with GET (reading data)

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data));
  }, []);
  console.log(posts);
  return (
    <div>
      <ul>
      {posts.map(post => <li key={post.id}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
      </li>) }
      </ul>
    </div>
  )
}

export default Posts;
