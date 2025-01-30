import useFetch from "./Fetchapi";

const Listing = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <div>
      <h1>Posts</h1>
      <ul>{data && data.map((post) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  );
};

export default Listing;
