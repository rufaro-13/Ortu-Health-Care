
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
            <span className="text-lg font-medium">KS3 Curriculum </span>
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
            <p className='font-italic'>Through the curriculum we aim for pupils to : </p><br></br>
            <ol style={{ listStyleType: "numbers" }} className=' pl-8'>
                <li>Help pupils reach their personal and academic potential;</li>
                <li>Have a strong sense of responsibility, self-regulation and coping strategies.</li>
                <li>Develop skills to become a ‘good citizen’</li>
                <li>Re-engage the pupil with learning and school.</li>
                <li>Encourage the pupils to be inquisitive about their world and eager to keep on learning;</li>
                <li>Help pupils respect each other as individuals, having a tolerance and empathy for other people’s cultures, religions and points of view; Helps to 
                    ensure that they are confident in their relations with other people and able to make positive contributions – they are caring and active citizens;</li>
                <li>Make sure pupils  are happy and safe by nurturing their self-esteem and confidence;</li>
                <li>Help the pupils learn that it is possible for everyone to learn and for the teacher to teach</li>
                <li>Encourage pupils to treat each other with courtesy and consideration;</li>
                <li>Ensure that the Pupil Referral Unit is a “bully-free” environment;</li>
                <li>Always speak politely;</li>
                <li>Respect one another’s property.</li>
                <li>Help pupils fulfil their academic potential by re-engaging them in their learning;</li>
                <li>Ensure pupils know what they can do and what they need to learn next;</li>
                <li>Use different styles of teaching to ensure learning is always interesting, engaging and fun;</li>
                <li>Listen to the children and responding flexibly so those with specific needs can all work at an appropriate pace and to their potential;</li>
                <li>Encourage the pupils to ask questions</li>
                <li>Help the pupils to understand and adopt a healthy, physically active and environmentally friendly lifestyle.</li>
                <li>Help Pupils Recognise how to keep themselves safe, including when using mobile technology and social networking sites;</li>


            </ol><br></br>

            
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
            <span className="text-lg font-medium">Implementation</span>
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
              <table>
  <tr>
    <th>National Curriculum</th>
    <th>Hidden Curriculum</th>
    <th>Vocational Curriculum</th>
    <th>Tailored Curriculum</th>
  </tr>
  <tr>
    <td>
        <ul className='list-disc pl-8'>
            <li>Maths</li>
            <li>English</li>
            <li>Science</li>
            <li>PSHE </li>
            <li>MFL</li>
            <li>Humanities</li>
            <li>Food</li>
            <li>PE</li>
            <li>Art and Design</li>
            <li>RS</li>

        </ul>
    </td>
    <td>
    <ul className='list-disc pl-8'>
            <li>Behaviour For Learning</li>
            <li>Life skills</li>
            <li>Wilderness   </li>
            <li>LegoBuildtoexpress </li>
            
        </ul>
    </td>
    <td>
    <ul className='list-disc pl-8'>
            <li>ASDAN </li>
            <li>BTEC</li>
            
        </ul>
    </td>

    <td>
    <ul className='list-disc pl-8'>
            <li>FSKills Maths and English</li>
            
        </ul>

        <b>(Inclusive of Record of achievement)</b>
    </td>
  </tr>
  
</table><br></br>

            
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
            <span className="text-lg font-medium">Enhanced Curriculum </span>
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
            <p className='font-italic'>The curriculum at ……………………………. Long Term Provision aims to: </p><br></br>

            <ul className='list-disc pl-8'>
                <li>P – Personal and Relationship Development</li>
                <li>E – Enjoyment & Engagement of Education</li>
                <li>P – Personal Development and Relationships</li>

            </ul><br/><br/>

            <ol style={{ listStyleType: "numbers" }} className=' pl-8'>
                <li>Regulating Emotions &  De - Escalation</li> 
                <li>Mindfulness </li>
                <li>Critical Thinking </li>
                <li>Problem Solving </li>
                <li>Fixed v Growth Mindset </li>
                <li>Relationships and how they affect our lives </li> 
                <li>Bullying </li>
                <li>Teamwork and collaboration </li>
                <li>Negative Relationships & Positive Relationships  </li>
                <li>Peer Pressure & Sexual Relationships</li>
                <li>Resilience </li>
                <li>Stereo Types, Prejudice and Discrimination </li> 
                <li>Adolescent Mental Health</li>

            </ol><br></br>

            
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
            <span className="text-lg font-medium">Fixed objectives </span>
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
            
            <ol style={{ listStyleType: "numbers" }} className=' pl-8'>
                <li>Have a strong sense of responsibility, self-regulation and coping strategies.</li>
                <li>Develop skills to become a ‘good citizen’</li>
                <li>Re-engage the pupil with learning and school</li>
                <li>Encourage the pupils to be inquisitive about their world and eager to keep on learning;</li>
                <li>Help pupils respect each other as individuals, having a tolerance and empathy for other people’s cultures, religions and points of view; Helps to ensure that they are confident in their relations with other people and able to make positive contributions – they are caring and active citizens;</li>
                <li>Make sure pupils  are happy and safe by nurturing their self-esteem and confidence;</li>
                <li>Help the pupils learn that it is possible for everyone to learn and for the teacher to teach</li>
                <li>Encourage pupils to treat each other with courtesy and consideration;</li>
                <li>Ensure that the Pupil Referral Unit is a “bully-free” environment;</li>
                <li>Always speak politely;</li>
                <li>Respect one another’s property.</li>
                <li>Help pupils fulfil their academic potential by re-engaging them in their learning;</li>
                <li>Ensure pupils know what they can do and what they need to learn next;</li>
                <li>Use different styles of teaching to ensure learning is always interesting, engaging and fun;</li>
                <li>Listen to the children and responding flexibly so those with specific needs can all work at an appropriate pace and to their potential;</li>
                <li>Encourage the pupils to ask questions</li>
                <li>Help the pupils to understand and adopt a healthy, physically active and environmentally friendly lifestyle.</li>
                <li>Help Pupils Recognise how to keep themselves safe, including when using mobile technology and social networking sites;</li>

            </ol><br></br>

            
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
            <span className="text-lg font-medium">Personal Development </span>
            <span className="transform transition-transform">
              {activeIndex === 4 ? (
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
            <p className='font-italic'>TThese subjects develop Social and Emotional Skills, PLTS (Personal Learning and Thinking Skills), Behaviour Modification as well as other key learning skills –</p><br></br>
            <ul className='list-disc pl-8'>
                <li>B4L – what do the pupils need to achieve to reach their targets – weekly 1:1 sessions to discuss this</li>
                <li>Life Skills,</li>
                <li>Nurture,</li>
                <li>Social and Emotional Development</li>
                <li>Positive Mind</li>
                <li>Deeper Learning Days</li>
                <li>SMSC Days</li>

            </ul><br/><br/>
            <p>Staff will use their knowledge of the individual students and their group organisations to focus 
                specifically on different skills  (e.g. Vulnerable/Anxious students - focus may be on Independence,
                collaboration and engagement in activities whereas Groups which have predominantly behavioural issues
                may focus on Reflection, Problem Solving and Relationships with Adults) or the teacher may choose to
                focus on all of the skills.
            </p><br/><br/>

            <p>The skills which the pupils will develop are in:</p>
            <ul className='list-disc pl-8'>
                <li>Independence/Self Management Skills</li>
                <li>Practical Skill Development</li>
                <li>Collaboration</li>
                <li>Reflection in Learning</li>
                <li>Engagement in Activities</li>
                <li>Problem Solving</li>
                <li>Relationships with Adults/other Students</li>


            </ul><br/><br/>
            
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
            <span className="text-lg font-medium">Impact </span>
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
             
            <ul className='list-disc pl-8'>
                <li>Pupil Progress, Achievement and Attainment</li>
                <li>Development of Self Esteem and confidence</li>
                <li>Outstanding learning by all pupils</li>
                <li>Developing Strategies to Succeed</li>
                <li>Personal Development & Positive Relationships</li>
                <li>Re-engagement of  pupils in education</li>
                <li>Development of confidence of individuals who are able to live safe, healthy and fulfilling lives and develop both academically and personally</li>
                <li>Developing foundations for future learning</li>
                <li>Successful learners who enjoy learning; make good progress and achieve excellence.</li>
                <li>Developing responsible citizens who can make a positive contribution to society and re engage in mainstream or post 16 education</li>
                <li>Creating an aspirational students who believe in themselves, thus developing Self Esteem and Self Confidence.</li>
                <li>Teaching and Learning for all pupils takes into account individual needs and styles achievement culture, allowing everyone to experience success and raising standards of attainment.</li>

            </ul><br/><br/>
            <p>Pupils will also access an enrichment curriculum which will develop further Emotional and Social Skills;
            </p>
            <ul className='list-disc pl-8'>
                <li>Food</li>
                <li>Art</li>
                <li>Sport/Activity</li>
                <li>Life Skills </li>
                
            </ul><br/><br/>
            <p>Additionally pupils will have daily 1:1’s to look at Personal Development and set targets to help achieve</p><br/><br/>

            <p>All subjects will include a formative assessment to see how much the pupils know and at the end of 
                their placement they will complete another test to see how much they have learnt – summative assessment.
                <br/>Pupil will also be assessed on the following:
            </p>
            <ul className='list-disc pl-8'>
                <li>Spelling Age</li>
                <li>Reading Age</li>
                <li>Learning Style</li>
                <li>Cognitive Ability </li>
                <li>Holistic Development Profile to inform Target Setting</li>
                
            </ul><br/><br/>

            <p>Pupils will be able to state in Pupil Progress Meetings how they have addressed their personal issues, what 
                they can do to help themselves and what they need to do in the future to return to school.</p>



          </div>
        )}
      </div>
    </div>
  );
};

function KS3Curriculum() {
  return (
    <div>
        <Accordion/>
    </div>
  )
}

export default KS3Curriculum