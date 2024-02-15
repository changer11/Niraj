import { React } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navlinks, contactdetailposter } from "../constant";
import { logo } from "../assets";
import { useState, useEffect } from "react";
import { staggerContainer, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
const Navbar = (probs) => {
  const [active, setactive] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [auth, setauth] = useState(false);
  const Navigate = useNavigate();
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
  // on refresh provide value in header section
  useEffect(() => {
    let currentURL = window.location.href;
    navlinks.map(({ collapseitem, title }) => {
      collapseitem.map(({ item, url }) => {
        if (currentURL === `http://localhost:5173/${url}`) {
          probs.settitle(item);
          probs.setheadertitle(title);
        }
      });
    });
  }, []);
  //  auth check
  useEffect(() => {
    let userdata = localStorage.getItem("users");
    if (userdata === null) {
      setauth(false);
    } else {
      setauth(true);
    }
  });
  return (
    <div className={`${probs.islogin}`}>
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div variants={fadeIn("right", "spring", 0.5 * 0.5, 4)}>
          <div
            className={`${
              isMobile
                ? ""
                : probs.navwidth === "w-[270px]"
                ? "h-[100vh] overflow-y-scroll no-scrollbar"
                : ""
            } `}
          >
            <div
              className={`${isMobile ? probs.navheadervisiblity : ""} ${
                isMobile
                  ? probs.dispalyreverse
                    ? `w-[70px] z-50 absolute right-0 ${probs.mobileview}`
                    : `w-[70px] z-50 absolute  ${probs.mobileview}`
                  : `${probs.navwidth} relative transition-all`
              } bg-[#C85A95] `}
            >
              <div className="pb-3 ">
                <div
                  className={`${
                    isMobile ? "hidden" : probs.navheadervisiblity
                  } pt-4 pb-4 ps-3`}
                >
                  <Link to="/">
                    <img src={logo} alt="logo" />
                  </Link>
                </div>
                <ul className="list-none font-semibold ">
                  {navlinks.map(
                    ({ id, icon, title, collapseitem, toggle, url }) => (
                      <div
                        className={` ${
                          probs.fontsize === "text-[30px] text-center w-full"
                            ? "flex"
                            : isMobile
                            ? "flex"
                            : ""
                        }`}
                        key={id}
                      >
                        <li
                          className={`d-flex justify-between container  text-white pt-2 pb-2 mt-1 ps-3 pe-3 items-center ${
                            active === title ? "bg-[#555555]" : " bg-[#C85A95]"
                          }`}
                          key={id}
                          onClick={() => {
                            active === title ? setactive("") : setactive(title);
                            console.log(active);
                          }}
                        >
                          <Link to={url}>
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
                                  } ${
                                    isMobile
                                      ? "hidden"
                                      : probs.navheadervisiblity
                                  }`}
                                  onClick={() => {
                                    title === "Tables" || title === "Forms"
                                      ? probs.settitle(title)
                                      : false;
                                  }}
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
                              } ${
                                isMobile ? "hidden" : probs.navheadervisiblity
                              }`}
                            ></i>
                          </div>
                        </li>
                        <div className="relative">
                          <ul
                            className={`bg-[#6c757d] text-white list-none   ${
                              probs.fontsize ===
                              "text-[30px] text-center w-full"
                                ? "absolute top-1 pe-5 z-50"
                                : ""
                            } ${
                              isMobile
                                ? probs.dispalyreverse
                                  ? "absolute right-[70px] top-1 pe-5 z-50"
                                  : "absolute  top-1 pe-5 z-50"
                                : ""
                            }`}
                          >
                            {collapseitem.map((e) =>
                              e.item === "Login" || e.item === "Sign Up" ? (
                                auth ? null : (
                                  <li
                                    className={`transition-all selection:bg-[#6c757d] ${
                                      active === title
                                        ? auth
                                          ? " w-0 h-0 overflow-hidden"
                                          : "w-[100%] pt-2 pb-2 ps-3"
                                        : "w-0 h-0 overflow-hidden"
                                    } translate-x-5`}
                                    key={e.id}
                                  >
                                    <Link to={`/${e.url}`}>
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
                                          isMobile
                                            ? probs.SetNavheadervisiblity(
                                                "hidden"
                                              )
                                            : "";
                                          e.item === "Vertical"
                                            ? probs.setdisplayreverse("")
                                            : "";
                                          e.item === "Vertical Rtl"
                                            ? probs.setdisplayreverse(
                                                "flex-row-reverse"
                                              )
                                            : "";
                                          e.item === "Login" ||
                                          e.item === "Sign Up"
                                            ? probs.setislogin("hidden")
                                            : false;
                                        }}
                                      >
                                        {e.item}
                                      </span>
                                    </Link>
                                  </li>
                                )
                              ) : (
                                <li
                                  className={` transition-all selection:bg-[#6c757d] ${
                                    active === title
                                      ? title==="Tables"||title==="Forms"?null:"w-[100%] pt-2 pb-2 ps-3 "
                                      : "h-0 overflow-hidden w-0"
                                  }  translate-x-5`}
                                  key={e.id}
                                >
                                  <Link to={`/${e.url}`}>
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
                                        isMobile
                                          ? probs.SetNavheadervisiblity(
                                              "hidden"
                                            )
                                          : "";
                                        e.item === "Vertical"
                                          ? probs.setdisplayreverse("")
                                          : "";
                                        e.item === "Vertical Rtl"
                                          ? probs.setdisplayreverse(
                                              "flex-row-reverse"
                                            )
                                          : "";
                                        e.item === "Login" ||
                                        e.item === "Sign Up"
                                          ? probs.setislogin("hidden")
                                          : false;
                                      }}
                                    >
                                      {e.item}
                                    </span>
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    )
                  )}
                </ul>
                {contactdetailposter.map((e) => (
                  <div
                    className={`bg-[#ff589b] text-white pt-2 pb-2 mt-2 ms-1 me-1 ps-3 border-[3px] border-[#bb6788] rounded-lg ${
                      isMobile ? "hidden" : probs.navheadervisiblity
                    }`}
                    key={e.id}
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
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Navbar;
