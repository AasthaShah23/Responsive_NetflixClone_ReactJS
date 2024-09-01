import React, { useState, useEffect } from "react";
// import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import ReactPlayer from "react-player";
import Grid from "@mui/joy/Grid";
import MoviePage from "./MoviePage";
import Footer from "./Footer";
import Header from "./Header";
import { Player } from "video-react";

// import Header from './Header'

const Home = () => {
  return (
    <>
      <Header />

      <div className="bg-black">
        <ReactPlayer
        url="image/SquidGame.mp4"
        controls={false}
        playing={true}
        loop={true}
        muted={true}
        width={"100%"}
        height={"100%"}
      />

        {/* <Player src="image/SquidGame.mp4" style={{ "z-index": -1 }} /> */}

        <div>
          <MoviePage title="Top Searches" />
          <MoviePage title="Trending Now"/>
        <MoviePage title="Bingeworthy TV Shows"/>
        <MoviePage title="International TV Shows"/>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Home;
