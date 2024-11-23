import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

import Wrapper from "./Wrapper";
import Div from "./Div";
import pe1 from "../assets/sec-4-p-e-1.png";
import pe2 from "../assets/sec-4-p-e-2.png";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../slider.css";

const Testimonials = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 4500], [1000, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 4500], [2000, 0], { clamp: false });
  return (
    <div className="w-full py-[50px] md:py-[100px] bg-white relative overflow-hidden">
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-4-p-e-1 rellax" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-4-p-e-2 rellax" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* SECTION HEADING START */}
        <Div className="mb-10 relative">
          <div className="flex text-center justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 2xl:text-[120px] leading-[40px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-2 text-[#111111]">
            Appreciation
          </div>
          <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
            Insights from clients, colleagues, and friends about my work and
            impact!!!
          </div>
        </Div>
        {/* SECTION HEADING END */}

        {/* CAROUSEL START */}
        <Div className="bg-[#F2F2F2] w-full md:w-[834px] rounded-[20px] mx-auto relative mb-[50px]">
          <Carousel>
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
              <div className="mb-[25px]">
                <img
                  src="https://i.ibb.co/qr4P5w5/download.jpg"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                />
                <div className="font-bold">Aarav Singh</div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                  Senior Developer @Snap Inc
                </div>
              </div>
              <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                Kunal is an outstanding developer who brings clarity and focus
                to every project. His technical expertise and leadership skills
                inspire everyone around him. Working alongside him has been an
                enriching experience, and his contributions have significantly
                strengthened our team.
              </div>
            </div>
            {/* SLIDE END */}
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
              <div className="mb-[25px]">
                <img
                  src="https://i.ibb.co/0tchXQZ/download.jpg"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                />
                <div className="font-bold">Pooja Verma</div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center italic">
                  Founder of StartUpBoost
                </div>
              </div>
              <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                Kunal brought both creativity and precision to our project. He
                not only delivered a cutting-edge solution but also ensured
                every detail was executed to perfection. His collaborative
                approach made the entire process seamless.
              </div>
            </div>
            {/* SLIDE END */}
            {/* SLIDE START */}
            <div className="text-black flex items-center flex-col px-[25px] md:px-[50px] py-[50px]">
              <div className="mb-[25px]">
                <img
                  src="https://i.ibb.co/Mf1RHpj/download.jpg"
                  className="w-[80px] h-[80px] max-w-[80px] rounded-full"
                />
                <div className="font-bold">Rahul Thapa</div>
                <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                  Community Manager @Google
                </div>
              </div>
              <div className="text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] text-black text-center">
                Kunal is not just a friend but a constant source of inspiration.
                His dedication to his work and personal growth motivates
                everyone around him. He’s always there to lend a helping hand
                and share his wisdom, making him an irreplaceable part of my
                life.
              </div>
            </div>
            {/* SLIDE END */}
          </Carousel>
        </Div>
        {/* CAROUSEL END */}
      </Wrapper>
    </div>
  );
};

export default Testimonials;
