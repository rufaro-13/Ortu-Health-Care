import React from 'react'
import { IconContext } from "react-icons";
import { FaCheck } from 'react-icons/fa6';
import society from '../images/society.gif'

function Team() {
  return (
    <div class="md:container md:mr-16 md:ml-16 mt-24">
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

            {/* <div class="md:flex sm:items-center sm:justify-center mx-6  ">    
        
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">Mental Health Practitioner</span>
                            </div>
                            
                        </p>
                    </div>
                </div>
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">Psychotherapist</span>
                            </div>
                        </p>
                    </div>
                </div>
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">Secure Based Model</span>
                            </div>    
                        </p>
                    </div>
                </div>        
            </div>

            <div class="md:flex sm:items-center sm:justify-center mx-6  ">    
        
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">SEMH Practitioner</span>
                            </div>
                            
                        </p>
                    </div>
                </div>
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">Occupational Therapist</span>
                            </div>
                        </p>
                    </div>
                </div>
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">SCERT Practitioner</span>
                            </div>    
                        </p>
                    </div>
                </div>        
            </div>

            <div class="md:flex sm:items-center sm:justify-center mx-6  ">    
        
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">Substance Misuse Practitioner</span>
                            </div>
                            
                        </p>
                    </div>
                </div>
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">Education Support Worker</span>
                            </div>
                        </p>
                    </div>
                </div>
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">Residential Support Worker</span>
                            </div>    
                        </p>
                    </div>
                </div>        
            </div>

            <div class="md:flex sm:items-center sm:justify-center mx-6  ">    
        
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">SENDCo</span>
                            </div>
                            
                        </p>
                    </div>
                </div>
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">ELSA</span>
                            </div>
                        </p>
                    </div>
                </div>
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">Well-being Practitioner</span>
                            </div>    
                        </p>
                    </div>
                </div>        
            </div>

            <div class="md:flex sm:items-center sm:justify-center mx-6  ">    
        
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">Lego Therapist</span>
                            </div>
                            
                        </p>
                    </div>
                </div>
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">SEND & SEMH Assessor</span>
                            </div>
                        </p>
                    </div>
                </div>
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">Career's Advisor & Guidance Officer</span>
                            </div>    
                        </p>
                    </div>
                </div>        
            </div>

            <div class="md:flex sm:items-center sm:justify-center mx-6  ">    
        
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">Regional Home Manager</span>
                            </div>
                            
                        </p>
                    </div>
                </div>
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">Secure Based Model</span>
                            </div>
                        </p>
                    </div>
                </div>
                <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                    <IconContext.Provider value={{ size: '20px', padding:'2px 2px' }}>
                        <div class="  sm:items-center sm:justify-center ">
                            <FaCheck class="sm:items-center sm:justify-center mx-6"/>
                        </div>
                    </IconContext.Provider>
                    <div class="  sm:items-center sm:justify-center  mx-2 mt-1">
                        <p class=" text-1xl font-normal">
                            <div>
                                <span class="text-black text-1xl font-bold">Housekeeper</span>
                            </div>    
                        </p>
                    </div>
                </div>        
            </div> */}
        </div>
    </div>
  )
}

export default Team