import React from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";
import { staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../style";
import { Link } from "react-router-dom";
const Tech = (probs) => {
  return (
    <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 top-10`}
      >
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    <div className="absolute bottom-[-20px]  w-[92%] flex justify-center">
            <Link
              className="w-[64px] h-[15px] rounded-3xl border-2 border-secondary flex items-center"
              to="/project"
              onClick={()=>{probs.setActive("Project")}}
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
  );
};

export default Tech;