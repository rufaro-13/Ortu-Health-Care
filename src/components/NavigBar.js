/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import logo from "../images/ortu_png.png"

const NavigBar = () => {
  return (
    <div class="container mb-0">
    <nav className=" bg-navcolour  fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600  ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#"
          className="flex items-center mb"
        >
          <img
            src={logo}
            className="h-24 mr-3"
            alt="ortu-health logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Ortu Home
          </span>
        </a>
        <div className="flex md:order-2">
        {/*   <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get started
          </button> */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-navcolour dark:border-gray-700">
            <li>
              {/* <Link to="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link> */}
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bluetheme md:p-0 md:dark:hover:text-bluetheme dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:textbluetheme md:p-0 md:dark:hover:text-bluetheme dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </Link>
            </li>

            <div>
              <li>
                <Link
                  to="/education_provision"
                  className=" peer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bluetheme md:p-0 md:dark:hover:text-bluetheme dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Education Provision
                </Link>
                <div
                  class="absolute hidden peer-hover:flex hover:flex
                  w-[200px]
                  flex-col bg-white drop-shadow-lg
                  z-50"
                >
                 {/*  <a className="px-5 py-3 hover:bg-gray-200" href="https://6ixelement.club/become-model.php" target="_blank">
                    Become a model
                  </a>
                  <a className="px-5 py-3 hover:bg-gray-200" href="https://6ixelement.club/hire-models.php" target="_blank">
                   Hire Models
                  </a> */}
                 
                </div>
              </li>
            </div>

            <li>
              <Link
                to="/residential_provision"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bluetheme md:p-0 md:dark:hover:text-bluetheme dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Residential Provision
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bluetheme md:p-0 md:dark:hover:text-bluetheme dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </Link>
            </li>

            <div>
              <li>
                <Link
                  to="#"
                  className=" peer block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-bluetheme md:p-0 md:dark:hover:text-bluetheme dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
                  className=" px-5 py-3 hover:bg-gray-200"
                >
                  Our team
                </Link>
                <Link
                  to="policies"
                  className=" px-5 py-3 hover:bg-gray-200"
                >
                  Policies
                </Link>
                <Link
                  to="vacances"
                  className=" px-5 py-3 hover:bg-gray-200"
                >
                  Vacances
                </Link>
                  
                </div>
              </li>
            </div>

          
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default NavigBar;