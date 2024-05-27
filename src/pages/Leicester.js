import React from 'react'
import { IconContext } from "react-icons";
import { FaLocationDot  } from 'react-icons/fa6';

function Leicester() {
  return (
    <div>

      <div class="max-w-full sm:82 rounded-lg md:flex items-center sm:items-center sm:justify-center   mx-4 mt-1">
      <div class="text-center font-semibold py-4 text-3xl">
            <p class="relative inline-block pb-3">
                Emfield House 
                <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
            </p>
      </div>

        <div class="max-w-full  sm:82 rounded-lg  sm:items-center sm:justify-center flex  md:ml-60 ">
            <div><IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                    <a href="https://www.google.com/maps/place/16+Elmfield+Ave,+Leicester+LE2+1RD/@52.6223352,-1.1138622,17z"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                       <FaLocationDot  class="sm:items-center sm:justify-center  my-6"/>
                    </div></a>
                  </IconContext.Provider></div>
                  <div class="  sm:items-center sm:justify-center   mt-1">
                    <p class=" text-1xl font-normal">
                    <div>
                        <a href="https://www.google.com/maps/place/16+Elmfield+Ave,+Leicester+LE2+1RD/@52.6223352,-1.1138622,17z" className="block py-2  underline text-navcolour 
                        rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 
                        md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 
                        dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                            <span class="text-black text-2xl font-bold"></span>16 Elmfield avenue, Leicester</a></div>
                    
                    </p>
                  </div>
        </div>
    </div>  

<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
   
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/G7sWc38/IMG-20240523-WA0007.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/PtyyBg4/IMG-20240523-WA0008.jpg" alt=""/>
    </div>
    
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/dLCwKjR/IMG-20240523-WA0011.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/x6hnZ2S/IMG-20240523-WA0006.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/kSdbjfS/IMG-20240523-WA0005.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/KDWrLC7/IMG-20240523-WA0004.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/B37wFSc/IMG-20240523-WA0002.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/pzCndcb/IMG-20240523-WA0010.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/QKdMXqR/IMG-20240523-WA0001.jpg" alt="IMG-20240523-WA0001"/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/8Ptq7Jp/IMG-20240523-WA0003.jpg" alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src="https://i.ibb.co/m0kz8PS/IMG-20240523-WA0009.jpg" alt=""/>
    </div>
    
</div>

    </div>
  )
}

export default Leicester