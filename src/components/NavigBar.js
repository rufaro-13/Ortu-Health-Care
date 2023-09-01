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
        <Link
          active
          to="/"
        >
          <p className='text-white py-2 hover:bg-bluetheme'>
            Home
          </p>
        </Link>

        <Link to="/about" className='text-white hover:bg-bluetheme py-2 '>
          About
        </Link>

        <Link to="/education_provision" className='text-white  hover:bg-bluetheme py-2 '>
          Education Provision
        </Link>

        <Link to="/residential_provision" className='text-white  hover:bg-bluetheme py-2 '>
          Residential Provision
        </Link>

        <Link to="/contact" className='text-white  hover:bg-bluetheme py-2 '>
          Contact
        </Link>
        <div>
              
                <Link
                  to="#"
                  className=" text-white peer block py-2   hover:bg-bluetheme md:hover:bg-transparent md:hover:text-bluetheme lg:p-2 md:dark:hover:text-bluetheme dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
                  to="vacances"
                  className=" px-5 py-3  hover:bg-bluetheme"
                >
                  Vacances
                </Link>
                  
                </div>
              
            </div>
      </Navbar.Collapse>
    </Navbar>
  )
}