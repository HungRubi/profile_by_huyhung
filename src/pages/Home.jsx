import BlurText from "../components/BlurText";
import ServiceCard from '../components/ServiceCard';
import { services } from '../utils/constants';
import Experience from '../components/Experience';
import ShinyText from '../components/ShinyText';
import { experiences } from "../utils/constants";
import Works from '../components/Works';
import Tech from '../components/Tech';
import Navbar from '../components/Navbar';
import Contact from "../components/Contact";

const Home = () => {
    return (
        <div className="w-full h-full relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/4 z-10" id="home">
                <img 
                    alt="Page illustration" 
                    loading="lazy" 
                    width="846" 
                    height="594" 
                    decoding="async" 
                    data-nimg="1" 
                    className="max-w-none" 
                    style={{ color: "transparent" }} 
                    src="/img/page-illustration.svg"
                />
            </div>
            <Navbar />
            <div className="w-full h-screen relative px-[10%] mt-40" id="about">
                <ShinyText
                    text="Introduction"
                    disabled={false}
                    speed={3}
                    className='text-xl font-medium uppercase'
                />
                <BlurText
                    text="Overview"
                    delay={500}
                    animateBy="words"
                    direction="top"
                    className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] capitalize"
                />
                
                <p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-color text-justify line-clamp-5 font-mono tracking-tight'>
                    Adaptable and quick to learn, with knack for problem-solving and collaboration. 
                    Skilled in both front-end and back-end development, bringing creativity and 
                    analytical thinking to every project. Ready to leverage strong foundation in 
                    coding and teamwork to contribute effectively and grow within dynamic 
                    development environment.
                </p>
                <div className='mt-20 flex flex-wrap gap-10 w-xs:flex-col'>
                    {services.map((service, index) => (
                        <ServiceCard key={service.title} index={index} {...service} />
                    ))}
                </div>
                <div className="w-full mt-50 flex flex-col items-center" id="work">
                    <ShinyText 
                        text="What I have done so far" 
                        disabled={false} 
                        speed={3} 
                        className='text-xl font-medium uppercase'
                    />
                    <BlurText
                        text="Work Experience"
                        delay={500}
                        animateBy="words"
                        direction="top"
                        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] capitalize"
                    />
                </div>
            </div>
            <div className="w-full relative flex items-center justify-center mt-30">
                <Experience experience={experiences} />
            </div>
            <Tech />
            <Works />
            <Contact />
        </div>
        
    )
}

export default Home