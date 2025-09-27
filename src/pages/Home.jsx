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
            <footer>
                <center>
                    <hr className="my-3 border-gray-400 opacity-15 sm:mx-auto lg:my-6 text-center" />
                    <span className="block text-sm pb-4 text-gray-500 text-center dark:text-gray-400">
                        © 2025{" "}
                        <a href="https://www.facebook.com/huy.hung.943598" className="hover:underline">
                        Hung™
                        </a>
                        . All Rights Reserved.
                    </span>
                </center>
            </footer>
        </>
        
    )
}

export default Home