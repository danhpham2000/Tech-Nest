import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "HTTYD 2",
      body: "12321",
      author: "Danh",
      date: "Feb 12, 2024",
    },
    {
      id: 2,
      title: "HTTYD 3",
      body: "Bye Bye Night Fury",
      author: "Danh",
      date: "Feb 12, 2024",
    },

    {
      id: 3,
      title: "HTTYD 4",
      body: "Snogglelot",
      author: "Danh",
      date: "Feb 12, 2024",
    },
    {
      id: 4,
      title: "HTTYD 4",
      body: "Snogglelot",
      author: "Danh",
      date: "Feb 12, 2024",
    },
    {
      id: 32211,
      title: "HTTYD 4",
      body: "Snogglelot",
      author: "Danh",
      date: "Feb 12, 2024",
    },
    {
      id: 3121,
      title: "HTTYD 4",
      body: "Snogglelot",
      author: "Danh",
      date: "Feb 12, 2024",
    },
  ]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch the data!");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return {data, error}
};

export default useFetch;
