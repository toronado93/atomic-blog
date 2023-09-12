import { useEffect, useState } from "react";
import { Header } from "./Components/Header/Header";
import { Results } from "./Components/Header/Results";
import ContextProvider from "./Context/Context";
import Main from "./Components/Main/Main";
import Posts from "./Components/Main/Posts";
import FormAddPost from "./Components/Main/FormAddPost";
import { Footer } from "./Components/Footer";
import { Archive } from "./Components/Archieve/Archive";

function App() {
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Whenever `isFakeDark` changes, we toggle the `fake-dark-mode` class on the HTML element (see in "Elements" dev tool).
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
    <ContextProvider>
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>
        <Header>
          <Results />
        </Header>

        <Main>
          <FormAddPost />
          <Posts />
        </Main>
        <Archive />
        <Footer />
      </section>
    </ContextProvider>
  );
}

export default App;
