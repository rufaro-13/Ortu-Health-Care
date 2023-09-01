import React, { useRef} from 'react';
import emailjs from '@emailjs/browser';

import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaEnvelopeOpenText, FaMobileScreenButton,  } from 'react-icons/fa6';

function Contacts() {

   /*  const [formState,setFormState] =useState({});
   
    const config={
        Host : "smtp.elasticemail.com",
        Username : "rufarochiuta@gmail.com",
        Password : "2C0EBE7DF696B4E70A28CEB87D3F3E4E2952",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }

    const changeHandler =(event)=>{
        setFormState({...formState,[event.target.name]:event.target.value});
    } */
        
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b2hb07s', 'template_cijzcy4', form.current, 'ZAfncGVBcE90Kox10')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
    
    return (
    <div class="container mx-auto md:mr-16 md:ml-16 pt-2 overflow-hidden">

        <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-">
            <span class="text-black text-2xl md:text-3xl font-bold underline decoration-bluetheme ">Contacting Ortu Specialised Home<br/><br/></span>
                
        </div>

        <div class="sm:flex sm:items-center sm:justify-center mx-8 mt-2 px-5">
            <p class="text-1xl">
                If you wish to contact OSH please use the form on this page or send an email to the email address below.<br/><br/>

                If it is urgent or you would prefer to talk to a person please use the telephone number listed below.
            </p>
            <br/>
            
        </div>

        <center>
        <div class="max-w-full sm:82 rounded-lg md:flex items-center sm:items-center sm:justify-center   mx-8 mt-1">

            <div class="max-w-full  sm:82 rounded-lg   sm:items-center sm:justify-center    mt-8">

                <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                    <div class="  sm:items-center sm:justify-center  mx-5 mt-5 mb-5">
                       <FaEnvelopeOpenText class="sm:items-center sm:justify-center mx-6 my-6"/>
                    </div>
                  </IconContext.Provider>
                  <div class="  sm:items-center sm:justify-center  mt-1">
                    <p class=" text-1xl font-normal">
                    <div><span class="text-black text-2xl font-bold"><a href="mailto:info@ortuhome.com" className="block py-2 pl-3 pr-4 underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Email Us</a></span></div>
                    info@ortuhome.com
                    </p>
                  </div>
            </div>

            <div class="max-w-full  sm:82 rounded-lg  sm:items-center sm:justify-center  md:ml-48 mt-8">

                  <IconContext.Provider value={{ color: '#231f32', size: '50px', padding:'5px 2px' }}>
                    <a href="tel:0116 221 3539"><div class="  sm:items-center sm:justify-center   mt-5 mb-5">
                       <FaMobileScreenButton class="sm:items-center sm:justify-center  my-6"/>
                    </div></a>
                  </IconContext.Provider>
                  <div class="  sm:items-center sm:justify-center   mt-1">
                    <p class=" text-1xl font-normal">
                    <div><span class="text-black text-2xl font-bold"><a href="tel:0116 221 3539" 
                    className="block py-2  underline text-navcolour rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-navcolour dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Call Us</a></span></div>
                    0116 221 3539
                    </p>
                  </div>

            </div>
        </div>

        </center>
        <div class="sm:flex sm:items-center sm:justify-center mx-6 mt-5">
            <span class="text-black text-2xl md:text-3xl font-bold underline decoration-bluetheme ">Our online contact form<br/><br/></span>
                
        </div>

        <div class="sm:flex sm:items-center sm:justify-center mx-8 mt-2 px-5">
            <p class="text-1xl">
            Please use our online contact form to contact our Ortu team and we will contact you back as soon as possible.
            </p>
            <br/>
            
        </div>


        <div  class="md:w-full  sm:82 rounded-lg  sm:items-center justify-center  mx-4 mt-8">
            
            <form class=" md:px-60 " ref={form} onSubmit={sendEmail}>
                
                <div class="mb-6 ">
                    <label for="name" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-black">Full Name <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                    <input type="text" name="user_name" id="name" size="60" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] lg:w-1/2 py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="example: John Smith" required/>
                </div>
                       
                <div class="mb-6">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Email <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                    <input type="email"name="user_email" id="email"size="60" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] lg:w-1/2 py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example: name@email.com" required/>
                </div> 
                <div class="mb-6 ml-0">
                    <label for="subject" class="ml-0 block mb-2 text-sm font-medium text-gray-900 dark:text-black">Subject <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                    <input type="text" name="subject" id="subject" size="60" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[95%] lg:w-1/2 py-2.5 px-0 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required/>
                </div>

                <div class="mb-6">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Messsage <span class="text-red text-1xl italic font-normal">(Required)</span></label>
                    <textarea id="message" name="message"rows="5" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full lg:w-1/2 p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required/>
                </div>

                <div class="mb-6 sm:w-full lg:w-full md-w-full">
                    <p>
                    <span class=" text-1xl font-semibold">Terms & Conditions<span class="text-red text-1xl italic font-normal">(Required)</span><br/></span>
                    I agree to the Terms & Conditions and understand that ortuhome.com has a legitimate interest to process the data that I have submitted.<Link
                    to="/terms_and_conditions"className=" underline text-blue-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    > See our Terms and Conditions and Privacy Policy </Link>for more information.
                    This site is protected by reCAPTCHA and the Google <a class="text-blue-700"href="https://policies.google.com/privacy">Privacy Policy </a>and <a class="text-blue-700" href="https://policies.google.com/terms">Terms of Service</a> apply.
                    
                    </p>
                </div>
                    <div class="max-w-full sm:82 rounded-lg sm:flex flex mx-6 mb-6">
                        <div class="ml-5 flex items-center h-5">
                        <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required/>
                        </div>
                        <label for="terms" class="ml-2 text-sm font-medium text-gray-900 dark:black">Yes I agree to the terms, conditions and privacy & cookie policy</label>
                    </div>
                    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
                    focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 
                    dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                
            </form>
            
        </div>


    </div>
  )
}

export default Contacts