import { useMutation, useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import Post from "../../components/Post";
import { GET_ALL_POSTS_BY_ID } from "../../graphql/queries";
import { SubmitHandler, useForm } from "react-hook-form";
import { ADD_COMMENT } from "../../graphql/mutations";
import toast from "react-hot-toast";
import Avatar from "../../components/Avatar";
import ReactTimeago from "react-timeago";

const PostPage = () => {
  const {
    query: { postId },
  } = useRouter();
  const { data: session } = useSession();
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: [GET_ALL_POSTS_BY_ID, "getPostListByPostId"],
  });

  const { data, error } = useQuery(GET_ALL_POSTS_BY_ID, {
    variables: {
      post_id: postId,
    },
  });
  const post = data?.getPostListByPostId[0];

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // post comment here
    console.log(data);
    if (!session) {
      toast.error("You are not sign in");
      return;
    }
    const notification = toast.loading("Posting Comment...");
    await addComment({
      variables: {
        post_id: postId,
        username: session?.user?.name,
        text: data.comment,
      },
    });
    setValue("comment", "");
    toast.success("Comment Posted", {
      id: notification,
    });
  };

  // console.log("comment:", data);

  return (
    <div className="mx-auto my-7 max-w-5xl">
      <Post post={post} />
      <div className="-mt-1 rounded-b-md border border-t-0 border-gray-300 bg-white p-5 pl-16">
        <p className="text-sm">
          Comment as <span className="text-red-500">{session?.user?.name}</span>
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex space-y-2 flex-col"
        >
          <textarea
            {...register("comment")}
            disabled={!session}
            className="h-24 rounded-md border border-gray-200 p-2 pl-4 outline-none disabled:bg-gray-50"
            placeholder={session ? "Thoughts?" : "Please Sign In To Comment"}
          />
          <button
            disabled={!session}
            type="submit"
            className="rounded-full bg-red-500 p-3 font-semibold text-white disabled:bg-gray-200 trans-base hover:scale-95"
          >
            Comment
          </button>
        </form>
      </div>

      <div className="-my-5 rounded-b-md border border-t-0 border-gray-300 bg-white py-5 px-10">
        <hr className="py-2" />
        {post?.comments.map((comment) => (
          <div
            className="relative items-center flex space-x-2 space-y-5"
            key={comment.id}
          >
            <hr className="absolute top-10 h-16 border left-7 z-0" />
            <div className="z-20">
              <Avatar seed={comment.username} />
            </div>
            <div className="flex flex-col">
              <p className="py-2 text-xs text-gray-400">
                <span className="font-semibold text-gray-600">
                  {comment.username} -
                </span>
                <ReactTimeago date={comment.created_at} />
              </p>
              <p className="">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
