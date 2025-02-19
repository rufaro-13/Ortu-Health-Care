import React from 'react'
/* import Carousel2 from '../components/Carousel2'
import './peter.css' */


function Peterborough() {
    const safeguardingteam = [
    
        {
            title: "Ronnie Nkomo",
            file: "https://i.ibb.co/hyd9mc5/40010.jpg",
            role: "DSL",
            email: "Dsl@ortuhome.com",
            team: ["Safeguarding","Management"]
        },
        {
            title: "Cidia Silva",
            file: "https://i.ibb.co/hyd9mc5/40010.jpg",
            role: "Manager",
            email: "",
            team: ["Safeguarding","Management"]
        },


        {
            title: "Joao Costa",
            file: "https://i.ibb.co/hyd9mc5/40010.jpg",
            role: "Deputy Manager & Deputy DSL",
            email: "DeputyHH@ortuhome.com",
            team: ["Safeguarding","Management"]
        },



       {
            title: "Fiona Muddle",
            file: "https://i.ibb.co/hyd9mc5/40010.jpg",
            role: "RI & Compliance",
            email: "",
            team: ["Safeguarding"]
        },
        ];

        
  return (
    <div>

      <div class="max-w-full sm:82 rounded-lg md:flex items-center sm:items-center sm:justify-center   mx-4 mt-1">
            <div class="text-center font-bold py-4 text-4xl">
                    <p class="relative inline-block pb-3">
                    Hampton Garden House

                        <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
                    </p>
            </div>

        
        </div> 

         <div class="max-w-full sm:82 rounded-lg md:flex    mx-4 mt-1">
            <div class="text-center font-semibold py-4 text-3xl">
                    <p class="relative inline-block pb-3">
                        Meet the team 
                        <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
                    </p>
            </div>

        
        </div> 

        <div className="  grid  lg:grid-cols-5 justify-items-center m-auto md:grid-cols-2 md:gap-4 grid-col-1 md:px-auto item-stretch ">

        {safeguardingteam.map((file) => (
                <div className="mx-auto  mt-8 px-4 md:w-4/5 pt-1  h-fit w-2/3 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  rounded-lg bg-gray-300  ">
    
                    <div className=" text-sm md:text-lg text-darkbluetheme dark:text-blue-500 sm:pt-1 lg:pt-4">
                    <h5 className="md:text-xl text-justify text-lg font-bold tracking-tight text-titleblue dark:text-white pt-2">
                        <p className='text-center'>
                        {file.title}
                        </p>
                    </h5>
                    </div>
                    <div className=" text-sm md:text-lg text-darkbluetheme dark:text-blue-500 sm:pt-1 pb-3 lg:pt-4">
                        <div className=' max-h-24 justify-items-center'>
                            <img class=" mx-2 md:p-2  object-scale-down h-24 w-76 rounded-full" src={file.file} alt={file.title} style={{height: "150 px"}}/>
                        </div>      
                        <div className="  sm:items-center sm:justify-start ml-1 mx-2  pt-4">
                            <p className="text-start text-xs font-normal">
                            
                                <b>Role:</b> {file.role}<br/>
                                {/* <b>Email:</b> {file.email}<br/>
                                <b>Team:</b> {file.team[0]} Team<br/>
                                {
                                    (file.team).length >1 && <span><span hidden>Team:</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{file.team[1]} Team</span>
                                    
                                } */}
                            </p>
                        </div>
                        

                        
                    </div>
                </div>
        ))}
                

            </div>


        <div class="max-w-full sm:82 rounded-lg md:flex    mx-4 mt-5">
            <div class="text-center font-semibold py-4 text-3xl">
                    <p class="relative inline-block pb-3">
                       Gallery 
                        <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
                    </p>
            </div>

        
        </div>

        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-2 gap-4 mt-2" >
        
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/CzhtWG4/image10.jpg" alt=""/>
            </div>
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/zXS9Vnh/image9.jpg" alt=""/>
            </div>
            
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/c6x962d/image8.jpg" alt=""/>
            </div>
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/VYRJH1D/image6.jpg" alt=""/>
            </div>
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/5BR13p9/image7.jpg" alt=""/>
            </div>
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/gZp0N60/image14.jpg" alt=""/>
            </div>
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/0Qpj335/image13.jpg"  alt=""/>
            </div>
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/DPJFPtR/image12.jpg" alt=""/>
            </div>
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/hs4tvyk/image11.jpg" alt="IMG-20240523-WA0001"/>
            </div>
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/fG6HFdz/image5.jpg" alt=""/>
            </div>
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/j8MTNSp/image3.jpg" alt=""/>
            </div>
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/6FsSyX4/image1.jpg" alt=""/>
            </div>
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/0rC8pkT/image2.jpg" alt=""/>
            </div>
            <div>
                <img class="mt-8 bg-gray-300 shadow-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:translate-x-6 hover:scale-110 duration-300 hover:bg-cards  h-auto max-w-full rounded-lg" src="https://i.ibb.co/f8C2BmG/image4.jpg" alt=""/>
            </div>

            
        </div>

    </div>
  )
}

export default Peterborough