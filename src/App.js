import './App.css';
import FAQ from './components/FAQ'
import Footer from './components/Footer';
import Upcoming from './components/Upcoming';
import Navbar from './components/Navbar';
import SliderComponent from './components/SliderComponent1';
import Statistics from './components/Statistics';
import SubscribeForm from './components/SubscribeForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Upcoming/>
      <SliderComponent/>
      <Statistics/>
      <FAQ/>
      <SubscribeForm/>
      <Footer/>
    </div>
  );
}

export default App;
