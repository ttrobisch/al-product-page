import React, { useState } from "react";
import { CrossIcon, BurgerMenu } from "./icons";
import clsx from "clsx";
import { useRouter } from "next/router";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

type Props = {
  amrs: { name: string; img: string }[];
  fallbackImg: string;
  fallbackImgAlt: string;
  pages: string[];
  color: string;
};

function Header(props: Props) {
  // const currentLang = useRouter().locale;
  const currentLang = "de";

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    setShowAMRList(false);
  };

  const handleAmrClose = () => {
    setShowAMRList(false);
  };

  const [showAMRList, setShowAMRList] = useState(false);
  const [amrIndex, setAMRIndex] = useState(-1);
  const amr = props.amrs[amrIndex];
  const amrUrl = amr ? amr.img : props.fallbackImg;
  const amrAlt = amr ? amr.name : props.fallbackImgAlt;

  return (
    <LayoutGroup>
      <motion.div className="relative h-full w-full">
        <AnimatePresence presenceAffectsLayout>
          {isOpen && (
            <motion.div
              layout
              transition={{ duration: 1, delay: 0.1 }}
              initial={{ opacity: 0, height: "0px", width: "100vw" }}
              animate={{ opacity: 1, height: "100vh", width: "100vw" }}
              className={clsx({
                "duration-900 absolute px-8 py-8 pb-5 transition-opacity ": true,
                "hidden bg-white": !isOpen,
                " flex-grow bg-[#000000aa]": isOpen,
              })}
            ></motion.div>
          )}
        </AnimatePresence>
        <motion.div
          layout
          className={clsx({
            " absolute grid w-full gap-8 overflow-hidden rounded-b-3xl bg-[#D2D7D9] px-8 py-8 pb-5 transition-all duration-700 ease-in-out lg:gap-20 lg:px-24 lg:py-20": true,
            "text-color h-auto bg-transparent": !isOpen,
            "flex-grow": isOpen,
          })}
          onMouseLeave={handleAmrClose}
        >
          <div className="flex flex-wrap justify-between text-[#141D1E]">
            <a className="text-left text-sm hover:font-semibold" href="">
              Autonomous Logistics
            </a>
            <button className="text-right text-sm" onClick={handleClick}>
              {isOpen ? (
                <>
                  <CrossIcon className="mr-2 " />
                  <span className="max-lg:hidden">close</span>
                </>
              ) : (
                <>
                  <BurgerMenu className="mr-2 h-[14px] " />
                  <span className="max-lg:hidden">Menu</span>
                </>
              )}
            </button>
          </div>
          <AnimatePresence presenceAffectsLayout>
            {isOpen && (
              <motion.div transition={{ duration: 0.4 }} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                <div className="grid grid-cols-[1fr_30%] gap-12 pb-12 lg:pb-24">
                  <div>
                    <div className="flex flex-col text-3xl lg:flex-row lg:pb-4 lg:text-6xl">
                      <a className="pr-10 font-extralight hover:font-normal" href="" onMouseEnter={handleAmrClose}>
                        Home
                      </a>
                      <a className="pr-10  font-extralight hover:font-normal" href="" onMouseEnter={handleAmrClose}>
                        Solution
                      </a>
                      <a
                        className={clsx({
                          "pr-10  font-extralight hover:font-normal": true,
                          "font-normal": showAMRList,
                        })}
                        href=""
                        onMouseEnter={() => {
                          setAMRIndex(-1);
                          setShowAMRList(true);
                        }}
                      >
                        Modelle
                      </a>
                    </div>
                    <AnimatePresence>
                      {showAMRList && (
                        <div
                          className={clsx({
                            "flex flex-col flex-wrap overflow-hidden pb-4 pl-4 transition-all duration-700 ease-in-out lg:flex-row lg:pl-0": true,
                          })}
                        >
                          {props.amrs.map((amr, index) => (
                            <motion.a layout className={clsx("inline-block pr-10 text-lg font-thin hover:font-light lg:text-2xl", {})} initial={{ opacity: 0, height: 0 }} exit={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} key={amr.name} onMouseEnter={() => setAMRIndex(index)}>
                              {amr.name}
                            </motion.a>
                          ))}
                        </div>
                      )}
                    </AnimatePresence>
                    <div className="flex flex-col text-3xl lg:flex-row lg:text-6xl">
                      <a className="pr-10 font-extralight hover:font-normal" href="" onMouseEnter={handleAmrClose}>
                        Team
                      </a>
                      <a className="pr-10  font-extralight hover:font-normal" href="" onMouseEnter={handleAmrClose}>
                        Blog
                      </a>
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showAMRList ? 1 : 0 }}
                    exit={{ opacity: 0 }}
                    className={clsx({
                      " rounded-lg bg-black p-4 max-lg:hidden ": true,
                    })}
                  >
                    <img className="pr-10 text-3xl font-thin hover:font-light" src={amrUrl} alt={amrAlt} />
                  </motion.div>
                </div>
                <div className="">
                  <nav className=" flex flex-col flex-wrap justify-between text-sm text-[#141D1E] md:flex-row ">
                    <div className="space-x-6 text-right md:text-left">
                      <a className="hover:font-semibold" href="">
                        Impressum
                      </a>
                      <a className="hover:font-semibold" href="">
                        Datenschutz
                      </a>
                      <a className="hover:font-semibold" href="">
                        FAQ
                      </a>
                    </div>
                    <div className={"order-first pb-4 text-right text-sm md:order-last "}>
                      <a className={`no-underline hover:underline ${currentLang === "de" ? "font-extrabold" : ""}`} href="/de">
                        DE{" "}
                      </a>
                      |
                      <a className={`no-underline hover:underline ${currentLang === "en" || currentLang === "" ? "font-extrabold" : ""}`} href="/en">
                        {" "}
                        EN
                      </a>{" "}
                    </div>
                  </nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </LayoutGroup>
  );
}

export { Header };
