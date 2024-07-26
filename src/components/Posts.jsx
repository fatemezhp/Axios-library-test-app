import axios from "axios";
import { useEffect, useState } from "react";
import DeletePost from "./DeletePost";
import PatchPost from "./PatchPost";

// at the first  place we start our journy with GET (reading data)

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data))
      .catch((error) => console.log(error));
  }, []);
  console.log(posts);
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-3">
      <DeletePost  posts={posts} setPosts={setPosts} />
      <PatchPost />

      </div>
    <div className="grid col-span-9">
      <h3 className="border-b-2 border-red-900 font-bold mb-3">
        Newest Gets
      </h3>
      {!posts.length && (
        <h3 className="font-bold text-red-600">
          Is Loading...
        </h3>
      )}
      <ul className="grid grid-cols-12 gap-1">
        {Array.isArray(posts) && posts.map((post) => (
          <li
            className="p-1 rounded bg-gray-700  text-xs grid col-span-4 border w-2/3 border-red-900 h-min text-gray-400"
            key={post.id}
          >
            <h4 className="border-b-2 border-red-900 font-bold">{post.id} .{post.title}</h4>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default Posts;
