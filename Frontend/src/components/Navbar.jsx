import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Login from './Login';
import Logout from './Logout';
import { useAuth } from '../context/AuthProvider';
function Navbar() {
   const[authUser,setaAuthUser]=useAuth();

    const [theme,setTheme]=useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light"
);
const element =document.documentElement; 
useEffect(()=>{
    if(theme==="dark"){
        element.classList.add("dark");
        localStorage.setItem("theme","dark");
        document.body.classList.add("dark");
    }else {
        element.classList.remove("dark");
        localStorage.setItem("theme","light");
        document.body.classList.remove("dark");
    }
},[theme]);



//useState=>use to manage and update state
//useEffect=> use to handle side effects during component mount ,unmount,update

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);//Adds an event listener to run handleScroll whenever the user scrolls.
    return () => window.removeEventListener("scroll", handleScroll);//  removes the scroll listener when the component unmounts (to prevent memory leaks).
  }, []);

  const navItems = (
    <>
      <li><Link to ="/" className="hover:text-pink-500 transition">Home</Link></li>
      <li><Link to='/course' className="hover:text-pink-500 transition">Course</Link></li>
      <li><a className="hover:text-pink-500 transition">Contact</a></li>
      <li><a className="hover:text-pink-500 transition">About</a></li>
    </>
  );

  return (
    <div className={`max-w-screen-2xl container mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white  fixed top-0 left-0 right-0 ${sticky ? "sticky-navbar shadow-md bg-base200 duration-300 transition-all ease-in-out  z-50 dark:bg-slate-600 dark:text-white": ""}`}>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="navbar py-2">
          {/* Start - Mobile Dropdown & Brand */}
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-7 6h16" />
                </svg>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white mt-3 z-50 p-2 shadow rounded-box w-52">
                {navItems}
              </ul>
            </div>
            <a className="text-3xl font-semibold hover:text-pink-500 transition ">BookStore</a>
          </div>

          {/* Center - Desktop Nav */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItems}
            </ul>
          </div>

          {/* End - Search | Theme | Login */}
          <div className="navbar-end space-x-3">
            {/* Search */}
            <div className="relative">
              <input
                type="search"
                placeholder="Search"
                className="input input-bordered pl-10 md:w-64"
              />
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>

            {/* Theme Toggle */}
            <label className="swap swap-rotate">
              <input type="checkbox" className="theme-controller" value="synthwave" />

              {/* Sun Icon */}
              <svg className="swap-off h-7 w-7 fill-current" xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
              onClick={()=>setTheme(theme==="light"? "dark":"light")}
              >
                <path  d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /> 
                
                </svg>
              {/* Moon Icon */}
              <svg className="swap-on h-7 w-7 fill-current" 
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
              onClick={()=>setTheme(theme==="dark"? "light":"dark")}>
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
              </svg>
            </label>

            {
              authUser?<Logout/>:
              <div className=''> 
              
              {/* Login */}
            <a className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition cursor-pointer "
            onClick={()=>
                document.getElementById("my_modal_3").showModal()
            }
            >
              Login
            </a>
           <Login/>
           </div>
            }

            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
