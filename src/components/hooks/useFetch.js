import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url, { method }) {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  let f;

  switch (method) {
    case "GET":
      f = axios.get(url);
      break;
    case "DELETE":
      f = axios.delete(url);
  }

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setFetchedData(response.data);
        setIsLoading(false);
      })
      .catch((err) => setError(err));
  }, [url]);
  return [fetchedData, isLoading, error];
}

export default useFetch;

// CRUD --> all http request
