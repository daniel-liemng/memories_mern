import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();

  // state is from global reducer - index
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <div>
      Posts
      <Post />
    </div>
  );
};

export default Posts;
