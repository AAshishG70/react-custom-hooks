// Hooks are always associated eith logics.
import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({});

  // event is an object with a bunch of attribute.
  const handleChange = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChange];
};

export default useForm;
