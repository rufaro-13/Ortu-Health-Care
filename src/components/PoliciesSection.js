import React from 'react'
import { IconContext } from "react-icons";
import { FaFilePdf } from 'react-icons/fa6';
import {polfiles} from '../pages/Objects'
import {Link} from "react-router-dom"
function PoliciesSection() {

  return (
    <div class="flex grid grid-cols-2 sm:items-center sm:justify-center mx-4 mt-2 px-2">
        
         {polfiles.map((file) => (
                
                <div class="col-span-1 flex ml-8 mt-2 px-8 items-start">
                <IconContext.Provider value={{ color: 'red', size: '25px', padding:'2px 2px' }}>
                    
                       <FaFilePdf class=" mx-1 my-1"/>
                   
                  </IconContext.Provider>
                <p class="text-1xl">
                
                <a href={file.file} class="text-blue-700 hover:underline" download={file.title}>{file.title}</a>
                </p>
                
              </div>
            ))};
        
    </div>
  )
}

export default PoliciesSection