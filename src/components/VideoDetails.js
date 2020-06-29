import React, { useContext } from "react";
import { Paper, Typography } from "@material-ui/core";
import { Consumer } from "../context/Provider";

function VideoDetails() {
  const {
    state: { selectedVideo: video }
  } = useContext(Consumer);

  const videoSrc = `https://www.youtube.com/embed/`;

  return (
    <>
      {!video ? (
        <div>Loading... </div>
      ) : (
        <>
          <Paper elevation={3} style={{ height: "50%" }}>
            <iframe
              src={videoSrc + video.id.videoId}
              frameBorder="0"
              height="100%"
              width="100%"
              title="Video Player"
            ></iframe>
          </Paper>

          <Paper elevation={3} style={{ padding: "4%" }}>
            <Typography variant="h4">
              {video.snippet.title} - {video.snippet.channelTitle}
            </Typography>

            <Typography variant="subtitle1">
              {video.snippet.channelTitle}
            </Typography>
            <Typography variant="subtitle2">
              {video.snippet.description}
            </Typography>
          </Paper>
        </>
      )}
    </>
  );
}

export default VideoDetails;
