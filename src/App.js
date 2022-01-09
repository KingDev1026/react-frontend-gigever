import React from "react";
import { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Header from './components/header/Header';
import Slider from './components/slider/Slider'
import TabLayout from './components/tablayout/TabLayout';
import HomeBody from './components/homebody/HomeBody';
import Footer from './components/footer/Footer';
import ProfileSlider from "./components/profileslider/ProfileSlider";
import Request from "./components/request/Request";
import ProDescription from "./components/prodescription/ProDescription";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Slider />
      <TabLayout />
      <HomeBody />
      <Footer />
    </div>
  )
}

const GeResult = () => {
  return (
    <div className="App">
      <Header />
    </div>
  )
}

const Profile = () => {
  return (
    <div className="App">
      <Header />
      <ProfileSlider />
      <Request />
      <ProDescription />
    </div>
  )
}

function App() {
  const [pageState, setPageState] = useState(1);
  return (
      pageState === 0 ? <Home /> :
      (pageState === 1 ? <Profile /> : <GeResult />)
  );
}

export default App;
