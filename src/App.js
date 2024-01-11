import './App.css';
import Header from './components/header/Header';
import Home from './pages/01-home/Home';
import About from './pages/02-about/About';
import Skills from './pages/03-skills/Skills';
import Services from './pages/04-services/Services';
import Portfolio from './pages/05-portfolio/Portfolio';
import Statistics from './pages/06-statistics/Statistics';
import Contact from './pages/07-contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';

function App() {
  return (
    <>
      {/* header */}
      <Header />

      {/* pages */}
      <main className='main'>
        {/* home */}
        <Home />
        {/* about */}
        <About />
        {/* skills */}
        <Skills />
        {/* services */}
        <Services />
        {/* portfolio */}
        <Portfolio />
        {/* statistics */}
        <Statistics />
        {/* contact */}
        <Contact />
        {/* scroll-up */}
        <ScrollUp />
      </main>

      {/* footer */}    
      <Footer />  
    </>
  );
}

export default App;
