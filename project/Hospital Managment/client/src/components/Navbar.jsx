import { navlinks, contactdetailposter } from "../constant";
import { logo } from "../assets";
import { useState, useEffect } from "react";
import { staggerContainer, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { BrowserRouter as Link } from "react-router-dom";
const Navbar = (probs) => {
  const [active, setactive] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width:800px)");
    setIsMobile(isMobile);
    const handleonchange = (e) => {
      setIsMobile(e.matches);
    };
    mediaQuery.addEventListener("change", handleonchange);
    return () => {
      mediaQuery.removeEventListener("change", handleonchange);
    };
  });
  isMobile?probs.setdisplayreverse(""):"";
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.div variants={fadeIn("right", "spring", 0.5 * 0.5, 4)}>
        <div
          className={`${isMobile ? probs.navstyle : ""} ${
            isMobile
              ? `w-[70px] z-50 absolute ${probs.mobileview}`
              : `${probs.navwidth} relative`
          } bg-[#C85A95]`}
        >
          <div className="pb-3 ">
            <div
              className={`${
                isMobile ? "hidden" : probs.navstyle
              } pt-4 pb-4 ps-3`}
            >
              <Link to="/">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <ul className="list-none font-semibold ">
              {navlinks.map(({ id, icon, title, collapseitem, toggle }) => (
                <div
                  className={` ${
                    probs.fontsize === "text-[30px] text-center w-full"
                      ? "flex"
                      : isMobile
                      ? "flex"
                      : ""
                  }`}
                >
                  <li
                    className={`d-flex justify-between container  text-white pt-2 pb-2 mt-1 ps-3 pe-3 items-center ${
                      active === title ? "bg-[#555555]" : " bg-[#C85A95]"
                    }`}
                    key={id}
                    onClick={() => {
                      active === "" ? setactive(title) : setactive("");
                    }}
                  >
                    <Link to="/">
                      <div className="d-flex ">
                        <div
                          className={`${
                            isMobile
                              ? "text-[30px] text-center w-full"
                              : probs.fontsize
                          }`}
                        >
                          <i className={`${icon} cursor-pointer`}></i>
                        </div>
                        <div>
                          <span
                            className={`text-[16px] cursor-pointer ${
                              active === title
                                ? "selection:bg-[#555555]"
                                : "selection:bg-[#C85A95]"
                            } ${isMobile ? "hidden" : probs.navstyle}`}
                          >
                            {title}
                          </span>
                        </div>
                      </div>
                    </Link>
                    <div>
                      <i
                        className={`${toggle} text-[15px] transition-transform  ${
                          active === title ? "rotate-180" : "rotate-0 "
                        } ${isMobile ? "hidden" : probs.navstyle}`}
                      ></i>
                    </div>
                  </li>
                  <div className="relative">
                    <ul
                      className={`bg-[#6c757d] text-white list-none  ${
                        probs.fontsize === "text-[30px] text-center w-full"
                          ? "absolute top-1 pe-5 z-50"
                          : ""
                      } ${isMobile ? "absolute top-1 pe-5 z-50" : ""}`}
                    >
                      {collapseitem.map((e) => (
                        <li
                          className={`pt-2 pb-2 ps-4  transition-transform selection:bg-[#6c757d] ${
                            active === title
                              ? e.item === null
                                ? " hidden"
                                : "block"
                              : " hidden"
                          } `}
                          key={e.id}
                        >
                          <Link to="/">
                            <span
                              className="cursor-pointer text-[16px] "
                              onClick={() => {
                                e.item === "Vertical" ||
                                e.item === "Vertical Rtl" ||
                                e.item === "Horizontal"
                                  ? probs.settitle("Quick Statistics")
                                  : probs.settitle(e.item);
                                title === "Dashboard"
                                  ? probs.setheadertitle("")
                                  : probs.setheadertitle(title);
                                isMobile?probs.SetNavStyle("hidden"):""
                                e.item === "Vertical"?probs.setdisplayreverse(""):""
                                e.item === "Vertical Rtl"?probs.setdisplayreverse("flex-row-reverse"):""
                              }}
                            >
                              {e.item}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </ul>
            {contactdetailposter.map((e) => (
              <div
                className={`bg-[#ff589b] text-white pt-2 pb-2 mt-2 ms-1 me-1 ps-3 border-[3px] border-[#bb6788] rounded-lg ${
                  isMobile ? "hidden" : probs.navstyle
                }`}
              >
                <div className="border-b-[1px] border-white pb-1 me-3">
                  <h4>
                    <i className={`${e.header_icon} text-lg pe-3`}></i>
                    <span className="font-bold text-lg">{e.header}</span>
                  </h4>
                </div>
                <div className="mt-1">
                  <p>
                    <i className={`${e.ph_icon} pe-3 text-lg`}></i>{" "}
                    <span>{e.ph_no}</span>
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-bold">{e.title}</span>
                    <span className="text-sm">{e.creator}</span>
                  </p>
                </div>
                <div className="mb-1">
                  <p className="font-bold">{e.rights}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Navbar;
