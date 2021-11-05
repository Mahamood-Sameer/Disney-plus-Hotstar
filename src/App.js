import "./App.css";
import Header from "./Components/Header";
import requests from "./Requests/Requests";
import Rows from "./Components/Rows";
import Hoverboxes from "./Components/Hoverboxes";
import Banner from "./Components/Banner";
import Disney from "./Images/Disney-image.webp";
import Disney_video from "./Videos/Disney-video.mp4";
import Pixer from "./Images/Pixer-image.webp";
import Pixer_video from "./Videos/Pixer-video.mp4";
import Marvel from "./Images/Marvel-image.webp";
import Marvel_video from "./Videos/Marvel-video.mp4";
import Starwars from "./Images/Starwars-image.webp";
import Starwars_video from "./Videos/Starwars-video.mp4";
import Natgeo from "./Images/Natgeo-image.webp";
import Natgeo_video from "./Videos/Natgeo-video.mp4";
import { useEffect, useState } from "react";
import { auth } from "./Firebase/firebase";

function App() {
  const [user,setUser]  =  useState(null)
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      setUser(user)
    })
  },[user])
  return (
    <div className="app">
      <Header USER={user}/>
      <div className="app__body">
        <Banner/>
        <div className="hover_containers">
          <Hoverboxes image={Disney} vid={Disney_video} title="Disney" />
          <Hoverboxes image={Pixer} vid={Pixer_video} title="Pixer" />
          <Hoverboxes image={Marvel} vid={Marvel_video} title="Marvel" />
          <Hoverboxes image={Starwars} vid={Starwars_video} title="Starwars" />
          <Hoverboxes
            image={Natgeo}
            vid={Natgeo_video}
            title="Nation geographic"
          />
        </div>
        <Rows title="Recommended For You" fetchURL={requests.Recommended} />
        <Rows title="New to Disney+" fetchURL={requests.New} />
        <Rows title="Hit Movies" fetchURL={requests.Hit} />
        <Rows title="Disney+ Originals" fetchURL={requests.Originals} />
        <Rows title="Trending" fetchURL={requests.Trending} />
        <Rows title="Reimagined Classics" fetchURL={requests.Reimagined} />
        <Rows title="Horror" fetchURL={requests.Horror} />
        <Rows title="Science" fetchURL={requests.Science} />
        <Rows title="Action & Adventure " fetchURL={requests.Action} />
        <Rows title="Animations" fetchURL={requests.Animations} />
        <Rows title="Disney Junior Series" fetchURL={requests.DisneyJ} />
      </div>
    </div>
  );
}

export default App;
