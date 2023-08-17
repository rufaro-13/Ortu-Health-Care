/* eslint-disable jsx-a11y/anchor-is-valid */
import residential from "../images/shelter.gif"
import care from "../images/social-care.gif"
import education from "../images/book.gif"
const Hero = () => {
  return (
    


<section class="bg-center bg-no-repeat bg-hero_pattern bg-gray-700 bg-blend-multiply bg-cover">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-44">
        <p class=" text-bluetheme text-6xl mb-6 font-cursive">Welcome to <span class="font-extrabold">Ortu</span></p>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl font-sans">Specialised care and home for children and young people</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Making a lifelong and lasting difference to young people’s lives. </p>
        <div class="flex flex-col space-y-4 pt-6 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            
            
            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={care} alt="therapeutic care"/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Therapeutic Care</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Carers who are understanding and compassionate.</p>
                </div>
            </a>

            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={residential} alt="residential"/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Residential</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">A care environment that is safe, stable, nurturing and non-judgmental.</p>
                </div>
            </a>

            <a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={education} alt="education"/>
                <div class="flex flex-col justify-between p-4 leading-normal">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Education</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Therapeutic care programmes to meet individual needs.</p>
                </div>
            </a>
           
        </div>
    </div>
</section>



  )
}

export default Hero