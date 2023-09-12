import { useContext } from "react";
import { SearchPosts } from "./SearchPosts";
import { Context } from "../../Context/Context";

// Consumer Component
export function Header({ children }) {
  const { state, dispatch } = useContext(Context);

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        {children}

        <SearchPosts />
        <button
          onClick={() => {
            dispatch({ type: "CLEAR-POST" });
          }}
        >
          Clear posts
        </button>
      </div>
    </header>
  );
}
