import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />

      <Intro />

      <About />
      {/* <hr /> */}

      <Team />
      {/* <hr /> */}

      <ContactUs />

      <Footer />
    </div>
  );
}

export default App;
