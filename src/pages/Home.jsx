import Experience from '../components/Experience';
import Works from '../components/Works';
import Tech from '../components/Tech';
import Navbar from '../components/Navbar';
import Contact from "../components/Contact";
import { experiences } from "../utils/constants";
import About from "../components/About";
import Welcome from "./Welcome";
import AboutPage from '../components/Me';

const Home = () => {
    return (
        <>
            <Navbar />
            <Welcome />
            <AboutPage />
            <Experience experience={experiences} />
            <Tech />
            <Works />
            <Contact />
        </>
        
    )
}

export default Home