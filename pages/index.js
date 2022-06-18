import Head from "next/head";
import Feed from "../components/Feed";
import PostBox from "../components/PostBox";

export default function Home() {
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
      </div>
    </div>
  );
}
