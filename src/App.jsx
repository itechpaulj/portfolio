import { useEffect, useRef } from "react";
import Default from "./components/Default";
import Experienced from "./components/Experienced";
import Project from "./components/Project";
import ProgressBar from "./components/ProgressBar";
import ContactUs from "./components/ContactUs";
import { Button } from "primereact/button";
import { randomText } from "./util/animation";
function App() {
  const navLinks = useRef(null);
  const scrollBtnTop = useRef(null);
  function onMenuToggle(e) {
    const navlinks = navLinks?.current;
    const target = e.target;

    target.name = target.name === "menu" ? "close" : "menu";

    navlinks?.classList.toggle("left-[0%]");
    navlinks?.classList.toggle("z-[1_!important]");
  }

  const target = useRef(null);
  const main = useRef(null);
  const project = useRef(null);
  const experienced = useRef(null);
  const contact = useRef(null);

  function isNavMain() {
    const coorMain = main?.current.getBoundingClientRect();
    window.scrollTo({
      left: coorMain.left + window.pageXOffset,
      top: coorMain.top + window.pageYOffset,
      behavior: "smooth",
    });
  }
  function isNavProject() {
    const coorProject = project?.current.getBoundingClientRect();
    if (coorProject) {
    }
    window.scrollTo({
      left: coorProject.left + window.pageXOffset,
      top: coorProject.top + window.pageYOffset,
      behavior: "smooth",
    });
  }
  function isNavExperienced() {
    const coorExperienced = experienced?.current.getBoundingClientRect();
    if (coorExperienced) {
      window.scrollTo({
        left: coorExperienced.left + window.pageXOffset,
        top: coorExperienced.top + window.pageYOffset,
        behavior: "smooth",
      });
    }
  }
  function isNavContact() {
    const coorContact = contact?.current.getBoundingClientRect();
    if (coorContact) {
      window.scrollTo({
        left: coorContact.left + window.pageXOffset,
        top: coorContact.top + window.pageYOffset,
        behavior: "smooth",
      });
    }
  }

  useEffect(
    function () {
      window.addEventListener("scroll", () => {
        // Get the current scroll position
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop < 999) {
          scrollBtnTop?.current?.classList?.add("hidden");
        }
        if (scrollTop > 1000) {
          // Perform an action when the user scrolls past a certain point
          // You can add more actions here, like changing the style of an element
          scrollBtnTop?.current?.classList?.remove("hidden");
        }
      });
    },
    [target]
  );

  useEffect(function () {
    randomText();
  }, []);

  return (
    <div>
      <ProgressBar target={target} />
      <div className="my-10" ref={target}>
        <header className=" relative shadow-2xl px-3 py-2">
          <nav className="flex justify-between ">
            <div className="w-[130px] md:w-[200px] flex items-center">
              <code className="text-nowrap font-semibold text-[2rem] md:text-[20px] text-black">{`{  Paul Javinez  }`}</code>
            </div>
            <div className="flex items-center gap-3 text-[1.1rem]">
              <div
                ref={navLinks}
                className="duration-500 absolute md:static md:w-auto w-full md:h-auto h-[20rem] bg-gray-500 flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-3 "
              >
                <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                  <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                    <a href="#" onClick={isNavMain}>
                      Main
                    </a>
                  </li>
                  <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                    <a href="#" onClick={isNavProject}>
                      Project
                    </a>
                  </li>
                  <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                    <a href="#" onClick={isNavExperienced}>
                      Experienced Work
                    </a>
                  </li>
                  <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                    <a href="#" onClick={isNavContact}>
                      Contact us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex items-center gap-2 relative  sm:space-x-0">
                <div
                  type="button"
                  className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] font-bold text-white px-5 py-2 rounded-full text-[8px] md:text-[14px] hidden lg:inline cursor-pointer"
                >
                  <code>
                    <div className="random-word">{`< Please Wait .../>`}</div>
                  </code>
                </div>
                <div className="md:hidden">
                  <ion-icon
                    name="menu"
                    onClick={onMenuToggle}
                    className="text-[30px] cursor-pointer"
                  ></ion-icon>
                </div>
              </div>
            </div>
          </nav>
        </header>
        <div className="fixed bottom-0 right-0 p-2 z-[2] mr-[8rem_!important] md:mr-[6rem_!important] 2xl:mr-0">
          <Button
            ref={scrollBtnTop}
            label={"Back to Top"}
            className="hidden"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth", // Use 'smooth' for a smooth scrolling effect
              });
            }}
          />
        </div>
        <div
          ref={main}
          className="relative grid grid-cols-1 2xl:grid-cols-2 w-full gap-3 px-10 py-[5rem]"
        >
          <Default />
        </div>
        <div
          ref={project}
          className="relative grid grid-cols-1 2xl:grid-cols-2 w-full gap-3 px-10"
        >
          <Project />
        </div>
        <div
          ref={experienced}
          className="relative grid grid-cols-1 2xl:grid-cols-2 w-full gap-3 p-10"
        >
          <Experienced />
        </div>
        <div
          ref={contact}
          className="relative grid grid-cols-1 p-2 md:px-10 2xl:p-10"
        >
          <ContactUs />
        </div>
      </div>
    </div>
  );
}

export default App;
