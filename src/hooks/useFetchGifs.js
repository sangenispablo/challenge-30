import { useEffect, useState } from "react";

import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (query) => {

  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(query).then((imgs) => {
      setState({
        data: imgs,
        loading: false,
      });
    });
  }, [query]);

  return state;
};
