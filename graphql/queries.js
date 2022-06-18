import { gql } from "@apollo/client";

export const GET_SUBREDDIT_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getSubredditListByTopic(topic: $topic) {
      # body
      created_at
      id
      topic
      # image
      # subreddit_id
      # title
      # username
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query MyQuery {
    getPostList {
      title
      username
      subreddit_id
      id
      body
      created_at
      image
      subreddit {
        id
        topic
        created_at
      }
      comments {
        text
        username
        created_at
        id
        post_id
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_ALL_POSTS_BY_TOPIC = gql`
  query MyQuery($topic: String!) {
    getPostListByTopic(topic: $topic) {
      title
      username
      subreddit_id
      id
      body
      created_at
      image
      subreddit {
        id
        topic
        created_at
      }
      comments {
        text
        username
        created_at
        id
        post_id
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;

export const GET_ALL_VOTES_BY_POST_ID = gql`
  query MyQuery($post_id: ID!) {
    getVoteByPostId(post_id: $post_id) {
      username
      post_id
      id
      upvote
      created_at
    }
  }
`;
export const GET_SUBREDDITS_WITH_LIMIT = gql`
  query MyQuery($limit: Int!) {
    getSubredditsListLimit(limit: $limit) {
      id
      created_at
      topic
    }
  }
`;
export const GET_ALL_POSTS_BY_ID = gql`
  query MyQuery($post_id: ID!) {
    getPostListByPostId(post_id: $post_id) {
      title
      username
      subreddit_id
      id
      body
      created_at
      image
      subreddit {
        id
        topic
        created_at
      }
      comments {
        text
        username
        created_at
        id
        post_id
      }
      votes {
        created_at
        id
        post_id
        upvote
        username
      }
    }
  }
`;
