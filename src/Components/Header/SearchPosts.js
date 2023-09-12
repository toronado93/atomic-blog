import { useContext } from "react";
import { Context } from "../../Context/Context";

export function SearchPosts() {
  const { state, dispatch } = useContext(Context);

  const query = state.searchQuery;

  return (
    <input
      value={query}
      // onChange={(e) => setSearchQuery(e.target.value)}
      onChange={(e) => dispatch({ type: "QUERY", payload: e.target.value })}
      placeholder="Search posts..."
    />
  );
}
