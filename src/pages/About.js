/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import friends from "../images/multi-ethnic-disabled-people-community-with-pencils.jpg";
import team from "../images/team_4540467.png"
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaFilePdf } from 'react-icons/fa6';
import file from '../policies/Statement of Purpose  2025.pdf'

function About() {
  return (
    <div class="md:container md:mr-16 md:ml-16 pt-2">
        <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-0">
        <marquee class="font-cursive text-3xl font-semibold pt-8 text-purple-600"> <p class="text-2xl"><span class="text-3xl text-pinktheme ">Ortu Specialised Home </span>
            are here to make a lifelong and lasting difference to young people's lives.</p></marquee>
            <br/>
            
        </div>

        <div class=" sm:items-center sm:justify-center mx-6 mt-5">
            <p>
            Ortu Specialised Home provides residential care and education to young people. We provide a place of <span class="text-pinktheme ">safety</span>, <span class="text-pinktheme ">nurture</span>, and <span class="text-pinktheme ">wellbeing</span> within a trusted environment. 
            We have an extensive large team of professionals and practitioners that aim to meet the individual needs of each 
            young person, 
            enabling them to flourish and recognise their potential, with the safety and stabilisation of a family environment.
            </p>
        </div><br/>

        <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
            <span class="text-black text-2xl font-bold">Statement of Purpose</span>
            
        </div>
        <div class=" sm:items-center sm:justify-center mx-6 mt-5">
            <p>
            Our mission is to enrich the lives of young people in our care by helping them to overcome 
            their difficulties, fulfill their potential and achieve the very best outcomes.<br/><br/>

            Feel free to constult the file below to know more about our statement of purpose.
            </p>
            <center>
            <div class="col-span-1 flex ml-8 mt-2 px-8 items-center  w-fit h-fit">
                <IconContext.Provider value={{ color: 'red', size: '68px', padding:'2px 2px' }}>
                    
                       <FaFilePdf class=" mx-1 my-1"/>
                   
                  </IconContext.Provider>
                <p class="text-1xl">
                
                <a href={file} class="text-blue-700 hover:underline" download={"Statement of purpose"}> Statement of purpose</a>
                </p>
                
              </div></center>
        </div>

        <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-8">
            <div class="md:w-96 sm:82 rounded-lg sm:flex sm:items-center sm:justify-center bg-gradient-to-r from-indigo-500  mx-6 mt-8">

                <p class=" text-2xl font-semibold">
                At Ortu, we adopt and believe that Unconditional Positive Regard lays at the very foundations of the company.
                </p>

            </div>

            <div class="mx-6 mt-5" >
            <img src={friends}class="h-60 mr-3" alt=""/>

            </div>
        </div>

        <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-8">
            <div class="md:w-1/2  sm:82 rounded-lg  sm:items-center sm:justify-center bg-slate-200  mx-4 mt-8">

            <div class="sm:flex sm:items-center sm:justify-center  mx-6 mt-5">
                <span class="text-black text-2xl font-bold underline decoration-pinktheme ">The Secure Base Model<br/><br/></span>
                
                </div>

                <p class=" text-1xl font-normal">
                Ortu recognises that a sense of security and belonging lay at the foundations of building resilience.<br/><br/>
                Founded on key theories and research in child development and attachment, Ortu works with The Secure Base 
                Model alongside other life-enhancing experiences that contribute to building self-esteem.<br/><br/>
                We understand how vital interactions and relationship building are to young people and how this enables them
                 to gain and make growth socially amongst the community and peer groups.<br/><br/>
                 Ortu Specialised Home is founded with the belief that security, love, empowerment 
                 and understanding. A child can grow, develop and become a contributing to society.
                </p>

            </div>
        </div>

        <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-8">
            <div class=" sm:82 rounded-lg  sm:items-center sm:justify-center bg-slate-200  mx-4 mt-8">

                <div class="flex sm:flex sm:items-center sm:justify-center mx-6 mt-5">
                <span class="text-black lg:text-3xl text-1xl font-bold underline decoration-pinktheme mt-2">The Ortu Specialised Home Team <br/><br/></span>
                <img src={team}class="lg:h-12 h-8 lg:ml-2 mt-2 " alt=""/>
                </div>

                <p class=" lg:text-1xl text-1xl font-normal">
                 See who is part of our Ortu team and what support we have available to our young people.
                </p>
                <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
                <Link
                  to="../our_team"
                  className=" px-5 py-3 hover:bg-gray-200"
                ><button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View our team</button></Link>
                </div>
            </div>

            
        </div>


  
    </div>
  )
}

export default About