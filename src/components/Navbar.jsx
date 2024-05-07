// Llibraries
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";

// assets
import { logo, menu, close } from "../assets";
import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div>
      <div className={`${styles.paddingX} w-full flex items-center justify-between py-5 fixed top-0 z-20 ${isOpen ? (
        'bg-primary'
      ) : (
        scrolled ? (
          'bg-primary'
        ) : (
          'bg-transparent'
        )
      )}`}>
        <div className="w-full flex items-center justify-between">
          <div className="flex-shrink-0">
            <Link
              to='/'
              className='flex items-center gap-2'
              onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
              }}
            >
              <img
                className="h-8 w-8"
                src={logo}
                alt="Workflow"
              />
              <p className='text-white text-[18px] font-bold cursor-pointer flex '>
                Mathias &nbsp;
                <span className='lg:block hidden'> | Full Stack Web Developer</span>
              </p>
            </Link>
          </div>
            <div className="hidden lg:block ml-10 flex items-baseline space-x-4">
              {navLinks.map((nav) => (
                <a
                  href={`#${nav.id}`}
                  onClick={()=>{
                    setIsOpen(false)
                    setScrolled(true)
                  }}
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >{nav.title}</a>
              ))}
              <a
                href='https://www.dropbox.com/scl/fi/40m92jd64eyrti3ee5yp3/resume_mathiasmendoza.pdf?rlkey=i4vunfkcs1div4ik4mm7e5plw&st=gjmr2y07&dl=0'
                target="_blank"
                className="text-gray-200 bg-gray-700 hover:text-white hover:bg-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >Resume <i class="fa-regular fa-paper-plane ml-1"></i></a>
            </div>
        </div>
        <div className="-mr-2 flex lg:hidden">
          <button
            onClick={() => {
              setIsOpen(!isOpen)
              if(isOpen){
                setScrolled(false)
              }else{
                setScrolled(true)
              }
            }}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md hover:text-white focus:outline-none"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <img
              src={isOpen ? close : menu}
              alt='menu'
              className='w-[28px] h-[28px] object-contain'
          />
          </button>
        </div>
      </div>

      <Transition
        className='w-full fixed top-20 z-20 bg-primary'
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="lg:hidden border-b-2 rounded-b-xl border-white" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-5 space-y-1 sm:px-">
              {navLinks.map((nav) => (
                <a
                  onClick={()=>{
                    setIsOpen(false)
                    setScrolled(true)
                  }}
                  href={`#${nav.id}`}
                  className="hover:bg-gray-700 text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >{nav.title}</a>
              ))}
              <a
                href='https://www.dropbox.com/scl/fi/40m92jd64eyrti3ee5yp3/resume_mathiasmendoza.pdf?rlkey=i4vunfkcs1div4ik4mm7e5plw&st=gjmr2y07&dl=0'
                target="_blank"
                className="bg-gray-700 w-fit m-auto text-white hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >Resume <i class="fa-regular fa-paper-plane ml-1"></i></a>
            </div>
          </div>
        )}
      </Transition>
    </div>
  );
};

export default Navbar;
