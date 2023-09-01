import React from 'react'
import { IconContext } from "react-icons";
import { FaFilePdf } from 'react-icons/fa6';
import {polfiles} from '../pages/Objects'
function PoliciesSection() {

  return (
    <div class="lg:flex grid lg:grid-cols-2 grid-cols-1 sm:items-center sm:justify-center mx-4 mt-2 px-2">
        
         {polfiles.map((file) => (
                
                <div class="col-span-1 flex lg:ml-8 mt-2 lg:px-8 px-2 items-start">
                <IconContext.Provider value={{ color: 'red', size: '25px', padding:'2px 2px' }}>
                    
                       <FaFilePdf class=" mx-1 my-1"/>
                   
                  </IconContext.Provider>
                <p class="md:text-1xl text-sm">
                
                <a href={file.file} class="text-blue-700 hover:underline" download={file.title}>{file.title}</a>
                </p>
                
              </div>
            ))};
        
    </div>
  )
}

export default PoliciesSection