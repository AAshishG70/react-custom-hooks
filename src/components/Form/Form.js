import React from "react";
import useForm from "../hooks/useForm.js";

const Form = () => {
  const [values, handleChange] = useForm();
  return (
    <div>
      <p>{values.fullname}</p>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="text"
          placeholder="Name"
          name="fullname"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="username"
          name="username"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="email"
          placeholder="email"
          name="email"
          onChange={(e) => handleChange(e)}
        />

        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  );
};

export default Form;
