import { useEffect, useState } from "react";
import { Posts } from "../types";
import axiosApi from "../axiosApi";
import PostList from "../Components/PostList";

const Posts = () => {
  const [posts, setPosts] = useState<Posts>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosApi.get("posts.json");
        setPosts(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    void fetchData();
  }, []);

  return (
    <div>
      <div>{<PostList posts={posts} />}</div>
    </div>
  );
};

export default Posts;
