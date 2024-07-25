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
      <h3 className="border-b-2 font-bold mb-3">Newest Posts</h3>
      <ul className="grid grid-cols-12 gap-1">
        {posts.map((post) => (
          <li
            className="p-1 rounded bg-gray-700  text-xs grid col-span-4 border w-2/3 h-min text-gray-400"
            key={post.id}
          >
            <h4 className="border-b-2 font-bold">{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
