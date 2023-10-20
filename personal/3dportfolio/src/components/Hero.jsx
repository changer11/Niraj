import { Link } from "react-router-dom";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";
import { staggerContainer } from "../utils/motion";
import Typewriter from "typewriter-effect";
const Hero = (probs) => {
 const Handleautotype =(typewriter) => {
    typewriter
        .typeString("Programmer")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Web Developer ")
        .pauseFor(1000)
        .deleteAll()
        .typeString("React Js Developer")
        .pauseFor(1000)
        .deleteAll()
        .typeString("Mern Stack  Developer")
        .start();
};
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
      <section className="relative w-full mx-auto h-screen">
        <div
          className={`${styles.paddingX} absolute inset-0 top-[60px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi , I'm <span className="text-[#915eff]">NIRAJ</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 flex flex-wrap `}>
              <span className="me-2">I am a Passionate</span> <span  className="font-bold text-[#b969b9] border-b-2 border-solid border-[#ab62ab] pb-1 rounded-[4px] bg-transparent"><Typewriter onInit={Handleautotype} className=''/></span>
            </p>
          </div>
        </div>
        <ComputersCanvas />
        <div className="absolute   w-full flex justify-center items-center 
        bottom-28 xs:bottom-10">
          <Link
            className="w-[64px] h-[15px] rounded-3xl border-2 border-secondary flex items-center"
            to="/about"
            onClick={()=>probs.setActive("About")}
          >
            <motion.div
              animate={{
                x: [48, 0, 48],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 rounded-full bg-secondary mb-1 mt-1"
            ></motion.div>
          </Link>
        </div>
      </section>
    </motion.section>
  );
};

export default Hero;
