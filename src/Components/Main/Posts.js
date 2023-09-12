import { useContext } from "react";
import { Context, useDerivedStateHooks } from "../../Context/Context";

export default function Posts() {
  return (
    <section>
      <List />
    </section>
  );
}

function List() {
  // Try to make it custom Hook
  const { state } = useContext(Context);
  const { searchQuery, posts } = state;

  const searchedPosts = useDerivedStateHooks({ posts, searchQuery });

  return (
    <ul>
      {searchedPosts.map((post, i) => (
        <li key={i}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
}
