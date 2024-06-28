import React from "react";
import { Posts } from "../types";
import Post from "./Post";

interface Props {
    posts: Posts; 
}

const PostList: React.FC<Props> = ({posts}) => {
    return (
      <div className="d-flex flex-column-reverse">
        {posts ? (
          Object.keys(posts).map((key) => (
            <Post
              key={key}
              postId={key}
              date={posts[key].date}
              title={posts[key].title}
              message={posts[key].message}
            />
          ))
        ) : (
          <div className="mt-5 fs-3 fw-bold mx-auto">
            Нет доступных сообщений
          </div>
        )}
      </div>
    );
};

export default PostList;