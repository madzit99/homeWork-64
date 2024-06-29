import { useEffect, useState } from "react";
import { Posts } from "../types";
import axiosApi from "../axiosApi";
import PostList from "../Components/PostList";
import Preloader from "../Components/Preloader";

const Posts = () => {
  const [posts, setPosts] = useState<Posts>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axiosApi.get("posts.json");
        setPosts(response.data);
      } finally {
        setLoading(false);
      }
    };
    void fetchData();
  }, []);

  return (
    <div>
      <div>{loading ? <Preloader /> : <PostList posts={posts} />}</div>
    </div>
  );
};

export default Posts;
