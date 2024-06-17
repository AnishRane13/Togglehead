import './App.css';
import FAQ from './components/FAQ'
import Footer from './components/Footer';
import Upcoming from './components/Upcoming';
import Navbar from './components/Navbar';
import Statistics from './components/Statistics';
import SliderComponent from './components/SliderComponent1';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Upcoming/>
      <SliderComponent/>
      <Statistics/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
