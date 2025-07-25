import ComputersCanvas from '../components/Computers';
import BlurText from "../components/BlurText";
import ShinyText from '../components/ShinyText';
import { HiArrowDownTray } from "react-icons/hi2";
import { MdOutlineSignalCellularAlt } from "react-icons/md";
import { BiSolidBriefcase } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaAward, FaCode, FaFacebook, FaGithub } from "react-icons/fa";
const Welcome = () => {
    const quickStats = [
        { 
            icon: <BiSolidBriefcase className='mr-2 text-xl' />, 
            title: '5+ months', 
            subtitle: 'experience' 
        },
        { 
            icon: <IoLogoJavascript className='mr-2 text-xl' />, 
            title: 'javascript', 
            subtitle: 'main language' 
        },
        { 
            icon: <FaCode className='mr-2 text-xl' />, 
            title: '3 projects', 
            subtitle: 'total projects' 
        },
        { 
            icon: <FaAward className='mr-2 text-xl' />, 
            title: '2.7/4.0', 
            subtitle: 'gpa' 
        }
    ];
    return (
        <>
            <div className="w-full flex items-center mt-20 relative px-[10%]">
                <div className="w-1/2">
                    <ShinyText 
                        text="Hello there!" 
                        disabled={false} 
                        speed={3} 
                        className='text-3xl font-medium md:text-3xl sm:text-2xl xs:text-xl capitalize'
                    />
                    <BlurText
                        text="i'm Huy Hung"
                        delay={500}
                        animateBy="words"
                        direction="top"
                        className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] capitalize"
                    />
                    <h2 className="text-white md:text-[45px] sm:text-[22px] xs:text-[20px] font-medium bg-text typewriter">
                        Front-end Developer
                    </h2>
                    <p className='mt-4 text-color text-xl max-w-3xl leading-[30px] text-justify font-mono tracking-tight'>
                        Turning ideas into interactive, user-friendly web interfaces with modern tools and clean design.
                    </p>
                    <div className="flex items-center gap-4 text-3xl mt-10">
                        <p className='text-color font-mono tracking-tight text-lg'>
                            Follow me on: 
                        </p>
                        <a 
                            href="https://www.facebook.com/huy.hung.943598" 
                            className='bg-white rounded-[50%] w-11 h-11 flex items-center justify-center'
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <FaFacebook className='text-[#1877F2] border-none rounded-full bg-white p-0 m-0'/>
                        </a>
                        <a 
                            href="https://github.com/HungRubi" 
                            target="_blank"
                            className='bg-white rounded-[50%] w-11 h-11 flex items-center justify-center'
                            rel="noopener noreferrer"
                        >
                            <FaGithub className='text-black border-none rounded-full bg-white p-0 m-0'/>
                        </a>
                    </div>
                    <div className="flex items-center gap-10 mt-6">
                        <a 
                            className=' bg-gradient-main px-5 text-lg py-2.5 rounded-md text-white font-mono 
                            tracking-tight shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer 
                            flex items-center justify-center'
                            href='#'
                        >
                            <HiArrowDownTray className='mr-2 text-xl'/>
                            Download my CV
                        </a>
                        <a 
                            className='bg-gradient-main p-[2px] text-lg rounded-md text-white font-mono 
                            tracking-tight shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer 
                            font-medium'
                            href='#'
                        >
                            <div className="flex items-center justify-center px-[18px] py-2 bg-gray-950 rounded-md">
                                <span></span>
                                <HiArrowDownTray className='mr-2 text-xl text-purple-500'/>
                                <h4 className='bg-text font-medium'>
                                    Explore My Projects
                                </h4>
                            </div>
                        </a>
                    </div>
                    <div className='mt-10 text-color text-xl max-w-3xl leading-[30px] text-justify font-mono tracking-tight'>
                        <div className="flex items-center">
                            <MdOutlineSignalCellularAlt className='mr-2'/>
                            Quick Stats:
                        </div>
                        <div className="flex items-center mt-3 gap-5">
                            {quickStats.map((stat, index) => (
                                <a 
                                    className='bg-gradient-main px-5 text-lg py-2.5 rounded-4xl text-white font-mono 
                                    tracking-tight shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer 
                                    flex items-center justify-center'
                                    href='#'
                                    key={index}
                                >
                                    {stat.icon}
                                    <div className="text-white capitalize block">
                                        <h3 className='font-bold text-sm'>{stat.title}</h3>
                                        <h4 className='text-[12px] text-color font-[600]'>{stat.subtitle}</h4>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center relative">
                    <img
                        src="/img/avatar_profile.jpg"
                        className="rounded-[80%] w-[80%] min-w-[380px] z-10 relative drop_profile"
                    />
                </div>

            </div>
            <div className="w-full h-screen -mt-50">
                <ComputersCanvas/>
            </div>
        </>
    )
}

export default Welcome;