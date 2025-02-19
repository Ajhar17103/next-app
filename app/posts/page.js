import { getAllPost } from "@/lib/postApi/posts";
import Link from "next/link";

export default async function Posts() {

    const getpostData = await getAllPost();

    if (!getpostData || getpostData.length === 0) {
      return (
        <div className="min-h-screen flex items-center justify-center text-gray-700">
          <p>No posts available.</p>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">All Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {getpostData.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-xl p-6 border border-gray-200"
            >
              <h2 className="text-lg font-semibold text-gray-800 truncate">{post.title}</h2>
              <p className="text-gray-600 mt-2 text-sm line-clamp-3">{post.body}</p>
              <Link
                href={`/posts/${post.id}`}
                className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                aria-label={`View details of post ${post.id}`}
              >
                Show Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
}
