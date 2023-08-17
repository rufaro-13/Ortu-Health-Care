import React from 'react'
import logo from '../images/ortu-logo.svg';
import social from '../images/social-care-network-logo.png.webp';
import careskills from '../images/careskills-academy-logo.png.webp';
import elsa from '../images/elsa-logo.png.webp';
import nurture from '../images/nurture-group-logo.png.webp';
import asdan from '../images/asdan-logo.png.webp'

function Footer() {
  return (
    <div>
        
<footer class="bg-white  shadow dark:bg-navcolour mx-0 mt-20">
    <div class="w-full max-w-screen-xl mx-auto p-1 md:py-8">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">

            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="#" class="flex items-center mb-4 sm:mb-0">
                    <img src={logo}class="h-12 mr-3" alt="Flowbite Logo" />
                </a>

                <a href="https://careskillsacademy.co.uk/" class="flex items-center mb-4 sm:mb-0">
                    <img src={careskills}class="h-12 mr-3" alt="Flowbite Logo" />     
                </a>

                <a href="#" class="flex items-center mb-4 sm:mb-0">
                    <img src={nurture}class="h-12 mr-3" alt="Flowbite Logo" />   
                </a>

                <a href="https://www.elsanetwork.org/" class="flex items-center mb-4 sm:mb-0">
                    <img src={elsa}class="h-12 mr-3" alt="Flowbite Logo" />    
                </a>

                    <a href="https://www.socialcarenetwork.com/" class="flex items-center mb-4 sm:mb-0">
                    <img src={social}class="h-12 mr-3" alt="Flowbite Logo" />   
                </a>

                <a href="https://www.asdan.org.uk/" class="flex items-center mb-4 sm:mb-0">
                    <img src={asdan}class="h-12 mr-3" alt="Flowbite Logo" />   
                </a>

            </div>

            <div class="sm:flex sm:items-center sm:justify-center mx-12 mt-5">
                <ul class=" mt-8 mx-8 flex flex-wrap items-center mb-6 text-2xl font-medium text-gray-500 sm:mb-0 dark:text-white">
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 font-large">About</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 font-large">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="mr-4 hover:underline md:mr-6 font-large">Licensing</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline font-large">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
            <span class="block text-sm text-white sm:text-center dark:text-white">© 2023 <a href="https://flowbite.com/" class="hover:underline">Ortu Specialised Home™</a>. All Rights Reserved.</span>
            <span class="mx-12 block text-sm text-white sm:text-center dark:text-white">Developed by <a href="mailto:rufarochiuta@gmail.com" class="hover:underline">Chiuta</a> & <a href="mailto:charmainemangorima@gmail.com" class="hover:underline">Mangorima</a></span>
        </div>
    </div>
</footer>


    </div>
  )
}

export default Footer