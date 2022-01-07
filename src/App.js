import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  
import Header from './components/header/Header';
import Slider from './components/slider/Slider'
import TabLayout from './components/tablayout/TabLayout';

function App() {
  return (
    <div className="App">
      <Header />
      <Slider />
      <TabLayout />
    </div>
  );
}

export default App;
