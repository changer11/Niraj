import { React } from "react";
import { menu, headernav } from "../constant";
import { logodark } from "../assets";
import { fadeIn, staggerContainer } from "../utils/motion";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { useEffect, useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
export const Header = (probs,{event}) => {
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
    <>
<div className={`sticky top-0 z-30 ${probs.islogin}`}>
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
                  <li className="ms-3">
                    <img
                      src={logodark}
                      alt="logo"
                      className={`${isMobile ? "block" : "hidden"}`}
                    />
                  </li>
                  {menu.map((e) => (
                    <li className="flex gap-3" key={e.id}>
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
                        <button
                          type="button"
                          className="btn"
                          data-bs-toggle="modal"
                          data-bs-target="#myModal"
                        >
                          <i className={`${e.search_icon} text-[20px]`}></i>
                        </button>
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
                  <div
                    className="bg-[#666666] flex justify-between items-center ps-4 pe-4 pt-2 pb-2 text-white"
                    key={e.id}
                  >
                    <div>
                      <p
                        className={`${
                          isMobile ? "text-sm" : "text-[22px]"
                        } font-bold`}
                      >
                        {probs.Title}
                      </p>
                    </div>
                    <div className={`bg-[#C85A95] ps-3 pe-3 pt-2 pb-2 rounded-full ${isMobile?"hidden":"block"}`}>
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
                            probs.Title === "" &&
                            probs.Title === "Tables" &&
                            probs.Title === "Forms"
                              ? "hidden"
                              : "inline"
                          }`}
                        >
                          {e.space}
                        </span>
                        <span className="">
                          {probs.Title === "Quick Statistics"
                            ? "Dashboard"
                            : probs.Title === "Tables" &&
                              probs.Title === "Forms"
                            ? ""
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
      </div>
      <div className="modal overflow-hidden" id="myModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-black text-white">
              <h4 className="modal-title">Search Patient/Doctor:</h4>
              <button
                type="button"
                className="btn text-white"
                data-bs-dismiss="modal"
              >
                <i className="fa fa-close text-[20px]"></i>
              </button>
            </div>

            <div className="modal-body text-center">
              <div className="border-b border-spacing-2">
                <input
                  type="text"
                  className="form-control outline-none border-none"
                  placeholder="Enter Text Here"
                  id="search"
                />
              </div>
              <div className="mt-3">
                <label htmlFor="search">
                  <button className="btn btn-danger rounded-sm">Search</button>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
