import Comment from "@/app/components/Comment";
import { getCommentbyPost, getPostDetails } from "@/lib/postApi/posts";
import Link from "next/link";
import { Suspense } from "react";


export async function generateMetadata({ params }){
	const { id } = params;
	const postDetails=await getPostDetails(id)
	return {
		title: postDetails.title,
		description: postDetails.body,
}
}

export default async function asyncPostDetails({ params }) {
	const { id } = params;
	const postPromise= await getPostDetails(id)
	const commentPromise= await getCommentbyPost(id);

	const postDetails=await postPromise;

  if (!postDetails.id) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-700">
        <p>Post not found.</p>
      </div>
    );
  }

  return (
<div className="min-h-screen bg-gray-100 p-6">
  <div className="max-w-4xl mx-auto space-y-8">
    {/* Post Details Card */}
    <div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800">{postDetails.title}</h1>
      <p className="text-gray-600 mt-2">{postDetails.body}</p>
      <div className="mt-4 text-sm text-gray-500">
        <span>User ID: {postDetails.userId}</span> | <span>Post ID: {postDetails.id}</span>
      </div>
      <div className="mt-6">
        <Link
          href="/posts"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
        >
          Back to Posts
        </Link>
      </div>
    </div>
	<Suspense fallback="<h5>Loading...</h5>">
	<Comment commentPromise={commentPromise}/>
	</Suspense>
 
  </div>
</div>

  );
}

