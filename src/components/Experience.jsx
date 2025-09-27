import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import ShinyText from '../components/ShinyText';
import BlurText from "../components/BlurText";
import "react-vertical-timeline-component/style.min.css";

import { experiences } from "../utils/constants";
import  SectionWrapper  from "../utils/SectionWrapper";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain rounded-[50%]'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      
      <div className='flex flex-col'>
        <div className="w-full mb-30 flex flex-col items-center" id="experience">
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
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
