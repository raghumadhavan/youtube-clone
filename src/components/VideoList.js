import React, { useContext, useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import VideoItem from "./VideoItem";
import { Consumer } from "../context/Provider";

function VideoList() {
  const { state } = useContext(Consumer);
  const [videoList, setvideoList] = useState([]);

  useEffect(() => {
    setvideoList(state.videos);
  }, [state.videos]);

  return (
    <Grid container spacing={10}>
      {videoList.map(video => (
        <VideoItem video={video} key={video.id.videoId} />
      ))}
    </Grid>
  );
}

export default VideoList;
