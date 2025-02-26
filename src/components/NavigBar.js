'use client';

import { Navbar } from 'flowbite-react';
import { Link } from "react-router-dom";
import logo from '../images/ortu_png.png'
export default function NavigBar() {
  return (
    <Navbar
      fluid
      
      className=" bg-navcolour "
    >
      <Navbar.Brand href="/">
        <img
          alt="Flowbite React Logo"
          className="mr-3 h-8 md:h-16 sm:h-9 "
          src={logo}
        />
        <span className="self-center whitespace-nowrap text-white text-xl font-semibold dark:text-white">
        Ortu Specialised Home Ltd
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2 text-white">

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>

       {/*  <Link
          active
          to="/"
        >
           <p className='text-white py-2 hover:bg-bluetheme'>
            Home
          </p> 
        
       {/*  <div className='text-white font-bold md:text-base py-2'><Dropdown
          inline
          label="Home"
          className='text-fuchsia-950 font-bold md:text-base'
        >
        <Dropdown.Header className='bg-gray-200'>
        <ul class="py-2 text-sm text-gray-700 dark:text-gray-400">
        <Link to="/lancashire" className='text-fuchsia-950 font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
        Lancashire
        </Link><br/>
        <Link to="/leicester" className='text-fuchsia-950 font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
        Leicester
        </Link>
        <div>
              
              <Link
                to="#"
                className=" text-white peer block py-2 md:text-base  hover:bg-bluetheme md:hover:bg-transparent md:hover:text-bluetheme lg:p-2 md:dark:hover:text-bluetheme dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Quick Links
              </Link>
              <div
                class="absolute hidden peer-hover:flex hover:flex
                w-[200px]
                flex-col bg-white drop-shadow-lg
                z-50"
              >
                <Link
                to="our_team"
                className=" px-5 py-3  hover:bg-bluetheme"
              >
                Our team
              </Link>
              <Link
                to="policies"
                className=" px-5 py-3 hover:bg-bluetheme"
              >
                Policies
              </Link>
              <Link
                to="vacancies"
                className=" px-5 py-3  hover:bg-bluetheme"
              >
                Vacancies
              </Link>
                
              </div>
            
          </div>



        <Link to="/peterborough" className='text-fuchsia-950 font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
        Peterborough 
        </Link><br/>
        <Link to="/yorkshire " className='text-fuchsia-950 font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
        Yorkshire 
        </Link><br/>
        <Link to="/westmidlands " className='text-fuchsia-950 font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
        West Midlands  
        </Link><br/>
                </ul>
          </Dropdown.Header>
          
        </Dropdown></div>*/}{/* </Link>   */}
         <div>
              
         <Link
                   active
                   to="/"
                  className=" text-white peer block py-2 md:text-base  hover:bg-bluetheme md:hover:bg-transparent md:hover:text-bluetheme lg:p-2 md:dark:hover:text-bluetheme dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                Home
              </Link>
              <div
                class="absolute hidden peer-hover:flex hover:flex
                w-[200px]
                flex-col bg-white/90 drop-shadow-lg
                z-50"
              >
               {/*  <Link to="/lancashire"  className="text-navcolour px-5 py-3 hover:bg-bluetheme">Lancashire</Link> */}
        {/* <Link to="/leicester" className='text-fuchsia-950 font-bold md:text-sm hover:bg-blue-700 hover:text-white'>
        Leicester
        </Link> */}
        <div>
              
              <Link to="#"className=" text-navcolour peer block px-5 py-3 md:text-base  hover:bg-bluetheme md:hover:bg-transparent md:hover:text-bluetheme  md:dark:hover:text-bluetheme dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >Leicester</Link>
              <div
                class="absolute hidden peer-hover:flex hover:flex
                w-[200px]
                flex-col bg-white drop-shadow-lg
                z-50 translate-x-12"
              >
                <Link to="/leicester" className="text-navcolour px-5 py-3 hover:bg-bluetheme">Emfield House</Link>
                <Link to="/northfield"className="text-navcolour px-5 py-3 hover:bg-bluetheme">Northfields House</Link>
              
              </div>
            
        </div>

        <Link to="/peterborough"  className="text-navcolour px-5 py-3 hover:bg-bluetheme"> Peterborough </Link>
        {/* <Link to="/yorkshire " className="text-navcolour px-5 py-3 hover:bg-bluetheme"> Yorkshire  </Link>
        <Link to="/westmidlands " className="text-navcolour px-5 py-3 hover:bg-bluetheme"> West Midlands </Link>
                 */}
        </div>
            
          </div>

        <Link to="/about" className='text-white md:text-base hover:bg-bluetheme py-2 '>
          About
        </Link>

        <Link to="/education_provision" className='text-white md:text-base hover:bg-bluetheme py-2 '>
          Education Provision
        </Link>

        <Link to="/residential_provision" className='text-white md:text-base hover:bg-bluetheme py-2 '>
          Residential Provision
        </Link>

        <Link to="/contact" className='text-white md:text-base hover:bg-bluetheme py-2 '>
          Contact
        </Link>
        <div>
              
                <Link
                  to="#"
                  className=" text-white peer block py-2 md:text-base  hover:bg-bluetheme md:hover:bg-transparent md:hover:text-bluetheme lg:p-2 md:dark:hover:text-bluetheme dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Quick Links
                </Link>
                <div
                  class="absolute hidden peer-hover:flex hover:flex
                  w-[200px]
                  flex-col bg-white drop-shadow-lg
                  z-50"
                >
                  <Link
                  to="our_team"
                  className=" px-5 py-3  hover:bg-bluetheme"
                >
                  Our team
                </Link>
                <Link
                  to="policies"
                  className=" px-5 py-3 hover:bg-bluetheme"
                >
                  Policies
                </Link>
                <Link
                  to="vacancies"
                  className=" px-5 py-3  hover:bg-bluetheme"
                >
                  Vacancies
                </Link>
                  
                </div>
              
            </div>
      </Navbar.Collapse>
    </Navbar>
  )
}