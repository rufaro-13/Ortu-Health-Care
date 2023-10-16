import React, { useState } from 'react';
import  '../pages/table.css'

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
            <span className="text-lg font-medium">KS4 Curriculum </span>
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
            <p className='font-italic'>We aim for as many students as possible to gain 5 GCSE's/Equivalent 9-4/A*-C.</p><br></br>
            <p className='font-bold'>Year 1 (year10)</p>
            <ul className='list-disc pl-8'>
                <li>GCSE English</li>
                <li>Functional Skills Level 2</li>
                <li>Functional Skills Level 1</li>
                <li>GCSE Maths</li>
                <li>Edexcel Number & Measure/Algebra      Level 2</li>
                <li>Edexcel Number & Measure/Algebra      Level 1</li>
                <li>GCSE Art & Design</li>
                <li>PSE Level 1  & Level 2</li>
                <li>NCFE Employability Skills Level 2</li>
                <li>BTEC Science (Principles of Science Unit1)</li>
                <li>NCFE PLTS (Personal Learning & Thinking Skills) Level 1 / 2</li>
                <li>BTEC Home Cooking Skills and Level 2 Food Hygiene</li>
                <li>Cambridge Progression Sports Studies and Sports Leader Award and NCFE Employment in the Sports and Leisure Industry</li>
                <li>NCFE  Level 1/ 2 Occupational Skills (based on Work Based Learning)</li>
                <li>NCC Resources – Level 2 Qualifications – Food Hygiene,  Food and Nutrition, 
                    Drugs Awareness, Equality and Diversity, Mental Health Awareness and First Aid.</li>

            </ul><br></br>

            <p className='font-bold'>Year 2 (year11)</p>
            <ul className='list-disc pl-8'>
                <li>GCSE English Literature</li>
                <li>GCSE English</li>
                <li>Functional Skills Level 2/GCSE English</li>
                <li>GCSE Statistics</li>
                <li>GCSE Maths</li>
                <li>Edexcel Number & Measure/Algebra      Level 2 or GCSE</li>
                <li>NCFE Level 2 Craft or Personalised Learning</li>
                <li>NCFE Learning to Learn Level 2</li>
                <li>NCFE Job Search & Interviews Level 2</li>
                <li>BTEC Science (Principles of Science Unit2)  or GCSE Trilogy or GCSE Biology</li>
                <li>NCFE  Learning to Learn Level 1 / 2</li>
                <li>NCFE Level 1 / 2  Food Production & Cooking Skills or Hospitality</li>
                <li>NCFE Level 1 / 2 Award in Health and Fitness and Level 1 / 2 Nutrition and Health and Duke of Edinburgh</li>
                <li>NCFE  Level 1/ 2 Vocational Studies (based on Work Based Learning)  and Learning to Learn</li>
                <li>NCFE PLTS – Personal Learning and Thinking Skills</li>

            </ul><br></br>
            
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
            <span className="text-lg font-medium">Pathways</span>
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

            <p>Each pupils will follow an individual pathway in order to achieve the best possible outcomes for themselves for both now and in the future.  The pathway will be decided by the pupil, parents/carers and the teaching staff team.
                <br/><br/>The Pathways that pupils follow at Ortu specilaised Home school KS4 are as follows:
            </p>
              <table>
  <tr>
    <th>Pathway 1 (Classic)</th>
    <th>Pathway 2  (Combo)</th>
    <th>Pathway 3 4 (Therapeutic/ Nurture/Diploma)</th>
    <th>Pathway4 (Outreach) </th>
  </tr>
  <tr>
    <td>
         Academic and Alternative Qualifications.<br/><br/>
         <b>intent</b><br/>

         5+ GCSE’s/Equivalent 9 – 4 Btec<br/><br/>

        Core Curriculum GCSE’s/ Equivalent:<br/>

        <ul className='list-disc pl-8'>
            <li>English/English Literature (GCSE)</li>
            <li>Maths/Statistics (GCSE)</li>
            <li>Science (BTEC Unit 1 or Unit 2)</li>
            <li>Photography (GCSE)/Arts Award (Silver)</li>
            <li>PSE (Level 2)</li>
            <li>NCC Level 2 Qualifications</li>
            <li>ECDL/ICT</li>

        </ul><br/><br/>

        In addition, all pupils have PE/Activities and Nurture Time
        It is expected that these students will go on to Post 16 provisions 
        to complete Level 3 qualifications.<br/><br/>



        <b>Tailored Curriculum:</b><br/><br/>

Emphasis on Numeracy and literacy for KS3.<br/><br/>

In KS4 emphasis will be on Maths and English (AQAUA or Functional skills) with a link in curriculum 
which will enable the pupil to create a working record of achievement whilst being introduced to all 
the curriculum subjects.





    </td>
    <td>
            Vocational and Academic Curriculum.<br/><br/>
         <b>intent</b> <br/>

         5 GCSE 9-1<br/>
        Btec<br/>
        ASDAN<br/>
        Functional skills<br/><br/>

        Core Curriculum of GCSE’s or Equivalent:<br/>

        <ul className='list-disc pl-8'>
            <li>English (GCSE/Level 1 & 2 Functional Skills)</li>
            <li>Maths (GCSE/Level 1 & 2 Functional Skills)</li>
            <li>PSE (Level 1 & 2)</li>
            <li>NCC Level 2 Qualifications</li>
            <li>Option</li>
            <li>PWL – Preparation for Working Life</li>

        </ul><br/><br/>
        Options: -
        <ul className='list-disc pl-8'>
            <li>Science</li>
            <li>Photography</li>
            <li>BTEC Cooking</li>
            <li>CP Sport</li>

        </ul><br/><br/>
        In addition, all pupils have PE/Activities and Nurture Time
Pupils will have planned interventions to improve Literacy and Numeracy skills
Pupils will progress to post 16 provisions completing Level 2 or 3 Qualifications


    </td>
    <td>
        Vocational Placement, Academic and Vocational Qualifications <br/>
         <b>intent</b> <br/><br/><br/>

         Level 1&2 Qualifications<br/> 
GCSE's dependent on ability and plan <br/>  
ASDAN<br/>
AQAUA<br/><br/>

All pupils will have a personalised timetable and will be expected to complete an Alternative Education Placement for up to 2 days per week. 
These students may have additional needs in the form of a statement or other identified issues.<br/>
All students will follow a Core Curriculum of GCSE’s or Equivalents in :
<ul className='list-disc pl-8'>
            <li>English (Level 1)</li>
            <li>Maths (Level 1)</li>
            <li>Photography</li>
            <li>PSE</li>
            <li>PWL – Preparation for Working Life</li>
            <li>NCC Level 2</li>

        </ul><br/><br/>

        Every pupil will have a personalised timetable depending on their needs, abilities and skills<br/>
        Pupils will transition to Post 16 provisions or Apprenticeships                         

    </td>

    <td>
        1:1 Personalised/DRS Partnership<br/>
         <b>intent</b><br/><br/>

        Personalised to Pupil’s needs<br/>        
        AQAUA<br/>
        ASDAN<br/><br/><br/><br/><br/><br/>

        Year 11 Students - Every pupil will have an
 individualised timetable which will be the 
result of a collective partnership with the 
mainstream school to meet the individual
 needs of the Young person.<br/>
This pathway is for those students whose
 Emotional, Social and Mental Health may
 deteriorate so much so that they may be in
 danger of not completing Year 11 without
 additional support.




    </td>
  </tr>
  
</table><br></br>

            
          </div>
        )}
      </div>

            
    </div>
  );
};

function KS4Curriculum() {
  return (
    <Accordion/>
  )
}

export default KS4Curriculum