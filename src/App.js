import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Team from './components/Team';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import {
  ScrollingProvider
} from 'react-scroll-section';

function App() {
  return (
    <ScrollingProvider>
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
    </ScrollingProvider>
  );
}

export default App;
