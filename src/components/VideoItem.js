import React, { useEffect, useContext } from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { Consumer } from "../context/Provider";

function VideoItem({ video }) {
  const { state, setState } = useContext(Consumer);
  const handleClick = () => {
    setState({ videos: [...state.videos], selectedVideo: video });
  };

  return (
    <Grid item xs={12}>
      <Paper
        style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        onClick={handleClick}
      >
        <img
          src={video.snippet.thumbnails.medium.url}
          alt="thumbnail"
          style={{ marginRight: "20px" }}
        />
        <Typography variant="subtitle1">
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default VideoItem;
