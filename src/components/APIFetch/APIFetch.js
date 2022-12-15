import React, { useState, useEffect } from "react";
import { useFetch } from ".././hooks/useFetch";

function APIFetch() {
  const [fetchedData, isLoading, error] = useFetch(
    "https://jsonplaceholder.typicode.com/todos",
    { method: "GET" }
  );
  return (
    <div>
      {isLoading
        ? "Loading"
        : fetchedData.length > 0
        ? fetchedData.map((todo, index) => {
            return <div key={index}>{todo.title}</div>;
          })
        : null}

      {error && <div>This is an Error!</div>}
    </div>
  );
}

export default APIFetch;
