import ComputersCanvas from '../components/Computers';
import { useState, useEffect, useCallback, memo } from 'react';
import { Sparkles, ExternalLink, Mail, Github, Facebook, Instagram} from 'lucide-react';
import AOS from 'aos'
import 'aos/dist/aos.css'
import ProfileCard from '../components/ProfileCard';
const SocialLink = memo(({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    <button className="group relative p-3">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
      <div className="relative rounded-xl bg-black/50 backdrop-blur-xl p-2 flex items-center justify-center border border-white/10 group-hover:border-white/20 transition-all duration-300">
        <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
      </div>
    </button>
  </a>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
  <a href={href}>
    <button className="group relative w-[160px]">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#4f52c9] to-[#8644c5] rounded-xl opacity-50 blur-md group-hover:opacity-90 transition-all duration-700"></div>
      <div className="relative h-11 bg-[#030014] backdrop-blur-xl rounded-lg border border-white/10 leading-none overflow-hidden">
        <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-[#4f52c9]/20 to-[#8644c5]/20"></div>
        <span className="absolute inset-0 flex items-center justify-center gap-2 text-sm group-hover:gap-3 transition-all duration-300">
          <span className="bg-gradient-to-r from-gray-200 to-white bg-clip-text text-transparent font-medium z-10">
            {text}
          </span>
          <Icon className={`w-4 h-4 text-gray-200 ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10`} />
        </span>
      </div>
    </button>
  </a>
));

const Welcome = () => {
    const WORDS = ["Frontend Developer", "React Native Developer"];
    const PAUSE_DURATION = 2000;
    const TECH_STACK = ["React", "Javascript", "Node.js", "Tailwind"];
    const TYPING_SPEED = 100;
    const ERASING_SPEED = 50;
    const [text, setText] = useState("")
    const [isTyping, setIsTyping] = useState(true)
    const [wordIndex, setWordIndex] = useState(0)
    const [isLoaded, setIsLoaded] = useState(false)
    const [charIndex, setCharIndex] = useState(0)
    const SOCIAL_LINKS = [
        { icon: Github, link: "https://github.com/HungRubi" },
        { icon: Facebook, link: "https://www.facebook.com/huy.hung.943598" },
        { icon: Instagram, link: "https://www.instagram.com/hungruby1804/" }
    ];
    // const quickStats = [
    //     { 
    //         icon: <BiSolidBriefcase className='mr-2 text-xl' />, 
    //         title: '5+ months', 
    //         subtitle: 'experience' 
    //     },
    //     { 
    //         icon: <IoLogoJavascript className='mr-2 text-xl' />, 
    //         title: 'javascript', 
    //         subtitle: 'main language' 
    //     },
    //     { 
    //         icon: <FaCode className='mr-2 text-xl' />, 
    //         title: '3 projects', 
    //         subtitle: 'total projects' 
    //     },
    //     { 
    //         icon: <FaAward className='mr-2 text-xl' />, 
    //         title: '2.7/4.0', 
    //         subtitle: 'gpa' 
    //     }
    // ];
    
    const handleTyping = useCallback(() => {
        if (isTyping) {
            if (charIndex < WORDS[wordIndex].length) {
                setText(prev => prev + WORDS[wordIndex][charIndex]);
                setCharIndex(prev => prev + 1);
            } else {
                setTimeout(() => setIsTyping(false), PAUSE_DURATION);
            }
        } else {
            if (charIndex > 0) {
                setText(prev => prev.slice(0, -1));
                setCharIndex(prev => prev - 1);
            } else {
                setWordIndex(prev => (prev + 1) % WORDS.length);
                setIsTyping(true);
            }
        }
    }, [charIndex, isTyping, wordIndex]);
    useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isTyping ? TYPING_SPEED : ERASING_SPEED
    );
    return () => clearTimeout(timeout);
  }, [handleTyping]);
    useEffect(() => {
        const initAOS = () => {
            AOS.init({
                once: true,
                offset: 10,
            
            });
        };

        initAOS();
        window.addEventListener('resize', initAOS);
        return () => window.removeEventListener('resize', initAOS);
    }, []);

  useEffect(() => {
    setIsLoaded(true);
    return () => setIsLoaded(false);
  }, []);
    return (
        <>
            <div className="w-full flex items-center relative px-[10%] h-screen xs-h-auto xs-px-10 xs-col pt-20 xs-pt-40" id='home'>
                <div className="w-full "
                data-aos="fade-right"
                data-aos-delay="200">
                    <div className="space-y-4 sm:space-y-6">
                        <div className="inline-block animate-float lg:mx-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7] rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative px-3 sm:px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
                                <span className="bg-gradient-to-r from-[#6366f1] to-[#a855f7] text-transparent bg-clip-text sm:text-sm text-[0.7rem] font-medium flex items-center">
                                <Sparkles className="sm:w-4 sm:h-4 w-3 h-3 mr-2 text-blue-400" />
                                    Ready to Grow
                                </span>
                            </div>
                            </div>
                        </div>
                        <div className="space-y-2" data-aos="fade-up" data-aos-delay="600">
                            <h1 className="text-5xl sm:text-6xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                                <span className="relative inline-block">
                                    <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
                                    <span className="relative bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                                    Frontend
                                    </span>
                                </span>
                                <br />
                                <span className="relative inline-block mt-2">
                                    <span className="absolute -inset-2 bg-gradient-to-r from-[#6366f1] to-[#a855f7] blur-2xl opacity-20"></span>
                                    <span className="relative bg-gradient-to-r from-[#6366f1] to-[#a855f7] bg-clip-text text-transparent">
                                    Developer
                                    </span>
                                </span>
                            </h1>
                        </div>
                        <div className="h-8 flex items-center" data-aos="fade-up" data-aos-delay="800">
                            <span className="text-xl md:text-2xl bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent font-light">
                                {text}
                            </span>
                            <span className="w-[3px] h-6 bg-gradient-to-t from-[#6366f1] to-[#a855f7] ml-1 animate-blink"></span>
                        </div>

                        {/* Description */}
                        <p className="text-base md:text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                        data-aos="fade-up"
                        data-aos-delay="1000">
                            Highly motivated and adaptable individual with a strong passion for continuous learning. 
                            Ready to contribute creativity and problem-solving skills to achieve team success.
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-3 justify-start" data-aos="fade-up" data-aos-delay="1200">
                        {TECH_STACK.map((tech, index) => (
                            <div key={index} className="px-4 py-2 hidden sm:block rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-sm text-gray-300 hover:bg-white/10 transition-colors">
                                {tech}
                            </div>
                        ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-row gap-3 w-full justify-start" data-aos="fade-up" data-aos-delay="1400">
                            <CTAButton href="#projects" text="Projects" icon={ExternalLink} />
                            <CTAButton href="#contact" text="Contact" icon={Mail} />
                        </div>

                        {/* Social Links */}
                        <div className="hidden sm:flex gap-4 justify-start" data-aos="fade-up" data-aos-delay="1600">
                        {SOCIAL_LINKS.map((social, index) => (
                            <SocialLink key={index} {...social} />
                        ))}
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex items-center justify-center relative xs-w">
                    <ProfileCard
                        name="Ng H.Hung"
                        title="Frontend Developer"
                        handle="hungrubi"
                        status="Online"
                        contactText="Contact Me"
                        avatarUrl="/img/me-remove.png"
                        miniAvatarUrl="/img/me.jpg"
                        showUserInfo={true}
                        enableTilt={true}
                        enableMobileTilt={false}
                        onContactClick={() => console.log('Contact clicked')}
                        className='object-cover h-full'
                    />
                </div>
            </div>
            <div className="xl:h-screen mx-auto -mt-50 sm:h-[500px] xs-h xs-mt-100 xs-mr-50">
                <ComputersCanvas/>
            </div>
        </>
    )
}

export default Welcome;