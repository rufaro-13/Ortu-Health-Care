import React from 'react'
import { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="w-full max-w-[100%] mx-auto">

      {/* item 1 */}
      <div className="border rounded mb-2">
        <button
          className="w-full text-left p-4 focus:outline-none"
          onClick={() => toggleAccordion(0)}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Route 1</span>
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
            <p>Aimed at students and young person with narrow interests and experiences.
                Students on this STEP UP ROUTE learn about:</p><br/>

                <ul className='list-disc pl-8'>
                      <li>Personal care.</li>
                      <li>Social skills.</li>
                      <li>Wellbeing and self-care.</li>
                      <li>Cooking and shopping.</li>
                      <li>Domestic skills.</li>
                      <li>Road safety and personal safety.</li>
                      <li>Community integration.</li>
                      <li>E-safety and personal security.</li>
                      <li>Numeracy and Literacy.</li>
                </ul><br></br>

                <p>By the time our Personal Development students finish the course, they will be equipped with
                   coping strategies, a range of interests and improved communication skills, along with increased
                    independence.</p>
          </div>
        )}
      </div>

{/* item 2 */}
      <div className="border rounded mb-2">
        <button
          className="w-full text-left p-4 focus:outline-none"
          onClick={() => toggleAccordion(1)}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Route 2</span>
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
            <p>Aimed at students and young person who want to be more independent in their lives, but lack the practical, living and work skills needed to progress.
Students on this STEP UP ROUTE learn about:</p><br/>

                <ul className='list-disc pl-8'>
                      <li>Domestic skills including cooking, cleaning and budgeting.</li>
                      <li>Employability and career opportunities.</li>
                      <li>Social and communication skills.</li>
                      <li>Community integration.</li>
                      <li>Domestic skills.</li>
                      <li>Making informed choices.</li>
                      <li>Community integration.</li>
                      <li>E-safety and personal security.</li>
                      <li>Numeracy and Literacy.</li>
                </ul><br></br>

                <p>By the time our Skills for Life & Work students finish the course, they will have greater independence in the community, leisure activities and daily life.</p>
          </div>
        )}
      </div>

{/* item 3 */}
      <div className="border rounded mb-2">
        <button
          className="w-full text-left p-4 focus:outline-none"
          onClick={() => toggleAccordion(2)}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Route 3</span>
            <span className="transform transition-transform">
              {activeIndex === 2 ? (
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
            <p>This pathway is designed for young people with learning and communication difficulties who have work aspirations and are committed to achieving future goals. They have worked towards qualifications in Functional Skills, and are able to manage anxieties through coping skills.
            Students on this STEP UP ROUTE learn about:
              </p><br/>

                <ul className='list-disc pl-8'>
                      <li>Employability skills including job search, writing CVs and preparing for interviews.</li>
                      <li>Transferable work skills through vocational experiences.</li>
                      <li>Professional social interactions and communication.</li>
                      <li>Social and communication skills.</li>
                      <li>Maths and English qualifications.</li>
                      <li>Making informed choices.</li>
                      <li>Community integration.</li>
                      <li>E-safety and personal security.</li>
                      <li>Using public transport independently.</li>
                      <li>Budgeting and money-handling.</li>
                      <li>Safeguarding and e-safety.</li>
                </ul><br></br>
          </div>
        )}
      </div>

      {/* item 4 */}
      <div className="border rounded mb-2">
        <button
          className="w-full text-left p-4 focus:outline-none"
          onClick={() => toggleAccordion(3)}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Catch up</span>
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
        {activeIndex === 3 && (
          <div className="p-4">
            <p>This programme is designed for our students who wish to retake their core subjects or gain these 
              (GCSE or Functional skills in Maths, English and Science).</p><br/>
          </div>
        )}
      </div>

     {/* item 5 */}
     <div className="border rounded mb-2">
        <button
          className="w-full text-left p-4 focus:outline-none"
          onClick={() => toggleAccordion(4)}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Enrichment</span>
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
        {activeIndex === 4 && (
          <div className="p-4">
            <p>The young people are encouraged to take part in a range of enrichment activities within the KS5 programme and the lower key stages. Enrichment that students in KS5 from will be expected to take part in includes:</p><br/>

            <ul className='list-disc pl-8'>
                      <li>Use of public transport.</li>
                      <li>Gardening.</li>
                      <li>Arts and crafts.</li>
                      <li>Peer mentoring.</li>
                      <li>College and University trips/open days.</li>
                      <li>Bowling.</li>
                      <li>Christmas Meal.</li>
                      <li>Ice Skating.</li>
                      <li>British heritage trips</li>
                      <li>Cake Baking</li>
                      <li>Cooking.</li>
                </ul><br></br>
          </div>
        )}
      </div>

 {/* item 6 */}
 <div className="border rounded mb-2">
        <button
          className="w-full text-left p-4 focus:outline-none"
          onClick={() => toggleAccordion(5)}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Consultancy Provision</span>
            <span className="transform transition-transform">
              {activeIndex === 5 ? (
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
        {activeIndex === 5 && (
          <div className="p-4">
            <p  className='font-semibold'>EDUCATION</p><br></br>
            <p>Providing school training and support in setting up their own inclusion provision.</p><br/>
            <p>Providing continuous termly CPD to external staff/agencies/schools.</p>
            <ul className='list-disc pl-8'>
                      <li>ELSA</li>
                      <li>NURTURE</li>
                      <li>SMHE</li>
                      <li>BOXALL</li>
                      <li>ASSESSMENTS</li>
            </ul><br></br>

            <p  className='font-semibold'>RESIDENTIAL</p><br></br>
            <p>Providing training, support and skill-sharing best practice.</p>
            <ul className='list-disc pl-8'>
                      <li>Behaviour approach</li>
                      <li>De-escalation</li>
                      <li>Emotional literacy</li>
                      <li>BOXALL</li>
                      <li>Skills and independence</li>
            </ul><br></br>
          </div>
        )}
      </div>

    </div>
  );
};

const IndependenceSkillsRoutes = () => {
  return (
    <div>
      <Accordion />
      </div>
  );
};

export default IndependenceSkillsRoutes;
