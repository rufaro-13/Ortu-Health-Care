/* eslint-disable jsx-a11y/no-distracting-elements */
import React from 'react'
import Hero from "../components/Hero";
import { Link } from 'react-router-dom';
import residentialprov from "../images/residentialprov.jpg"

function Home() {
  return (
    <div class="p-0">
        <Hero/>
      
{/*         <div class="flex items-center justify-center p-12">
            <div>
            <p class="text-2xl font-bold"><span class="text-purpletheme ">Ortu Specialised Care and Home </span>
            are here to make a lifelong and lasting difference to young people's lives.</p>
            <br/>  

            <p class="text-xl"><span class="font-bold">Mission Statement - </span> our mission is to enrich the lives of young people in our care by helping them to overcome their difficulties,
             fulfil their potential and achieve the very best outcomes. <span class="text-purpletheme font-bold"><Link to="/about">Learn more about us.</Link></span></p>
            <br/>  
        </div>
        </div> */}




<div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
  <div className="flex flex-col w-full lg:w-3/4 p-8 overflow-hidden lg:flex-row">
    <div className="bg-gradient-to-br from-purple-600 to-purpletheme rounded-lg p-6 text-white lg:w-1/2">
      <h1 className="text-3xl font-semibold mb-4">Home Residential Care Provision</h1>
      <p className="mb-4">
        We support our young people in small, family-style homes, meeting the needs of the
        different experiences that our young people bring with them.
      </p>
      <p className="mb-4">
        Our care homes have 3 bedrooms, whereby we use 2 for long-term residents and 1 as a
        temporary need, as a route to fostering for a young person.
      </p>
      <p className="mb-4">
        Oadby is a town in the borough of Oadby and Wigston in the county of Leicestershire and
        has a thriving high street at the center of a busy and friendly community. Oadby is
        located 10 minutes outside of Leicester City Centre but has all the amenities needed on
        a daily basis.
      </p>
      <p>
        It has easy public transport routes into the city and is a short drive away from the
        Leicestershire countryside, providing flexibility and a choice of lifestyle.
      </p>
      <br/>
      <Link to="/residential_provision"><button type="button" class="border border-white rounded p-3 font-bold hover:bg-bluetheme">Learn more</button></Link>
    </div>
    <div className="bg-blue-300 rounded-lg overflow-hidden lg:w-1/2 mt-6 sm:mt-0">
      <img src={residentialprov} alt="Residential Care" className="w-full h-full object-cover" />
    </div>
  </div>


  
{/*   <button
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className="fixed bottom-6 right-6 bg-purpletheme text-white p-2 rounded-lg shadow-md"
>
  Back to Top
</button> */}
</div>
<p class="flex items-center justify-center p-16 text-2xl bg-gray-100">
    At Ortu, we provide a nurturing pathway to overcome adversity. We believe that the heart of this starts with
     relationships, in order to build growth, trust and development in all the young people we are fortunate enough
      to care for and educate.
</p>
<marquee class="font-cursive text-3xl font-semibold pt-8 text-purple-600">We are here to make you feel that you are not alone ...</marquee>
</div>
 

  )
}

export default Home