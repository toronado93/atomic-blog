import { useContext, useState } from "react";
import { Context } from "../../Context/Context";

export default function FormAddPost() {
  // Local State
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Context
  const { dispatch } = useContext(Context);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch({ type: "ADD-NEW-POST", payload: { title, body } });
        setTitle("");
        setBody("");
      }}
    >
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}
