import React from 'react'
import society from '../images/society.gif'

function Team() {
  return (
    <div class="md:container md:mr-16 md:ml-16 mt-2">
        <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
            <span class="text-black text-3xl font-bold">Ortu Team</span>
            <img src={society} alt="route icon" className="w-24 h-20"></img>
        </div>

        <div class=" sm:items-center sm:justify-center bg-gray-100 mx-6 mt-2 ">
        
            <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
                <span class="text-black text-2xl font-normal">Ortu team is full of diverse and fully qualified :</span>  
            </div><br/>

            <div class="md:flex sm:items-center sm:justify-center mx-6  ">

            <p class=" text-1xl font-normal px-4">
                <ul class="list-disc mx-6">
                   <li>Mental Health Practitioner</li>
                   <li> Psychotherapist</li>
                   <li>SEMH Practitioner</li>
                   <li>Occupational Therapist</li>
                   <li>SCERT Practitioner</li>
                   <li>Substance Misuse Practitioner</li>
                   <li>Education Support Worker</li> 
                   <li>Residential Support Worker</li>
                   <li>SENDCo</li>
                   
                  </ul>
            </p>

             <p class=" text-1xl font-normal px-4">
                <ul class="list-disc mx-6">
                   
                   <li>ELSA</li>
                   <li>Well-being Practitioner</li>
                   <li>Lego Therapist</li>
                   <li> SEND & SEMH Assessor</li>
                   <li>Career's Advisor & Guidance Officer</li>
                   <li>Regional Home Manager</li>
                   <li>Housekeeper</li>
                   <li>Home Manager</li>
                   <li>Responsible Individual</li>
                  </ul>
            </p>
            </div>
        </div>
    </div>
  )
}

export default Team