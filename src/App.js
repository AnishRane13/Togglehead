import './App.css';
import FAQ from './components/FAQ'
import Footer from './components/Footer';
import Upcoming from './components/Upcoming';
import Navbar from './components/Navbar';
import SliderComponent from './components/SliderComponent1';
import Statistics from './components/Statistics';
import SubscribeForm from './components/SubscribeForm';
import Slideshow from '../src/components/SlideShow'
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slideshow/>
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
