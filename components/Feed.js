import { useQuery } from "@apollo/client";
import React from "react";
import { GET_ALL_POSTS, GET_ALL_POSTS_BY_TOPIC } from "../graphql/queries";
import Post from "./Post";

const Feed = ({ topic }) => {
  const { data, error } = !topic
    ? // eslint-disable-next-line react-hooks/rules-of-hooks
      useQuery(GET_ALL_POSTS)
    : // eslint-disable-next-line react-hooks/rules-of-hooks
      useQuery(GET_ALL_POSTS_BY_TOPIC, {
        variables: {
          topic: topic || "",
        },
      });

  const posts = !topic ? data?.getPostList : data?.getPostListByTopic;

  return (
    <div className="mt-5 space-y-4">
      {posts?.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
};

export default Feed;
