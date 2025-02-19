const getAllPost = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15');
	if (!res.ok) return []; // Return an empty array if the request fails
	return res.json();
  };
  
  const getPostDetails = async (id) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	if (!res.ok) return null; // Return null if the request fails
	return res.json();
  };
  
  const getCommentbyPost = async (id) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
	if (!res.ok) return []; // Return an empty array if the request fails
	return res.json();
  };
  
  export {
	getAllPost,
	getPostDetails,
	getCommentbyPost
  };
  