import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data!");
        }
        console.log("Res ok!");
        return res.json();
      })
      .then((data) => {
        if (!data) {
          console.log("There is no data");
        }
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [url]);

  return { data, error };
};

export default useFetch;
