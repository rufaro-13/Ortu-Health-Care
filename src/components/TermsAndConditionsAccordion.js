import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div className="w-[90%] max-w-[100%] mx-auto">

      {/* item 1 */}
      <div className="border rounded mb-2">
        <button
          className="w-full text-left p-4 focus:outline-none"
          onClick={() => toggleAccordion(0)}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Copyright</span>
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
            <p><span className='font-bold'>Notice:</span> Except where otherwise stated, copyright of all material resides with Ortu.
                 No material may be altered to any degree and no one is permitted to copy, broadcast, 
                 download, store (in any medium), transmit, show or play in public, any content of the Ortu 
                 website without Ortu’s prior written consent.
                At times Ortu may take photographs to be used for internal and external purposes.
                If you wish for your image not to be used you must make the photographer aware of this at the time.</p><br/>

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
            <span className="text-lg font-medium">Automated collection of personal information</span>
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
            <p>As with most other web servers, when you access these web pages certain information you provide will
                 automatically be recorded by the Institute. This will include your IP address, browser type, and 
                 information relating to the page you last visited. This information is needed to estimate how much usage of the server is made by different categories of users and in the event of a breach of security may be used to aid detection.
                </p><br></br>
                <p>Your data is only used to administer your enquiry or applications and your data will be passed on 
                    to the appropriate department for this purpose, after this time our system will automatically hard
                    delete your stored information within six months that you have submitted via our website 
                    <Link to="#" className='text-blue-600'>(https://ortuhome.com)</Link>.
                 </p><br></br>
                <p>If you wish to contact us before the six months automated deletion, please contact us via  
                <a href="mailto:info@ortuhome.com " class="hover:underline text-blue-600"> info@ortuhome.com </a>and request the deletion of your data that’s currently held on our website at 
                    <Link to="#" className='text-blue-600'>(https://ortuhome.com)</Link>.</p><br/>
                    
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
            <span className="text-lg font-medium">Non-automated collection</span>
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
            <p>Where you are required under this website to provide personal data this data will be used for the following purposes:
                </p><br></br>
                <p>Maintaining up-to-date lists of current news – all information is for reference and internal
                     marketing purposes and is not shared with third parties.
                 </p><br></br>
                
                    
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
            <span className="text-lg font-medium">Search Engine</span>
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
            <p>The search engine on our website is designed to be as powerful and easy to use as the popular search 
                engine google. The search is made possible by a piece of hardware (a search ‘appliance’) supplied 
                by google that is plugged into our server and continuously indexes the content on our site.
                 All search requests are handled by the appliance and the information is not passed on to any third
                  party, including google.
                </p><br></br>                   
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
            <span className="text-lg font-medium">Advertising Banners and Links to other websites</span>
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
            <p>Banner ads on the Ortu website may be advertising third party services and you may be directed to
                 servers belonging to the third party. Users are encouraged to review the privacy statement of each
                  linked site before sharing personal information. Inclusion of the other sites by links does not 
                imply any endorsement of the material or information on the other sites.
                </p><br></br>                   
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
            <span className="text-lg font-medium">Security of communications</span>
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
            <p>We recognise that many people are concerned about the privacy and protection of information as it is transmitted over the Internet. You should keep in mind that the possibility exists for unauthorised individuals to intercept any e-mail message you send over the Internet. In some cases, information can be encrypted (scrambled or encoded) to make it very difficult to read if it is intercepted during communication.
            </p><br></br>
            <p>Certain technology and practices allow websites to provide an increased level of security for your personal
                information when appropriate. We are not responsible for the privacy of e-mail messages except those stored 
            in our system.
            </p><br></br>

            <p>We use the following practices on our website to enhance the level of security for communication
                and the transmission of personal information:
            </p><br></br>

            <p>We have taken reasonable steps to ensure the integrity and confidentiality of personally identifiable
                 information that you may provide.
            </p><br></br>

            <p>We use e-mail forms to allow our customers to ask questions about our services and programmes.
                 The possibility exists that unauthorised individuals may intercept email messages.
            </p><br></br>

            <p>We have appropriate security measures in place in our physical facilities to protect against the
                 loss, misuse, or alteration of information that we have collected from you at our site.
            </p><br></br>                   
          </div>
        )}
      </div>

        {/* item 7 */}
 <div className="border rounded mb-2">
        <button
          className="w-full text-left p-4 focus:outline-none"
          onClick={() => toggleAccordion(6)}
        >
          <div className="flex justify-between items-center">
            <span className="text-lg font-medium">Offensive or inappropriate content on the Ortu website</span>
            <span className="transform transition-transform">
              {activeIndex === 6 ? (
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
        {activeIndex === 6 && (
          <div className="p-4">
            <p>If you post or send offensive, inappropriate or objectionable content anywhere on or 
                to *.ortuhome.com, the Ortu may use your personal information to stop such behaviour.
                 Where Ortu reasonably believes that you are or may be in breach of any of the laws of England 
                 or Wales (e.g. because content you have posted may be defamatory), Ortu may use your personal 
                 information to inform relevant third parties such as your employer, school e-mail/Internet
                provider or law enforcement agencies about the content and your behaviour.
            </p><br></br>                  
          </div>
        )}
      </div>

    </div>
  )
}
function TermsAndConditionsAccordion() {
      return (
        <div><Accordion/></div>
      ) 
}

export default TermsAndConditionsAccordion