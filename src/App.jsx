import './App.css'
import {Home} from './pages'
import WelcomeScreen from './components/WelcomePage';
import AnimatedBackground from './components/AnimateBackground';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';


function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: 'linear',
      once: false,
      delay: 200,
    });

    const handleScroll = () => {
      Aos.refresh();
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="w-full relative bg-gray-950 ">
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>
      {!showWelcome && 
        <> 
          <AnimatedBackground /> 
          <Home /> 
        </>
      }
    </div>
  )
}

export default App
