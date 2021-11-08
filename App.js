import React from "react";
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home'
import Explore from './components/Explore'
import Trending from "./components/Trending";
import MyProfile from "./components/MyProfile";

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/explore" element={<Explore/>}/>
      <Route path="/trending" element={<Trending/>}/>
      <Route path="/myprofile" element={<MyProfile/>}/>
    </Routes>
    </>
  )
}

export default App
