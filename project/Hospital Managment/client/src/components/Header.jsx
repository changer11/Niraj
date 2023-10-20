import { menu, headernav } from "../constant";
import { logodark } from "../assets";
import { fadeIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export const Header = (probs) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:800px)");
    setIsMobile(mediaQuery.matches);
    const handleonchange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleonchange);
    return () => {
      mediaQuery.removeEventListener("change", handleonchange);
    };
  }, []);

  return (
    <div className={`${isMobile ? "w-[100%]" : "w-full"} `}>
      <div className="sticky z-30 top-0 bg-white">
        <motion.section
          variants={staggerContainer()}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div variants={fadeIn("top", "spring", 1 * 0.5, 10)}>
            <ul className="list-none flex gap-3 me-3 pb-3 pt-3 justify-between items-center">
              <li className="ms-3" ><img src={logodark} alt="logo" className={`${isMobile?"block":"hidden"}`}/></li>
              {menu.map((e) => (
                <li className="flex gap-3">
                  <span
                    onClick={probs.event}
                    className={`h-10 w-10 bg-[#f0ecec] flex items-center justify-center rounded-[50%] ${e.color}`}
                  >
                    <i className={`${e.menu_icon} text-[20px]`}></i>
                  </span>
                  <span
                    className={`h-10 w-10 bg-[#c1bbbb] flex items-center justify-center rounded-[50%]`}
                  >
                    <i className={`${e.zoom_icon} text-[20px]`}></i>
                  </span>
                  <span
                    className={`h-10 w-10 bg-[#c1bbbb] flex items-center justify-center rounded-[50%] `}
                  >
                    <i className={`${e.Notification_icon} text-[20px]`}></i>
                  </span>
                  <span
                    className={`h-10 w-10 bg-[#c1bbbb] flex items-center justify-center rounded-[50%] `}
                  >
                    <i className={`${e.search_icon} text-[20px]`}></i>
                  </span>
                  <span
                    className={`h-10 w-10 bg-[#c1bbbb] flex items-center justify-center rounded-[50%]`}
                  >
                    <i className={`${e.user_icon} text-[20px]`}></i>
                  </span>
                </li>
              ))}
            </ul>
            {headernav.map((e) => (
              <div className="bg-[#666666] flex justify-between items-center ps-4 pe-4 pt-2 pb-2 text-white">
                <div>
                  <p
                    className={`${
                      isMobile ? "text-sm" : "text-[22px]"
                    } font-bold`}
                  >
                    {probs.Title}
                  </p>
                </div>
                <div className="bg-[#C85A95] ps-3 pe-3 pt-2 pb-2 rounded-full">
                  <p className={`${isMobile ? "text-sm" : "text-lg"}`}>
                    <i className={`${e.icon}`}></i>
                    <span
                      className={`p-2 ${
                        probs.header_title === "" ? "hidden" : "inline"
                      }`}
                    >
                      {e.space}
                    </span>
                    <span>{probs.header_title}</span>
                    <span
                      className={`p-2 ${
                        probs.Title === "" ? "hidden" : "inline"
                      }`}
                    >
                      {e.space}
                    </span>
                    <span className="">
                      {probs.Title === "Quick Statistics"
                        ? "Dashboard"
                        : probs.Title}
                    </span>
                  </p>
                </div>
              </div>
            ))}

            <div className="h-full bg-black"></div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
};
