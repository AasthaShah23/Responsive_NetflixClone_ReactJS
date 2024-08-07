import { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./Components/BeforeSignIn/Banner";
import SignIn from "./Components/BeforeSignIn/SignIn";
import Theme from "./Components/Theme";
import Header from "./Components/AfterLogin/Header";
import Home from "./Components/AfterLogin/Home";
import MoviePage from "./Components/AfterLogin/MoviePage";
import MovieCard from "./Components/AfterLogin/MovieCard";

import { Player } from "@remotion/player";
// import MyVideo from "./Components/MyVideo";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>

      {/* <Player
        // component={MyVideo}
        durationInFrames={120}
        compositionWidth={1920}
        compositionHeight={1080}
        fps={30}
      /> */}
    </>
  );
}

export default App;

// import MyVideo from './Components/MyVideo';
// import {Player} from '@remotion/player';

// const App = () => {
// 	return (
// 		<Player
// 			component={MyVideo}
// 			durationInFrames={120}
// 			compositionWidth={1920}
// 			compositionHeight={1080}
// 			fps={30}
// 		/>
// 	);
// };

// export default App;
