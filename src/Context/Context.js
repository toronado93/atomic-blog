import { useReducer } from "react";
import { faker } from "@faker-js/faker";
import { createContext } from "react";

export const Context = createContext();

export function createRandomPost() {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}

const initialState = {
  posts: Array.from({ length: 30 }, () => createRandomPost()),
  searchQuery: "",
};

export function useDerivedStateHooks({ posts, searchQuery }) {
  return searchQuery?.length > 0
    ? posts.filter((post) =>
        `${post.title} ${post.body}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
    : posts;
}

//Reducer
// dont forget reducer returns state
function reducer(state, action) {
  switch (action.type) {
    case "CLEAR-POST":
      return { posts: [], searchQuery: "" };
    case "ADD-NEW-POST":
      // Action payload must be an array;
      return {
        ...state, // Spread the current state to retain searchQuery , so always need to return rest of the state as well , otherwise we cause unwanted state information dissappearing problem
        posts: [
          {
            title: action.payload.title,
            body: action.payload.body,
          },
          ...state.posts,
        ],
      };

    case "QUERY":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
}

export default function ContextProvider({ children }) {
  // Create state
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}
