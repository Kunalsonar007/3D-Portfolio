import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import flag from "../assets/pk.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });

  // Timeline data
  const timeline = [
    {
      year: "Aug 2024 - Present",
      role: "SDE - I",
      company: "Snap Inc.",
      description: "Software Engineer on the Snapchat's AR & lens design team.",
    },
    {
      year: "Mar 2023 - Jul 2024",
      role: "AR Dev (𝘐𝘯𝘵𝘦𝘳𝘯)",
      company: "Snap Inc.",
      description:
        "Part of the Lens Studio Team and lens design for Snapchat's AR platform.",
    },
    {
      year: "Oct 2022 - Mar 2023",
      role: "Ethical Hacker (𝘐𝘯𝘵𝘦𝘳𝘯)",
      company: "Delhi Police.",
      description:
        "Contributed expertise to resolve diverse cybercrime cases, aiding in safeguarding digital landscapes.",
    },
    {
      year: "Jan 2022 - Dec 2022",
      role: "Cyber Crime Expert (𝘐𝘯𝘵𝘦𝘳𝘯)",
      company: "Mumbai Police.",
      description:
        "Worked with the Mumbai Police to solve complex cybercrime cases and enhance digital security.",
    },
    {
      year: "Sep 2021 - Feb 2022",
      role: "Jr Software Developer (𝘐𝘯𝘵𝘦𝘳𝘯)",
      company: "SBIT W.L.L.",
      description:
        "Worked extensively with WordPress to maintain and enhance e-commerce and other websites.",
    },
  ];

  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* HEADING START */}
        <Div className="text-[40px] md:text-[90px] 2xl:text-[90px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
          <span>A software developer</span>
          <span className="flex items-center gap-2">
            <span>Based</span>
            <img
              src={
                "https://www.worldmaphd.com/flags/flag-of-india/flag-of-india-rounded-corners.png"
              }
              alt=""
              className="w-[50px] md:w-[120px] 2xl:w-[120px] block mt-1 md:mt-2"
            />
            <span>In India</span>
          </span>
        </Div>
        {/* HEADING END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          My journey as a software developer started during my school years,
          where I discovered my love for problem-solving and coding. Since then,
          I have embarked on various exciting projects that have allowed me to
          grow both technically and personally.
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          I have completed my Bachelor's degree in BCA from Moolji Jaitha
          Collage (MJC), Jalgaon, Maharashtra, India. Throughout my academic
          journey, I have gained valuable knowledge and experience in areas such
          as software design, agile methodologies, and user experience (UX)
          design. To stay updated with the latest trends and technologies in the
          field, I actively participate in seminars and workshops, including the
          Hack This Fall 2023 (HTF'23 - Winner 🥇) and Google Community
          Summit'23
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
          Throughout my career, I've had the privilege of working with diverse
          and talented teams, which has exposed me to a wide range of challenges
          and opportunities for learning. Each project has been a stepping stone
          that has honed my skills and equipped me with the knowledge to tackle
          complex problems head-on.
        </Div>
        {/* PARAGRAPH END */}

        {/* WORK EXPERIENCE TIMELINE START */}
        <div className="timeline mt-[50px] bg-black p-4 text-white rounded-lg z-10">
          {/* HEADING START */}
          <Div className="text-[40px] md:text-[90px] 2xl:text-[70px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] flex flex-col relative">
            <span>Work Experience</span>
          </Div>
          {/* HEADING END */}
          <div className="flex flex-col gap-[30px] p-2">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="timeline-item relative border-l-2 border-gray-600 pl-[20px]"
              >
                {/* Corrected circle alignment */}
                <span className="absolute -left-[10px] w-[18px] h-[18px] bg-gray-300 rounded-full" />
                <div className="text-[18px] md:text-[20px] font-semibold">
                  {item.year}
                </div>
                <div className="text-[16px] md:text-[18px]">
                  <span className="font-bold opacity-60">{item.role}</span>
                  <br /> @{""}
                  <span className="italic">{item.company}</span>
                </div>
                <div className="text-[14px] md:text-[16px] text-gray-300 leading-4">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* WORK EXPERIENCE TIMELINE END */}
      </Wrapper>
    </div>
  );
};

export default AboutMe;
