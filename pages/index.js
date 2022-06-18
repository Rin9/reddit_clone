import { useQuery } from "@apollo/client";
import Head from "next/head";
import Feed from "../components/Feed";
import PostBox from "../components/PostBox";
import SubredditRow from "../components/SubredditRow";
import { GET_SUBREDDITS_WITH_LIMIT } from "../graphql/queries";

export default function Home() {
  const { data } = useQuery(GET_SUBREDDITS_WITH_LIMIT, {
    variables: {
      limit: 10,
    },
  });

  // console.log(result);

  const subreddits = data?.getSubredditsListLimit;
  // console.log("subreddits: ", data);

  return (
    <div className="max-w-5xl my-7 mx-auto p-5">
      <Head>
        <title>Reddit Clone</title>
      </Head>
      {/* post box */}
      <PostBox />
      {/* feed */}
      <div className="flex">
        <Feed />
        <div className="sticky top-36 mx-5 mt-5 hidden h-fit min-w-[300px] rounded-md border border-gray-300 bg-white lg:inline">
          <p className="text-md mb-1 p-4 pb-3 font-bold">Top Communities</p>
          <div>
            {/* list subreddits */}
            {subreddits?.map((subreddit, index) => (
              <SubredditRow
                key={subreddit.id}
                topic={subreddit.topic}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
