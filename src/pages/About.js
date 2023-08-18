import React from 'react'
import friends from "../images/multi-ethnic-disabled-people-community-with-pencils.jpg";
import classroom from "../images/ortu-class-rooms.png.webp"
import team from "../images/team_4540467.png"
function About() {
  return (
    <div class="md:container md:mr-16 md:ml-16 mt-32">
        <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
            <p class="text-3xl"><span class="text-pinktheme ">Ortu Specialised Care and Home </span>
            are here to make a lifelong and lasting difference to young people's lives.</p>
            <br/>
            
        </div>

        <div class=" sm:items-center sm:justify-center mx-6 mt-5">
            <p>
            Ortu Specialised Care and Home provides residential care and education to young people.<br/><br/>

            We provide a place of <span class="text-pinktheme ">safety</span>, <span class="text-pinktheme ">nurture</span>, and <span class="text-pinktheme ">wellbeing</span> within a trusted environment. 
            We have an extensive large team of professionals and practitioners that aim to meet the individual needs of each 
            young person, 
            enabling them to flourish and recognise their potential, with the safety and stabilisation of a family environment.
            </p>
        </div><br/>

        <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
            <span class="text-black text-2xl font-bold">Mission Statement</span>
            
        </div>
        <div class=" sm:items-center sm:justify-center mx-6 mt-5">
            <p>
            Our mission is to enrich the lives of young people in our care by helping them to overcome 
            their difficulties, fulfill their potential and achieve the very best outcomes.<br/><br/>

            To achieve these objectives we believe that young people require the following:<br/><br/>

            <ul class="list-disc ml-6">
                <li>A caring environment that is safe, stable, nurturing, and non-judgmental.</li>
                <li>Carers who are understanding and compassionate.</li>
                <li>A team that has informed approaches to the development and implementation of therapeutic care programmes to meet individual needs.</li>
            </ul>


            </p>
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

                <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
                <span class="text-black text-2xl font-bold underline decoration-pinktheme ">The Secure Base Model<br/><br/></span>
                
                </div>

                <p class=" text-1xl font-normal">
                Ortu recognises that a sense of security and belonging lay at the foundations of building resilience.<br/><br/>
                Founded on key theories and research in child development and attachment, Ortu works with The Secure Base 
                Model alongside other life-enhancing experiences that contribute to building self-esteem.<br/><br/>
                We understand how vital interactions and relationship building are to young people and how this enables them
                 to gain and make growth socially amongst the community and peer groups.<br/><br/>
                We strongly believe that Education and Social Care are intrinsically linked and we offer bespoke educational 
                packages for our residents. Gaining recognised qualifications builds confidence and enhances our young people’s career choices and job prospects.
                </p>

            </div>

            <div class=" mx-6 mt-5" >
            <img src={classroom}class=" rounded-lg h-84 mr-3" alt=""/>

            </div>
        </div>

        <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-8">
            <div class=" sm:82 rounded-lg  sm:items-center sm:justify-center bg-slate-200  mx-4 mt-8">

                <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
                <span class="text-black text-5xl font-bold underline decoration-pinktheme mt-2">The Ortu Team <br/><br/></span>
                <img src={team}class="h-12 ml-2 " alt=""/>
                </div>

                <p class=" text-3xl font-normal">
                 See who is part of our Ortu team and what support we have available to our young people.
                </p>
                <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
                <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View our team</button>
                </div>
            </div>

            
        </div>


  
    </div>
  )
}

export default About