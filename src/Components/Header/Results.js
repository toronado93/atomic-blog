import { useContext } from "react";
import { Context, useDerivedStateHooks } from "../../Context/Context";

export function Results() {
  // Try to make it custom Hook
  const { state } = useContext(Context);
  const { searchQuery, posts } = state;

  const searchedPosts = useDerivedStateHooks({ posts, searchQuery });

  return <p>🚀 {searchedPosts.length} atomic posts found</p>;
}
