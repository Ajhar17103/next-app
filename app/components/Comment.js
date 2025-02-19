import React from 'react'

export default async function Comment({commentPromise}) {
	const comments=await commentPromise
  return (
		<div className="bg-white shadow-lg rounded-xl p-6 border border-gray-200">
		<h2 className="text-3xl font-bold text-center mb-6">Comments</h2>
		<div className="space-y-6">
		  {comments.map((comment) => (
			<div
			  key={comment.id}
			  className="bg-gray-50 shadow rounded-lg p-4 border"
			>
			  <h3 className="text-xl font-semibold text-gray-800">{comment.name}</h3>
			  <p className="text-sm text-gray-500 mt-1">{comment.email}</p>
			  <p className="mt-3 text-gray-700 whitespace-pre-line">{comment.body}</p>
			</div>
		  ))}
		</div>
	  </div>
  )
}
