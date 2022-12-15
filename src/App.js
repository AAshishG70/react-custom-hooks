import React from "react";
// import Counter from "./components/Counter/Counter";
// import APIFetch from "./components/APIFetch/APIFetch";
import Form from "./components/Form/Form";

const App = () => {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", gap: "200px" }}
    >
      {/* <APIFetch />
      <Counter /> */}
      <Form />
    </div>
  );
};

export default App;
