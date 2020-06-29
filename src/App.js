import React from "react";
import { Grid } from "@material-ui/core";
import { SearchBar, VideoDetail, VideoList } from "./components";
import Provider from "./context/Provider";

function App() {
  return (
    <Provider>
      <Grid justify="center" container spacing={10}>
        <Grid item xs={6} md={12}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={12} md={12}>
              <SearchBar />
            </Grid>
            <Grid item xs={12} md={8}>
              <VideoDetail />
            </Grid>
            <Grid item xs={4}>
              <VideoList />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Provider>
  );
}

export default App;
