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
import ProBewer from "./components/probewer/ProBewer";
import ResultBody from "./components/resultbody/ResultBody";
import LogIn from "./components/login/LogIn";
import Register from "./components/register/Register";

import { BrowserRouter, Routes, Route } from 'react-router-dom';


 // example procider
 const cacheProvider = {
  get: (language, key) =>
    ((JSON.parse(localStorage.getItem('translations')) || {})[key] || {})[
      language
    ],
  set: (language, key, value) => {
    const existing = JSON.parse(localStorage.getItem('translations')) || {
      [key]: {},
    };
    existing[key] = {...existing[key], [language]: value};
    localStorage.setItem('translations', JSON.stringify(existing));
  },
 };
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
      <ResultBody />
      <Footer />
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
      <ProBewer />
      <Footer />
    </div>
  )
}
const Login = () => {
  return (
    <div className="App">
        <Header />
        <LogIn />
        <Footer />
    </div>
  )
}
const RegisterForm = () => {
  return(
    <div className="App">
        <Header />
        <Register />
        <Footer />
    </div>
  )
}
function App() {
  const [pageState, setPageState] = useState(0);
  return (
      <BrowserRouter>
        <Routes>
            <Route index element={<Home/>} />
            <Route path='login' element={<Login/>}/>
            <Route path='profile' element={<Profile />}/>
            <Route path='register' element={<RegisterForm />}/>
       </Routes>
      </BrowserRouter>
  )
}

// function App() {
//   const [pageState, setPageState] = useState(0);
//   return (
//       <BrowserRouter>
//         <Routes>
//           {
//             pageState === 0 ? <Home /> :
//               (pageState === 1 ? <Profile /> : <GeResult />)
//           }
//        </Routes>
//       </BrowserRouter>
//   )
// }


export default App;
