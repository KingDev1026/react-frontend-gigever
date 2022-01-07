import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Header from './components/header/Header';
import Slider from './components/slider/Slider'
import TabLayout from './components/tablayout/TabLayout';
import HomeBody from './components/homebody/HomeBody';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <TabLayout />
      <HomeBody />
      <Footer />
    </div>
  );
}

export default App;
