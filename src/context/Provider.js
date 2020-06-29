import React, { useState, useEffect } from "react";
import youtube from "../api/youtube";

const Context = React.createContext();

function Provider(props) {
  let initialState = {
    videos: [],
    selectedVideo: null
  };

  const [state, setState] = useState(initialState);
  const [searchTerm, setSearchTerm] = useState("Bitcoin");

  useEffect(() => {
    youtube
      .get("search", {
        params: {
          part: "snippet",
          maxResults: 5,
          key: `${process.env.REACT_APP_API_KEY}`,
          q: `${searchTerm}`
        }
      })
      .then(res => {
        setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
      });
  }, [searchTerm]);

  return (
    <Context.Provider value={{ state, setSearchTerm, setState }}>
      {props.children}
    </Context.Provider>
  );
}

export default Provider;

export const Consumer = Context;
