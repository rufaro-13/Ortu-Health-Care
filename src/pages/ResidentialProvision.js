import React from 'react'
import younggirl from '../images/young-disabled-african-american-woman-wheelchair-home.jpg'
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import {FaBookOpen, FaHandshakeAngle, FaSchool, FaStreetView, FaUserGroup} from 'react-icons/fa6'
function ResidentialProvision() {
  return (
    <div class="md:container md:mr-16 md:ml-16 mt-24">
        
         <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-8">
            <div class="md:w-1/2  sm:82 rounded-lg  sm:items-center sm:justify-center   mx-4 mt-8">

                <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
                <span class="text-black text-3xl font-bold underline decoration-pinktheme ">Our Home Residential Care Provision<br/><br/></span>
                
                </div>

                <p class=" text-1xl font-normal">
                  We aim to provide a place of safety, nurture and wellbeing within a trusted environment.
                  We have an extensive large team of professionals and practitioners that aim to meet the individual 
                  needs of each young person, enabling them to flourish and recognise their potential, with the safety
                    and stabilisation of a family environment.
                    <br/> <br/>

                  Ortu is here to enrich the lives of young people in our care by helping them to overcome their
                   difficulties, fulfil their potential and achieve the very best outcomes. Ortu recognises that 
                   Education and Social Care are intrinsically linked, and we offer bespoke educational packages for
                    our residents. Gaining recognised qualifications builds confidence and enhances our young people’s
                     career choices and future job prospects.
                </p>

            </div>

            <div class="md:w-1/2 mx-6 mt-5" >
             <img src={younggirl}class=" rounded-lg h-84 mr-3" alt=""/> 

            </div>
        </div>

        <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center bg-slate-100  mx-6 mt-8">

                <IconContext.Provider value={{ color: 'white', size: '50px', padding:'5px 2px' }}>
                    <div class="  sm:items-center sm:justify-center bg-pinktheme mx-5 mt-5 mb-5">
                       <FaBookOpen class="sm:items-center sm:justify-center mx-6 my-6"/>
                    </div>
                  </IconContext.Provider>
                  <div class="  sm:items-center sm:justify-center  mx-6 mt-5">
                    <p class=" text-2xl font-semibold">
                    <div><span class="text-black text-1xl font-bold">Admissions Policy</span></div>
                        Download a copy of our admissions policy <Link
                to="/"className="block py-2 pl-3 pr-4 underline text-pinktheme rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-pinktheme dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >here.</Link>
                    </p>
                  </div>
        </div>

        <div class=" sm:items-center sm:justify-center mx-6 mt-10">
            

                <div class="sm:flex sm:items-center  mx-6 mt-5">
                <span class="text-black text-3xl font-bold underline decoration-pinktheme ">Residential provision 16+ - provision<br/><br/></span>
                
                </div>

                <p class=" text-1xl font-normal mx-6 px-4">
                  <ul class="list-disc ml-6">
                    <li>A tailored and bespoke independent living programme.</li>
                    <li>Accommodation with 24-hour support.</li>
                    <li>Bespoke care packages and support hours are dependent on individual needs.</li>
                    <li>Support to register with local health providers.</li>
                    <li>Support in accessing education, employment and training (with the company or externally).</li>
                    <li>Support with future housing – “Moving on programme”.</li>
                    <li>AQA/AQAUA/BTEC/ASDAN/SKILLS for life registration and support. Children transition at the end of their learning journey with pro-social skills and behaviours and are prepared to move to further or higher education by achieving English and Math’s GCSE/Functional skills or ASDAN.</li>
                    <li>Access to counselling and support in areas such as drug and alcohol, sexuality, sexual health, anger management, self-harm, safeguarding etc.</li>
                    <li>Financial advice and assistance.</li>
                    <li>Career advice and guidance.</li>
                    <li>Access to advocacy services.</li>
                    <li>Support in joining the Care Leavers Association and a national voice for peer support and guidance.</li>
                  </ul>
                </p>

        </div>
        

        <div class=" sm:items-center sm:justify-center mx-6 mt-10 pr-8">
            

                <div class="sm:flex sm:items-center  mx-6 mt-5">
                <span class="text-black text-3xl font-bold underline decoration-pinktheme ">Careers vocational<br/><br/></span>
                
                </div>

                <p class=" text-1xl font-normal ">
                Offers an exciting vocational curriculum including BTEC (Edexcel/Pearson), ASDAN and ABC qualifications.</p>
                <p class=" text-1xl font-normal px-4">
                <ul class="list-disc mx-6">
                    <li>Engineering</li>
                    <li>Sport</li>
                    <li>Youth Work</li>
                    <li>Hospitality</li>
                    <li>Health and Social Care</li>
                    <li>Business</li>
                    <li>Music</li>
                  </ul>
                
                </p>

                <p class=" text-1xl font-normal  ">
                  Career Zone qualifications are suitable for those wishing to go from school directly into employment or apprenticeships but are also accepted 
                  by the vast majority of universities for a variety of vocationally based courses.<br/><br/>

                  In most cases, students choosing a Career Zone subject would be expected to have passed a level 2 qualification in that subject with a grade M.<br/><br/>

                  <span class="text-black text-1xl font-bold  ">1. Careers Guidance<br/></span>
                  Employability and Career development are important parts of being a Clovelly student.<br/><br/>

                  <span class="text-black text-1xl font-bold  ">2. Career Opportunities<br/><br/></span>

                  <span class="text-black text-1xl font-semibold"> a. Attends Careers talks and activities<br/></span>
                  Hear directly from local employers and work-related organisations, such as the Department for Work 
                  and Pension in our careers talk events.<br/><br/>

                  <span class="text-black text-1xl font-semibold">b. Go on work placements<br/></span>
                  Experience work placements in a wide variety of sectors, including hospitality, grounds maintenance,
                   animal care, care sector (ADT and CHD), hair and beauty, and customer services.<br/><br/>

                  <span class="text-black text-1xl font-semibold">c. Gain Transferable skills<br/></span>
                  Learn skills that you can use in a wide variety of setting whilst developing qualities that will 
                  help you be a valued employee and active citizen.<br/><br/>

                  <span class="text-black text-1xl font-semibold">d. Experience and Mock interviews<br/></span>
                  Practice interview skills in a controlled setting and learn what employers are looking for during a 
                  successful interview.<br/><br/>

                  <span class="text-black text-1xl font-semibold">e. Plan your career journey<br/></span>
                  Discuss future goals with our Careers Lead Aida Lockton and map out smart, realistic and practical 
                  actions to help make those goals a reality.<br/><br/>

                  To help students gain practical work experience in real working environments before moving on to 
                  external placements, we also operate two enterprise opportunities – CHS Enterprise and in-house 
                  work-related learning and activities.<br/><br/>

                  <span class="text-black text-1xl font-bold  ">3. Apprenticeship and independent skills<br/><br/></span>

                  All apprenticeships involve 80% of our student’s time being spent within the workplace. To support 
                  the training and development, the amount of time spent learning and training can vary depending on the employer
                   and the type of apprenticeship. The most common types of study formats:<br/>

                  <p class=" text-1xl font-normal px-4">
                  <ul class="list-disc px-4 ">
                   <li> Day release to attend school</li>
                   <li>Block release at school</li>
                  </ul>
                   
                  </p>
                  <br/>The levels are:<br/>
                  <p class=" text-1xl font-normal px-4">
                  <ul class="list-disc px-4 ">
                    <li>Intermediate apprenticeship Level 2 – equal to five GCSEs at grade 4/C</li>
                    <li>Advanced apprenticeship Level 3 – equal to A-levels</li>
                    <li>Independence</li>
                  </ul>
                  </p>
                </p>

        </div>

        <div class=" sm:items-center sm:justify-center mx-6 mt-10 pr-8">
            

          <div class="sm:flex sm:items-center  mx-6 mt-5">
            <span class="text-black text-3xl font-bold underline decoration-pinktheme ">Our Care Programme<br/><br/></span>
          
          </div>

          <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-2">

                <IconContext.Provider value={{ color: 'white', size: '50px', padding:'5px 2px' }}>
                    <div class="  sm:items-center sm:justify-center bg-pinktheme mx-5 mt-5 mb-5">
                       <FaSchool class="sm:items-center sm:justify-center mx-6 my-6"/>
                    </div>
                  </IconContext.Provider>
                  <div class="  sm:items-center sm:justify-center  mx-6 mt-1">
                    <p class=" text-1xl font-normal">
                    <div><span class="text-black text-2xl font-bold">Secure Based Model</span></div>
                    Sensitivity - Managing Feelings,  Acceptance - Self-Esteem,  Co-operation - Feeling Effective, 
                     Family Membership - Belonging,  Availability - Trust.
                    </p>
                  </div>
          </div>

          <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-1">

                <IconContext.Provider value={{ color: 'white', size: '50px', padding:'5px 2px' }}>
                    <div class="  sm:items-center sm:justify-center bg-pinktheme mx-5 mt-5 mb-5">
                       <FaHandshakeAngle class="sm:items-center sm:justify-center mx-6 my-6"/>
                    </div>
                  </IconContext.Provider>
                  <div class="  sm:items-center sm:justify-center  mx-6 mt-1">
                    <p class=" text-1xl font-normal">
                    <div><span class="text-black text-2xl font-bold">Trauma Informed Practice</span></div>
                    Safety-feeling physically and psychologically safe.
                    </p>
                  </div>
          </div>

          <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center  mx-8 mt-1">

                <IconContext.Provider value={{ color: 'white', size: '50px', padding:'5px 2px' }}>
                    <div class="  sm:items-center sm:justify-center bg-pinktheme mx-5 mt-5 mb-5">
                       <FaStreetView class="sm:items-center sm:justify-center mx-6 my-6"/>
                    </div>
                  </IconContext.Provider>
                  <div class="  sm:items-center sm:justify-center  mx-6 mt-1">
                    <p class=" text-1xl font-normal">
                    <div><span class="text-black text-2xl font-bold">PACE</span></div>
                    Playfulness, Acceptance, Curiosity, Empathy.
                    </p>
                  </div>
          </div>

          <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center   mx-8 mt-1">

                <IconContext.Provider value={{ color: 'white', size: '50px', padding:'5px 2px' }}>
                    <div class="  sm:items-center sm:justify-center bg-pinktheme mx-5 mt-5 mb-5">
                       <FaUserGroup class="sm:items-center sm:justify-center mx-6 my-6"/>
                    </div>
                  </IconContext.Provider>
                  <div class="  sm:items-center sm:justify-center  mx-6 mt-1">
                    <p class=" text-1xl font-normal">
                    <div><span class="text-black text-2xl font-bold">Therapeutic Community Model</span></div>
                    A residential, participative approach with individual and group-based sessions. Highly structured days with opportunities 
                    for community and personal chores, exercise, education and vocational time.
                    </p>
                  </div>
          </div>

          <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center bg-slate-200  mx-6 mt-8">

              
                <p class=" text-2xl font-light font-serif">
                At Ortu, we provide a nurturing pathway to overcome adversity. We believe that the heart of this starts with 
                relationships, in order to build growth, trust and development in all the young people we are fortunate enough
                 to care for and educate.
                </p>
              
           
          </div>

        </div>
    
    </div>
  )
}

export default ResidentialProvision