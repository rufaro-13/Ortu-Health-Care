import React from 'react'
import PoliciesSection from '../components/PoliciesSection'

function Policies() {
  return (
    <div class="md:container  pt-2">
        <div class="sm:flex sm:items-center sm:justify-center mx-12 mt-0">
           <div>
              <div class="text-center font-semibold py-4 text-3xl">
                  <p class="relative inline-block pb-3">
                  Ortu Specialised Home Policies
                      <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
                  </p>
              </div>
            </div>
         </div>

         <div class=" sm:items-center sm:justify-center md:mr-16 md:ml-16 mt-2 px-5">
            <p class="text-1xl">
            Please find below a copy of our current policies for OSH, if you require any of them
             to be provided in a different format or you have any queries please contact us at <a class="text-blue-700" href="ll" >info@ortuhome.com.</a>
            </p>
            <br/>
           </div>

           <div class="">
           
              <PoliciesSection /> 
            
           </div> 
    </div>
    
  )
}

export default Policies