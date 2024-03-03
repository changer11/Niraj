import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "./../style";
import { services } from "./../constants";
import { staggerContainer } from "../utils/motion";
import { fadeIn } from "./../utils/motion";
import { Link } from "react-router-dom";
import { profileimg } from "../assets";
const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);
const About = (probs) => {
  return (
    <>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0  top-10 `}
      >
        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <div className="flex items-start xs:flex-row xs:items-center justify-between flex-col-reverse">
            <div className="xs:w-[40%] flex xs:justify-start items-center w-full xs:mt-0 mt-6">
              <a href={profileimg}><img src={profileimg} alt="" className="rounded-[20px]" /></a>
            </div>
            <motion.div variants={fadeIn("", "", 0.3, 1)}>
              <p className={`${styles.sectionSubText}`}>Indroduction</p>
              <h2 className={`${styles.sectionHeadText}`}>Overview</h2>
            </motion.div>
          </div>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className=" xs:mt-14 text-secondary text-[17px] mt-7"
        >
          I am a Passionate MERN full-stack developer with a proven track record
          of building dynamic web applications.Proficient in both front-end and
          back-end technologies, with a focus on creating efficient and
          user-friendly digital experiences. Adept at problem-solving and
          collaborating within agile teams to deliver high-quality solutions.
          <div className="xs:mt-20 mt-10 flex flex-wrap gap-10 text-white justify-center">
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </motion.p>
        <div className="absolute bottom-[-20px] flex justify-center w-[92%]">
          <Link
            className="w-[64px] h-[15px]  rounded-3xl border-2 border-secondary flex items-center"
            to="/work"
            onClick={() => {
              probs.setActive("Work");
            }}
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
      </motion.section>
    </>
  );
};
export default About;
