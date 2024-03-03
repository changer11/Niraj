import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {styles} from "./../style";
import {navLinks } from './../constants';
import {logo,menu,close} from "./../assets";
const Navbar = (probs) => {
  const [toggle,setTogglle] =useState(false);
  return (
    <nav className={`
    ${styles.paddingX}
    w-full flex items-center py-3 fixed top-0 z-20 bg-primary border-b-[1px] border-e-secondary border-solid rounded-[15px]
    `}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" 
        className='flex items-center gap-2'
        onClick={()=>{
          probs.setActive("");
          window.scrollTo(0,0);
        }}
        >
        <img src={logo} alt="logo" className='w-12 h-12 object-contain bg-gray-400 rounded-full '  />
        <p className='text-white text-[18px] font-bold cursor-pointer flex' >Niraj<span className='sm:block hidden'> <span className='pe-2 ps-2'>|</span> Mern Stack Developer</span></p>
        </Link>
        <ul className='list-none hidden sm:flex  gap-5 flex-row'>
          {navLinks.map((link)=>(
            <li key={link.id} className={`${probs.Active===link.title?"text-black text-[18px] bg-white hover:text-black":"text-secondary  hover:text-white "}
             font-medium cursor-pointer ps-[12px] pe-[12px] pt-[7px] pb-[7px]`}
             >
              <Link to={`/${link.id}`} onClick={()=>probs.setActive(link.title)}>{link.title}</Link>
              </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img src={toggle?close:menu} alt="menu" className='w-[28px] object-contain cursor-pointer' onClick={()=> setTogglle(!toggle)}/>
          <div className={`${!toggle ? 'hidden': 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
          <ul className='list-none flex flex-col gap-10 '>
          {navLinks.map((link)=>(
            <li key={link.id} 
            onClick={()=>{
              probs.setActive(link.title);setTogglle(!toggle);
            }}>
            <Link to={`/${link.id}`}>{link.title}</Link>
            </li>
          ))}
        </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar