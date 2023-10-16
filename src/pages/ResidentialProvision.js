//import React from 'react'
import younggirl from '../images/young-disabled-african-american-woman-wheelchair-home.jpg'
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import {FaBookOpen, FaHandshakeAngle, FaSchool, FaStreetView} from 'react-icons/fa6'
function ResidentialProvision() {
  return (
    <div class="md:container mx-4 md:mr-16 md:ml-16 pt-2">
        
         <div class="md:flex sm:items-center sm:justify-center md:mx-6 mx-2 mt-0">
            <div class="md:w-1/2  sm:82 rounded-lg  sm:items-center sm:justify-center mx-1  md:mx-4 mt-8">

                <div class="sm:flex sm:items-center sm:justify-center md:mx-6 mx-1 mt-5">
                <span class="text-black text-2xl md:text-3xl font-bold underline decoration-pinktheme ">Our Home Residential Care Provision<br/><br/></span>
                
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

            <div class="md:w-1/2 w-full md:mx-6 mx-1 mt-5" >
             <img src={younggirl}class=" rounded-lg h-84 mr-3" alt=""/> 

            </div>
        </div>

        <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center bg-slate-100  mx-6 mt-8">

                <IconContext.Provider value={{ color: 'white', size: '50px', padding:'5px 2px' }}>
                    <div class=" max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-5 mt-5 mb-5">
                       <FaBookOpen class="sm:items-center sm:justify-center  mx-3 md:mx-6 my-6"/>
                    </div>
                  </IconContext.Provider>
                  <div class="  sm:items-center sm:justify-center  mx-6 mt-5">
                    <p class=" text-2xl text-base font-semibold">
                    <div><span class="text-black md:text-1xl text-base font-bold">Admissions Policy</span></div>
                        Download a copy of our admissions policy <Link
                to="/"className="block py-2 pl-3 pr-4 underline text-pinktheme rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-pinktheme dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >here.</Link>
                    </p>
                  </div>
        </div>

        <div class=" sm:items-center sm:justify-center mx-1 md:mx-6 mt-10">
            

            <div class="sm:flex sm:items-center mx-1 md:mx-6 mt-5">
            <span class="text-black text-2xl lg:text-3xl font-bold underline decoration-pinktheme ">Specialist Services and Care for Children (under 16)<br/><br/></span>
            
            </div>

            <p class="text-base md:text-1xl font-normal mx-1 md:mx-6 px-4">
              <ul class="list-disc ml-2 md:ml-6">
                <li>Ortu specialist Home residential care services have a reputation for providing outstanding 
                  levels of care, helping children and young people with a range of complex needs, including 
                  D/deaf and hearing loss, victims of child sexual abuse and exploitation and CAMHS, to stabilise 
                  their lives, develop their potential and progress to more independent living.<br/> Our environments 
                  provide everyone in our care a home to feel safe in and a chance to develop their lives with optimism and 
                  enthusiasm. By providing a complete continuity of care through positive therapeutic and behavioural approaches, 
                  Ortu provides extensive support for children and young adults to achieve their personal best. We aim to reduce 
                  1:1 levels of support by providing personalised care and pathways leading to supported living.<br/>
</li><br/>
                <li>Ortu Specialist Home offers residential placements to children aged 12-18 who are or have experienced or are
                   experiencing significant mental health needs. Our services are registered with Ofsted with care, clinical and 
                   education offerings. Our aim is to work collaboratively with all our teams to ensure a child focussed plan in 
                   order to support the recovery and integration back into every day life following a period of ill-health due to 
                   mental wellbeing and self injury (Self Harm) behaviours. Our vision at our specialist mental health services is 
                   to provide the highest possible level of care to the young people that reside at the home and to promote a relaxed 
                   and nurturing environment, at the same time encouraging the young people to develop the academic, practical and 
                   social skills needed to thrive and develop from a young person into an adult. </li><br/>
                
                <li>We will strive to provide an environment that offers the optimum experiences for the young people to recover, and return as many as possible home or with the 
                   ability to live in a community setting. Our objective is to support young people via individual care packages to achieve 
                   the best possible outcomes in order to achieve their full potential, keeping them safe and free from harm. Ortu is committed 
                   to operate within strict legal and ethical guidelines, nurture employees and introduce measures to promote job satisfaction, 
                   at the same time ensuring that all the staff provide safe care that is young person focused. Our staff build on the 
                   relationships made with the young people and each care plan is adapted to the individual needs of each young person 
                   to ensure planned outcomes are achieved.</li>
              </ul>
            </p>

    </div>


        <div class=" sm:items-center sm:justify-center mx-6 mt-10">
            

                <div class="sm:flex sm:items-center mx-1 md:mx-6 mt-5">
                <span class="text-black text-2xl lg:text-3xl font-bold underline decoration-pinktheme ">Residential provision 16+ - provision<br/><br/></span>
                
                </div>

                <p class=" text-base md:text-1xl font-normal mx-1 md:mx-6 px-4">
                  <ul class="list-disc ml-2 md:ml-6">
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
        

        <div class=" sm:items-center sm:justify-center mx-1 md:mx-6 mt-10 md:pr-8">
            

                <div class="sm:flex sm:items-center  mx-1 md:mx-6 mt-5">
                <span class="text-black text-2xl lg:text-3xl font-bold underline decoration-pinktheme ">Careers vocational<br/><br/></span>
                
                </div>

                <p class=" text-1xl font-normal ">
                Offers an exciting vocational curriculum including BTEC (Edexcel/Pearson), ASDAN and ABC qualifications.</p>
                <p class=" text-base md:text-1xl font-normal mx-1 md:mx-6 ">
                  <ul class="list-disc ml-2 md:ml-6">
                    <li>Engineering</li>
                    <li>Sport</li>
                    <li>Youth Work</li>
                    <li>Hospitality</li>
                    <li>Health and Social Care</li>
                    <li>Business</li>
                    <li>Music</li>
                  </ul>
                
                </p><br/>

                <p class=" text-1xl font-normal  ">
                  Career Zone qualifications are suitable for those wishing to go from school directly into employment or apprenticeships but are also accepted 
                  by the vast majority of universities for a variety of vocationally based courses.<br/><br/>

                  In most cases, students choosing a Career Zone subject would be expected to have passed a level 2 qualification in that subject with a grade M.<br/><br/>

                  <span class="text-black text-1xl font-bold  ">1. Careers Guidance<br/></span>
                  Employability and Career development are important parts of being an Ortu Specialised Home student.<br/><br/>

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

                   <p class=" text-base md:text-1xl font-normal mx-1 md:mx-6 ">
                  <ul class="list-disc ml-2 md:ml-6">
                   <li> Day release to attend school</li>
                   <li>Block release at school</li>
                  </ul>
                   
                  </p>
                  <br/>The levels are:<br/>
                  <p class=" text-base md:text-1xl font-normal mx-1 md:mx-6 ">
                  <ul class="list-disc ml-2 md:ml-6">
                    <li>Intermediate apprenticeship Level 2 – equal to five GCSEs at grade 4/C</li>
                    <li>Advanced apprenticeship Level 3 – equal to A-levels</li>
                    <li>Independence</li>
                  </ul>
                  </p>
                </p>

        </div>

        <div class=" sm:items-center sm:justify-center mx-1 md:mx-6 mt-10 md:pr-8">    
          <div class="sm:flex sm:items-center mx-1 md:mx-6 mt-5">
            <span class="text-black text-2xl md:text-3xl font-bold underline decoration-pinktheme ">Our Care Programme<br/><br/></span>
          
          </div>

          <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center mx-1  md:mx-8 mt-2">

                <IconContext.Provider value={{ color: 'white', size: '50px', padding:'5px 2px' }}>
                    <div class="max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-5 mt-5 mb-5">
                       <FaSchool class="sm:items-center sm:justify-center  mx-3 md:mx-6 my-6"/>
                    </div>
                  </IconContext.Provider>
                  <div class="  sm:items-center sm:justify-center mx-1 md:mx-6 mt-1">
                    <p class=" text-1xl font-normal">
                    <div><span class="text-black text-2xl font-bold">Secure Based Model</span></div>
                    Sensitivity - Managing Feelings,  Acceptance - Self-Esteem,  Co-operation - Feeling Effective, 
                     Family Membership - Belonging,  Availability - Trust.
                    </p>
                  </div>
          </div>
          <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center mx-1  md:mx-8 mt-1">

                <IconContext.Provider value={{ color: 'white', size: '50px', padding:'5px 2px' }}>
                    <div class=" max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-5 mt-5 mb-5">
                       <FaHandshakeAngle class="sm:items-center sm:justify-center  mx-3 md:mx-6 my-6"/>
                    </div>
                  </IconContext.Provider>
                  <div class="  sm:items-center sm:justify-center mx-1 md:mx-6 mt-1">
                    <p class=" text-1xl font-normal">
                    <div><span class="text-black text-2xl font-bold">Trauma Informed Practice</span></div>
                    Safety-feeling physically and psychologically safe.
                    </p>
                  </div>
          </div>

          <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center mx-1 md:mx-8 mt-1">

                <IconContext.Provider value={{ color: 'white', size: '50px', padding:'5px 2px' }}>
                    <div class=" max-w-fit sm:items-center sm:justify-center bg-pinktheme mx-5 mt-5 mb-5">
                       <FaStreetView class="sm:items-center sm:justify-center mx-1 md:mx-6 my-6"/>
                    </div>
                  </IconContext.Provider>
                  <div class=" max-w-fit sm:items-center sm:justify-center mx-1 md:mx-6 mt-1">
                    <p class=" text-1xl font-normal">
                    <div><span class="text-black text-2xl font-bold">PACE</span></div>
                    Playfulness, Acceptance, Curiosity, Empathy.
                    </p>
                  </div>
          </div>

          

          <div class="max-w-fit sm:82 rounded-lg sm:flex sm:items-center sm:justify-center bg-slate-200 mx-1 md:mx-6 mt-8">

              
                <p class="text-base md:text-2xl font-light font-serif">
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