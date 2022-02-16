import { useState } from "react";
import { AddQuery } from "./components/AddQuery";
import { GridGifItem } from "./components/GridGifItem";

export const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="container">
      <AddQuery setQuery={setQuery} />
      <hr />
      <GridGifItem query={query} />
    </div>
  );
};
