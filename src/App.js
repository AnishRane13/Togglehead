import './App.css';
import FAQ from './components/FAQ'
import Footer from './components/Footer';
import Upcoming from './components/Upcoming';
// import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Upcoming/>
      <FAQ/>
      <Footer/>
    </div>
  );
}

export default App;
