import React from 'react'
import { useState } from 'react';
import VacancesSection from '../components/VacancesSection';
import applform from '../vacancies/Application Form (2).docx'

function Vacances() {

    const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  return (
    <div class="md:container md:mr-16 md:ml-16 pt-24">

        <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-10">
            <span class="text-black text-3xl font-bold">Find your perfect job with one of our vacancies</span>
            
        </div>

        <div class=" sm:items-center sm:justify-center mx-8 mt-2 px-5">
            <p class="text-1xl">
            At Ortu Specialised Care, we aim to be one dedicated team that works together to ensure our young people have the best possible outcomes and life experiences. We recognise that to achieve this we need the most committed people to join us.<br/><br/>

            You will be part of a diverse and vibrant community of professionals who are outcomes focussed and operate with a strong team ethos.<br/><br/>

            Ortu offers regular training and support to all of its staff and will work closely with individuals to improve their professional career portfolios. <br/><br/>
            Our job descriptions are all written with the following four key points about Ortu in mind:<br/><br/>
            <span className=" font-bold">1. Our Vision</span><br/>
            For all people with a learning disability to live a life that makes sense to them.<br/><br/>

            <span className=" font-bold">2. Our Mission</span><br/>
            We will support a sense of wellbeing through a celebration of each person’s unique gifts, talents and contributions, the quality of our relationships and ensuring the
             promotion of real opportunities to connect with others.<br/><br/>

             <span className=" font-bold">3. Our purpose</span><br/>
             To achieve excellence in everything we do.
              Ortu’s “primary purpose” is to make a positive contribution to the lives of children and adults with disabilities. We make this contribution by ensuring that all our interactions are great, that our knowledge and skills represent excellence and that we support people to develop purposeful and warm relationships. Our “secondary purpose” is to have a positive influence in our local communities and on our sector by connecting well, nurturing partnerships and demonstrating best practice.<br/><br/>

              <span className=" font-bold">4. Our DNA</span><br/>
              Ortu has a particular way of working with people and because it is so important to all our activities we call it our ethos. It is a combination of our values and the way that we put those values into actions that is unique to Ortu. Through our Promises and Value Base, the promotion of Great Interactions and Person Centred Approaches, we aim to support every person to live a life that makes sense to them, with a level and style of support of their choosing.
            </p>
            <br/><br/>


            <div class=" sm:items-center sm:justify-center md:mr-16 md:ml-16 mt-2 px-5">

            <div class="text-center font-semibold py-4 text-3xl">
                  <p class="relative inline-block pb-3">
                  Vacances
                      <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
                  </p>
              </div>
            <p class="text-1xl">
            Please find below a search tool for finding current job vacancies we're recruiting for. 
Please be aware that due to the nature of our work, for some services we cannot publish the exact physical location on our careers site. 
These will be given a broader area location on the advert and will be displayed on the map at the centre of your search area with any regional roles that might be returning in your search as ''Regional and/or Non-Disclosable Location Vacancies'

If you can't find what you're looking for at this time but would like to send info your details and they will be in touch. 
 <a class="text-blue-700" href="mailto:info@ortuhome.com." >info@ortuhome.com.</a>
            </p>
            <br/>
           </div>

           <div class="">
           
            <VacancesSection/>
            <div class='text-center py-4'>
            <p  class="relative font-semibold inline-block pb-3">
              Please download an <a href={applform} class="text-blue-700 hover:underline" download="Application form">application form</a> and send to info@ortuhome.com 
            </p></div>
           </div> 

       {/*      <div className="border rounded mb-2">
                <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => toggleAccordion(0)}
                >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Residential Support Worker – Young People</span>
            <span className="transform transition-transform">
              {activeIndex === 0 ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </span>
          </div>
        </button>
        {activeIndex === 0 && (
          <div className="p-4">
            <p> <span className="font-bold">Date Posted:</span> 25/11/22<br/>
                <span className="font-bold">Responsible to:</span> Registered Manager<br/>
                <span className="font-bold">Place of Work: </span>Oadby, Leicestershire<br/><br/>

                <span className="font-bold">Hours:</span> Part Time /Full time<br/><br/>
            </p>
                <span className=" font-bold">Main Purpose of Job</span>
            <p>

                <ul className='list-disc pl-8'>
                    <li>To be responsible to the Registered Manager for the day to day running 
                    of the home and for the delivery of the day to day care to young people.</li>
                    <li>To ensure that yourself and the team are maintaining their therapeutic approach 
                    and providing direct work with our young people.</li>
                    <li>To operate within the legal parameters as described in the companies’ policies and procedures.</li>
                    <li>To give support in the business and social development of the service.</li>
                    <li>To share responsibility in securing a positive company image.</li>

                </ul>
            </p>

            <br/><span className=" font-bold">Responsibilities</span><br/>
            <p>

                <ul className='list-disc pl-8'>
                    <li>Be part of a team of residential care staff when on shift, ensuring that safe and 
                    appropriate care practices are maintained at all times.</li>
                    <li>Support the manager in all aspects of the operational management of the establishment.</li>
                    <li>Ensure that the homes policies, procedures and principles are adhered to.</li>
                    <li>Provide safe, warm and supportive environment to our young people.</li>
                    <li>To be involved in the planning, organisation of the home.</li>
                    <li>Maintain a regular system of recording in connection with each young person.</li>
                    <li>To be involved in the implementation of care plans.</li>
                    <li>Assist in the provision of reports when required.</li>
                    <li>Ensure when on shift that care staff conduct themselves within the guide-lines of the 
                    establishment.</li>
                    <li>Co-ordinate the daily routine of the home.</li>
                    <li>To promote and maintain high standards of cleanliness.</li>
                    <li>Participate in the general activities of the establishment.</li>
                    <li>Use any personal skills, you may have to maximise opportunity for each resident.</li>
                    <li>Establish and develop outside contacts both individually and through various activities 
                    developed within and outside of the establishment.</li>
                    <li>Undertake delegated household duties.</li>
                    <li>Attend regular supervision sessions as required.</li>
                    <li>Attend team meetings and training sessions as required.</li>
                    <li>Accept responsibility for such money as may be required in the carrying out of necessary duties.</li>
                    <li>Undertake sleeping in duties as required.</li>
                    <li>Comply with the policies and procedures of the establishment.</li>
                    <li>Deal with telephone enquiries and undertake administrative duties as required e.g. 
                    logbooks, daily logs, incident forms, handovers etc.</li>
                    <li>Maintain case file records.</li>
                    <li>Any other duties as may be reasonably requested by the manager.</li>
                    <li>To foster and encourage, wherever appropriate contact between young people and their families.</li>
                    <li>To maintain good liaison and co-operate with external agencies e.g. social workers, consultant staff.</li>
                    <li>To develop a responsible attitude with residents with regard to the fabric, furnishings, equipment, supplies
                    and services in/out of the establishment.</li>
                    <li>To support young people in all domestic aspects of their personal space and the communal area 
                    </li>of the home.
                    <li>To demonstrate both sensitivity and appropriate assertiveness.</li>
                    <li>To work in a pressured environment with groups of diverse young people, staff and other 
                    professionals.</li>
                    <li>To carry out the duties of the post in a mature and responsible manner, seeking and receiving
                    support as necessary.</li>
                    <li>To physically intervene if a young person’s behaviour is dangerous to others or themselves. 
                    (When training has been completed).</li>
                    <li>To participate in the construction and implementation of care plans on individual young persons placed.</li>

                </ul>
            </p>

            <br/><span className=" font-bold">Responsibilities</span><br/>
            
            <p><br/>
                <ul className='list-disc pl-8'>
                    <li>Sleeping in/shift work, including evenings, bank holidays and weekends on a rota system.</li>
                </ul>
                <br/>
                This job description reflects the current requirements of the post. As duties and responsibilities
                 change and develop, the job description will be reviewed and be subject to amendment.<br/><br/>

                Ortu is committed to safeguarding and promoting the welfare of all young people and expects all staff 
                to share this commitment. The successful applicant will be subject to an Enhanced DBS check and references.<br/><br/>

                Ortu supports equal opportunities in Employment and opposes all forms of unlawful discrimination in grounds
                such as colour, race, nationality, ethnic or national origin, sex, marital status, disability, sexual
                orientation, religion or belief and age. You are expected to comply at all times to the companies Equal Opportunities Policy.<br/><br/>

                Please complete the online application form via the link below.<br/><br/>

                <span className=" font-bold">Please note we can not accept any applications unless you have completed  the application form.</span>

                <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
                <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Application Form</button>
                </div>
            </p>
          </div>
        )}
      </div>

      <div className="border rounded mb-2">
                <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => toggleAccordion(1)}
                >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Team Leader</span>
            <span className="transform transition-transform">
              {activeIndex === 1 ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </span>
          </div>
        </button>
        {activeIndex === 1 && (
          <div className="p-4">
            <p> <span className="font-bold">Date Posted:</span> 19/08/2023<br/>
                <span className="font-bold">Responsible to:</span> The Home Manager<br/>
                <span className="font-bold">Direct Line Manager:  </span> Deputy Manager / Home Manager <br/><br/>

                <span className="font-bold">Hours:</span> Part Time /Full time<br/><br/>
            </p>
                <span className=" font-bold">MAIN RESPONSIBILITES, TASKS & DUTIES </span><br/><br/>
            <p>
                <span className="text-sm font-bold">Leadership </span>
                <ul className='list-disc pl-8'>
                <li>To be responsible to the Registered Manager for the day to day running of 
                the home and for the delivery of the day to day care to young people.</li>
                <li>To ensure that yourself and the team are maintaining their therapeutic 
                approach and providing direct work with our young people.</li>
                <li>To operate within the legal parameters as described in the companies’ policies and procedures.</li>
                <li>To give support in the business and social development of the service.</li>
                <li>To share responsibility in securing a positive company image.</li>

                </ul>
            </p>

            
            <p>
                <span className="text-sm font-bold">Support  </span>
                <ul className='list-disc pl-8'>
                <li>Support people with regards to decision making and lifestyle choices enabling them to take 
                control of their own lives, increasing independence.</li> 
                <li>Ensure all personal care tasks are carried out in line with the needs, wishes and preferences
                 of the individual, following the care plan.</li> 
                <li>Support people to take an active role in the community by accessing local facilities and wider
                 community resources in the spirit of social inclusion.</li>
                <li>Ensure the security of the building and the safety of the people living in the home.</li> 
                <li>Support the development of person centred planning, ensuring each individual’s plan has
                 meaningful and achievable goals. </li>
                <li>Support people to develop and expand social networks and friendships. </li>
                <li>To support people through the transition process.</li> 
                <li>Work as a key-worker/ co key-worker to coordinate and develop the support to the individual
                 including Health Action Plans and Person Centred Plans.</li> 
                <li>Contribute to / attend reviews and multi disciplinary meetings.</li> 
                <li>Work with individuals to promote healthy life style by liaising with local health care
                 professionals. Work in partnership with care managers and other professionals to maximise 
                 quality of life for individuals.</li> 
                 <li>Develop positive relationships with family and carers.</li>
                 <li>Work in line with the company’s Adult and child Protection and Prevention of Abuse Policy 
                 and Whistle Blowing Policy to ensure that people are kept safe at all times.</li> 
                 <li>At all times to work within equal opportunities policy and procedure.</li> 
                 <li>Ensure risk assessments are actioned as necessary, in line with policies and procedures.</li> 
                 <li>To be flexible and responsive at all times to meet the changing needs of the service and the
                 service users. </li>
                 <li>Administer/ Prompt and Assist medication in line with the policy and the individual’s care 
                plans in the absence of the team leader. </li>
                <li>Organise and support service user holidays in line with the policy.</li>
 
                </ul>
                
            </p>

            <p>
                <span className="text-sm font-bold">Values and Attitudes  </span>
                <ul className='list-disc pl-8'>
                <li>Support individuals in a non-judgemental way based on the principals of anti-discriminatory practice.</li> 
                <li>To treat individuals with respect and encourage them to express their individuality.  </li>
                   

                </ul>
            </p>

            <p>
                <span className="text-sm font-bold">Performance and Development  </span>
                <ul className='list-disc pl-8'>
                <li>Maintain confidentiality.</li> 
                <li>Work within Home From Home Care’s policies and procedures.</li>
                <li>Work in a way that meets the statutory requirements of employees under health and safety at work.</li>
                <li>Adhere to Ortu house school’s Codes of Practice and staff handbook. </li>
                <li>At all times work within current legislation.</li>
                <li>Enter actively into supervision and appraisal. </li>
                <li>Attend training on a regular basis to ensure that all mandatory and personal training and development
                 needs are met in line with company requirements. </li>
                 <li>To work in accordance with the company’s mobile phone and IT policies.</li> 
                 <li>To behave in a manner that reflects positively on the company at all times.</li> 
                 <li>To work closely with other members of the team for the ultimate benefit of the people living in the home. </li>

                </ul>
            </p>

            <p>
                <span className="text-sm font-bold">Finance  </span>
                <ul className='list-disc pl-8'>
                <li>Support people to manage their resources and finances.</li> 
                <li>To ensure that you receive all receipts, change and any accompanying paperwork before 
                the end of the shift.</li> 
                <li>To give practical support to individuals in line with their care plan and policy.</li> 
                <li>Ensure Petty Cash and people’s monies are checked, balanced and recorded at the end of 
                your shift. Financial discrepancies must be reported to the manager immediately. </li>
                <li>To keep updated with all financial policy and procedures</li>


                </ul>
            </p>

            <p>
                <span className="text-sm font-bold">Administration  </span>
                <ul className='list-disc pl-8'>
                <li>You will be required to work flexibly on a rota basis to meet the needs of the service, this 
                includes weekends, bank holidays and sleep ins. </li>
                <li>Ensure work is recorded accurately and appropriately in compliance with the company 
                requirements and that records made and personal information used are in compliance with the 
                Data Protection Act and the standards of information governance.</li> 

                </ul>

            <span className="text-sm font-bold">NB</span> 
            This job description is not exhaustive and there may be times you will be required to undertake other duties in order to meet the needs of the people living in the home or the service.
                    <br/><br/>
            </p>

            <div>
            <table class="border-collapse border border-slate-500 border-gray-300 table-fixed">
                <thead>
                    <tr>
                    <th class="border border-slate-600 "></th>
                    <th class="border border-slate-600 "><span className="text-sm font-bold">Essential</span> (in order to be shortlisted for interview)</th>
                    <th class="border border-slate-600 "><span className="text-sm font-bold">Desirable</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-slate-700"><span className="text-sm font-bold">Qualifications</span></td>
                        <td class="border border-slate-700"></td>
                        <td class="border border-slate-700">
                            <ul className='list-disc pl-8'>
                                <li>NVQ 3</li></ul></td>
                    </tr>
                    <tr>
                        <td class="border border-slate-700"><span className="text-sm font-bold">Experience</span></td>
                        <td class="border border-slate-700">
                            <ul className='list-disc pl-8'>
                            <li>1 year's experience of working with vulnerable people</li>
                            <li>Experience of leading a shift</li>
                            </ul>
                        </td>
                        <td class="border border-slate-700">
                        <ul className='list-disc pl-8'>
                            <li>Experience of working with people with a learning disability</li>
                        </ul></td>
                    </tr>
                    <tr>
                        <td class="border border-slate-700"><span className="text-sm font-bold">Knowledge</span></td>
                        <td class="border border-slate-700">Understanding of:
                            <ul className='list-disc pl-8'>
                            <li>Equal Opportunities</li>
                            <li>Health and Safety</li>
                            <li>The needs of Adults with learning disabilities</li>
                            </ul>
                        </td>
                        <td class="border border-slate-700"><ul className='list-disc pl-8'>
                            <li>Current Legislation relating to Adults with Learning Disabilities</li>
                            <li>Person Centred Planning</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td class="border border-slate-700"><span className="text-sm font-bold">Skills/Qualities</span></td>
                        <td class="border border-slate-700"><ul className='list-disc pl-8'>
                            <li>Flexible</li>
                            <li>Literate and Numerate</li>
                            <li>Positive Disposition</li>
                            <li>Creative and Dynamic</li>
                            <li>Good communication skills</li>
                            </ul>

                        </td>
                        <td class="border border-slate-700">Home Based Skills e.g DIY, Cooking and Gardening
                        </td>
                    </tr>
                </tbody>
            </table>
​
            </div>

            
            
            <p><br/>
                
                <span className=" font-bold">Please note we can not accept any applications unless you have completed  the application form.</span>

                <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
                <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Application Form</button>
                </div>
            </p>
          </div>
        )}
      </div>

      <div className="border rounded mb-2">
                <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => toggleAccordion(2)}
                >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Deputy Manager-Children and Young People (CYP)</span>
            <span className="transform transition-transform">
              {activeIndex === 3 ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </span>
          </div>
        </button>
        {activeIndex === 2 && (
          <div className="p-4">
            <p> <span className="font-bold">Date Posted:</span> 25/11/22<br/>
                <span className="font-bold">Responsible to:</span> Registered Manager<br/>
                <span className="font-bold">Place of Work: </span>Oadby, Leicestershire<br/><br/>

                <span className="font-bold">Hours:</span> Part Time /Full time<br/><br/>
            </p>
                <span className=" font-bold">Main Purpose of Job</span>
            <p>

                <ul className='list-disc pl-8'>
                    <li>To support the Registered Manager in the day to day running of the children’s home, including deputising for them as and when required.</li>
                    <li>To assist the Registered Manager in the management and development of the homeand support staff to drive the delivery of an excellent quality
                       service for the people Ortu supports.</li>
                    <li>To operate within the legal parameters as described in the companies’ policies and procedures.</li>
                    <li>To give support in the business and social development of the service.</li>
                    <li>To share responsibility in securing a positive company image.</li>

                </ul>
            </p>

            
            <br/><span className=" font-bold">Responsibilities</span><br/>
            
            <p><br/>
                <ul className='list-disc pl-8'>
                    <li>Sleeping in/shift work, including evenings, bank holidays and weekends on a rota system.</li>
                </ul>
                <br/>
                This job description reflects the current requirements of the post. As duties and responsibilities
                 change and develop, the job description will be reviewed and be subject to amendment.<br/><br/>

                Ortu is committed to safeguarding and promoting the welfare of all young people and expects all staff 
                to share this commitment. The successful applicant will be subject to an Enhanced DBS check and references.<br/><br/>

                Ortu supports equal opportunities in Employment and opposes all forms of unlawful discrimination in grounds
                such as colour, race, nationality, ethnic or national origin, sex, marital status, disability, sexual
                orientation, religion or belief and age. You are expected to comply at all times to the companies Equal Opportunities Policy.<br/><br/>

                Please complete the online application form via the link below.<br/><br/>

                <span className=" font-bold">Please note we can not accept any applications unless you have completed  the application form.</span>

                <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
                <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Application Form</button>
                </div>
            </p>
          </div>
        )}
      </div>

      <div className="border rounded mb-2">
                <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => toggleAccordion(3)}
                >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Residential Support Worker – Young People</span>
            <span className="transform transition-transform">
              {activeIndex === 3 ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
            </span>
          </div>
        </button>
        {activeIndex === 3 && (
          <div className="p-4">
            <p> <span className="font-bold">Date Posted:</span> 25/11/22<br/>
                <span className="font-bold">Responsible to:</span> Registered Manager<br/>
                <span className="font-bold">Place of Work: </span>Oadby, Leicestershire<br/><br/>

                <span className="font-bold">Hours:</span> Part Time /Full time<br/><br/>
            </p>
                <span className=" font-bold">Main Purpose of Job</span>
            <p>

                <ul className='list-disc pl-8'>
                    <li>To be responsible to the Registered Manager for the day to day running 
                    of the home and for the delivery of the day to day care to young people.</li>
                    <li>To ensure that yourself and the team are maintaining their therapeutic approach 
                    and providing direct work with our young people.</li>
                    <li>To operate within the legal parameters as described in the companies’ policies and procedures.</li>
                    <li>To give support in the business and social development of the service.</li>
                    <li>To share responsibility in securing a positive company image.</li>

                </ul>
            </p>

            <br/><span className=" font-bold">Responsibilities</span><br/>
            <p>

                <ul className='list-disc pl-8'>
                    <li>Be part of a team of residential care staff when on shift, ensuring that safe and 
                    appropriate care practices are maintained at all times.</li>
                    <li>Support the manager in all aspects of the operational management of the establishment.</li>
                    <li>Ensure that the homes policies, procedures and principles are adhered to.</li>
                    <li>Provide safe, warm and supportive environment to our young people.</li>
                    <li>To be involved in the planning, organisation of the home.</li>
                    <li>Maintain a regular system of recording in connection with each young person.</li>
                    <li>To be involved in the implementation of care plans.</li>
                    <li>Assist in the provision of reports when required.</li>
                    <li>Ensure when on shift that care staff conduct themselves within the guide-lines of the 
                    establishment.</li>
                    <li>Co-ordinate the daily routine of the home.</li>
                    <li>To promote and maintain high standards of cleanliness.</li>
                    <li>Participate in the general activities of the establishment.</li>
                    <li>Use any personal skills, you may have to maximise opportunity for each resident.</li>
                    <li>Establish and develop outside contacts both individually and through various activities 
                    developed within and outside of the establishment.</li>
                    <li>Undertake delegated household duties.</li>
                    <li>Attend regular supervision sessions as required.</li>
                    <li>Attend team meetings and training sessions as required.</li>
                    <li>Accept responsibility for such money as may be required in the carrying out of necessary duties.</li>
                    <li>Undertake sleeping in duties as required.</li>
                    <li>Comply with the policies and procedures of the establishment.</li>
                    <li>Deal with telephone enquiries and undertake administrative duties as required e.g. 
                    logbooks, daily logs, incident forms, handovers etc.</li>
                    <li>Maintain case file records.</li>
                    <li>Any other duties as may be reasonably requested by the manager.</li>
                    <li>To foster and encourage, wherever appropriate contact between young people and their families.</li>
                    <li>To maintain good liaison and co-operate with external agencies e.g. social workers, consultant staff.</li>
                    <li>To develop a responsible attitude with residents with regard to the fabric, furnishings, equipment, supplies
                    and services in/out of the establishment.</li>
                    <li>To support young people in all domestic aspects of their personal space and the communal area 
                    </li>of the home.
                    <li>To demonstrate both sensitivity and appropriate assertiveness.</li>
                    <li>To work in a pressured environment with groups of diverse young people, staff and other 
                    professionals.</li>
                    <li>To carry out the duties of the post in a mature and responsible manner, seeking and receiving
                    support as necessary.</li>
                    <li>To physically intervene if a young person’s behaviour is dangerous to others or themselves. 
                    (When training has been completed).</li>
                    <li>To participate in the construction and implementation of care plans on individual young persons placed.</li>

                </ul>
            </p>

            <br/><span className=" font-bold">Responsibilities</span><br/>
            
            <p><br/>
                <ul className='list-disc pl-8'>
                    <li>Sleeping in/shift work, including evenings, bank holidays and weekends on a rota system.</li>
                </ul>
                <br/>
                This job description reflects the current requirements of the post. As duties and responsibilities
                 change and develop, the job description will be reviewed and be subject to amendment.<br/><br/>

                Ortu is committed to safeguarding and promoting the welfare of all young people and expects all staff 
                to share this commitment. The successful applicant will be subject to an Enhanced DBS check and references.<br/><br/>

                Ortu supports equal opportunities in Employment and opposes all forms of unlawful discrimination in grounds
                such as colour, race, nationality, ethnic or national origin, sex, marital status, disability, sexual
                orientation, religion or belief and age. You are expected to comply at all times to the companies Equal Opportunities Policy.<br/><br/>

                Please complete the online application form via the link below.<br/><br/>

                <span className=" font-bold">Please note we can not accept any applications unless you have completed  the application form.</span>

                <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
                <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 
                hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 
                font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Application Form</button>
                </div>
            </p>
          </div>
        )}
      </div> */}


        </div>

    </div>
  )
}

export default Vacances