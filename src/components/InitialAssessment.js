import React, { useState } from 'react';

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
            <span className="text-lg font-medium">Arrival</span>
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
            <p className='font-semibold'>SEMH Assessment </p><br></br>
            <ul className='list-disc pl-8'>
                <li>SDQ</li>
                <li>FENHAM EQ</li>
            </ul><br></br>

            <p className='font-semibold'>Education Assessment  </p><br></br>
            <ul className='list-disc pl-8'>
                <li>WRAT5</li>
            </ul><br></br>

            <p className='font-semibold'>Initial Assessment   </p><br></br>
            <ul className='list-disc pl-8'>
                <li>Reading</li>
                <li>Phonics</li>
                <li>Numeracy</li>
            </ul>
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
            <span className="text-lg font-medium">Mid Term</span>
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
              <p className='font-semibold'>SEMH Assessment </p><br></br>
            <ul className='list-disc pl-8'>
                <li>BOXALL</li>
                <li>SCERT</li>
                <li>Social Skills</li>
                <li>CAT4 – Automatic through scale</li>
            </ul><br></br>

            <p className='font-semibold'>Education Assessment  </p><br></br>
            <ul className='list-disc pl-8'>
                <li>Cognition</li>
                <li>Dyslexia/Numerex/Dysprax</li>
                <li>Maths</li>
                <li>English</li>
                <li>Science</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

const InitialAssessment = () => {
  return (
    
      <Accordion />
  );
};

export default InitialAssessment;
