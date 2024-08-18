import React from "react";
function onMenuToggle(e) {
  const navlinks = document.querySelector(".navLinks");
  const target = e.target;

  target.name = target.name === "menu" ? "close" : "menu";
  navlinks.classList.toggle("left-[0%]");
}

function Header() {
  return (
    <>
      <header className=" relative shadow-2xl px-3 py-2">
        <nav className="flex justify-between ">
          <div className="w-[130px] md:w-[200px] flex items-center">
            <code className="text-nowrap font-semibold text-[2rem] md:text-[20px] text-black">{`{  Paul Javinez  }`}</code>
          </div>
          <div className="flex items-center gap-3 text-[1.1rem]">
            <div className="navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-gray-500 flex md:items-center gap-[1.5vw] top-[100%] left-[-100%] px-5 md:py-0 py-5 ">
              <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <a href="#">Main</a>
                </li>
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <a href="#">Project</a>
                </li>
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <a href="#">Experienced Work</a>
                </li>
                <li className="relative max-w-fit pr-3 md:pr-0 py-1 after:bg-gradient-to-r from-[#2b68e0] to-[#e710ea]  after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                  <a href="#">Contact us</a>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-2 relative  sm:space-x-0">
              <button
                type="button"
                className="hover:bg-clip-text hover:text-transparent bg-gradient-to-br from-[#2b68e0] to-[#e710ea] border-solid border-2 border-[#5356e3] font-bold text-white px-5 py-2 rounded-full text-[8px] md:text-[14px] hidden lg:inline "
              >
                <code>{`< Hello World />`}</code>
              </button>
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
    </>
  );
}

export default Header;
