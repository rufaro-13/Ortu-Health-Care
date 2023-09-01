/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import road from "../images/route.gif"
import schoolkids from "../images/schoolkids.mp4"
import learningdisabilities from "../images/learning_disabilities.png"
import socialsupport from "../images/social_support.png"
import mentalhealth from "../images/mental_health.png"
import carepathway from "../images/carepathway.jpg"
import IndependenceSkillsRoutes from '../components/IndependenceSkillsRoutes'
import InitialAssessment from '../components/InitialAssessment'
import KS2toKS4 from '../components/KS2toKS4'

function Education() {
  
  return (
    <div>
    <div class="md:container md:mr-16 md:ml-16 pt-2">
      <div class="sm:flex sm:items-center sm:justify-center mx-12 mt-0">
        <div>
    <div class="text-center font-semibold py-4 text-3xl">
    <p class="relative inline-block pb-3">
    Alternative provisions
        <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
    </p>
</div>

    <p className="mb-4 ">
    Alternative provisions do not, under legislation, have to follow the National Curriculum.
    </p>
    <p className="mb-4 ">
    “School Curriculum” and the National Curriculum”. The school curriculum comprises all learning and other experiences that each school plans for its pupils.
    </p>
    <p className="mb-4 ">
    The National Curriculum is an important element of the school curriculum”.  The “School Curriculum” should have as its foundation secure Curriculum Aims.
    </p>
    <p className="mb-4 ">
    In the past few years, Ortu Specialsed Home has been working on developing its own “School Curriculum”, establishing clear aims which in turn drive the teaching and learning. So whilst the National Curriculum may determine “What is to be taught” the school curriculum increasingly determines “How it is taught”
    </p>
    <p className="mb-4 ">
    The school’s curriculum planning seeks to create themes that will deliver the school’s aims alongside most aspects of the National Curriculum and Examination subjects.
    </p>
    </div>
  </div>


  <div class="text-center font-semibold py-4 text-3xl">
    <p class="relative inline-block pb-3">
        Independence
        <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
    </p>
</div>

<div className="flex lg:pr-96 sm:pr-16">
      <img src={road} alt="route icon" className="w-24 h-24"></img>
      <p>
        <span className='pb-8 font-bold text-xl'>ROUTE 1 for Independent skills</span> <br/>
        Aimed at students and young people with narrow interests and experiences. Click here to find out what we offer.
      </p>
</div><br/>

<div className="flex lg:pr-96 sm:pr-16">
      <img src={road} alt="route icon" className="w-24 h-24"></img>
      <p>
        <span className='pb-8 font-bold text-xl'>ROUTE 2 for Independent skills</span> <br/>
        Aimed at students and young people who want to be more independent in their lives, but lack the practical, living and work skills needed to progress.
      </p>
</div><br/>
<div className="flex lg:pr-96 sm:pr-16">
      <img src={road} alt="route icon" className="w-24 h-24"></img>
      <p>
        <span className='pb-8 font-bold text-xl'>ROUTE 3 for Independent skills</span> <br/>
        This pathway is designed for young people with learning and communication difficulties who have work aspirations and are committed to achieving future goals.
      </p>
</div>

</div>
<div className="flex items-center justify-center h-96 w-full bg-black overflow-hidden">
      <div className="relative w-full h-96 ">
        <video className="absolute top-0 left-0 w-full h-full object-cover opacity-20" autoPlay loop muted>
          <source src={schoolkids} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center text-white text-center">
          <div className="max-w-xl px-6">
            <p className="text-2xl mb-4 font font-semibold text-bluetheme">Personalised Learning & Personalised Inclusion</p>
            <p className="text-xl mb-4">Adapt the curriculum for individual learners according to their needs.</p>
            <p className="text-xl mb-4">Recognise pupils’ strengths, needs and interests and build on these to promote achievement and success.</p>
            <p className="text-xl">Identify our pupils’ needs through the Baseline Tests, Boxall Profile, school Observations and Assessments and plan and adapt provision and learning opportunities to meet these needs.</p>
          </div>
        </div>
      </div>
    </div>


    <div class="md:container md:mr-16 md:ml-16">
    <div class="sm:flex sm:items-center sm:justify-center mx-12">
      {/* special services */}
    <div>
    <div class="text-center font-semibold py-4 text-3xl">
          <p class="relative inline-block pb-3">
          Special services we offer
              <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
          </p>
    </div>
    <p className="mb-4 text-xl">
    We provide the below services in specialist residential homes, schools and colleges with specialist staff to
     support each setting. We offer a differentiated and integrated education and care model focusing on each young 
     person’s needs.
    </p>
    <div className="flex lg:pr-96 sm:pr-16 pt-4">
      <img src={learningdisabilities} alt="learning disabilities icon" className="w-24 h-24 text-bluetheme"></img>
      <p className='pl-4'>
        <span className='pb-8 font-bold text-xl'>Learning Disabilities</span> <br/>
        We support young people and young people with conditions such as Autism Spectrum Disorder, 
        Asperger Syndrome and other neurodevelopmental conditions, learning and communication difficulties.
      </p>
</div><br/>

<div className="flex lg:pr-96 sm:pr-16">
      <img src={socialsupport} alt="social support icon" className="w-24 h-24"></img>
      <p className='pl-4'>
        <span className='pb-8 font-bold text-xl'>Social, Emotional Mental Health (SEMH)</span> <br/>
        We provide education and residential care to young people with a range of complex conditions arising from 
        challenging social circumstances or traumatic experiences such as abuse, neglect or exploitation.
      </p>
</div><br/>
<div className="flex lg:pr-96 sm:pr-16">
      <img src={mentalhealth} alt="mental health icon" className="w-24 h-24"></img>
      <p className='pl-4'>
        <span className='pb-8 font-bold text-xl'>Mental Health</span> <br/>
        Helping and empowering young people with mental health needs and challenging behaviours to function in the
         community without ongoing support.
      </p>
</div>

{/* care pathway */}
<div className="min-h-[90%]  flex items-center justify-center pt-4 pb-6">
  <div className="flex flex-col w-full lg:w-[90%] overflow-hidden lg:flex-row">
    <div className="bg-gradient-to-br from-purple-600 to-purpletheme rounded-lg p-6 text-white lg:w-1/2">
      <h1 className="text-3xl font-semibold mb-4">Care Pathway</h1>
      <p className="mb-4">
        Through passion and experience we help to develop our young people’s academic and personal skills,
        using state-of-the-art environments and a modern person-centred approach.
      </p>
      <p className="mb-4">
        We actively deliver highly tailored care pathways that provide the confidence, enthusiasm and
        optimism needed for our children to tackle any challenge ahead of them and embrace a brighter future.
      </p>
      <p className="">
        Ortu Specialised Home is committed to empowering our residents and for this, we offer relevant transition
        pathways, and a multi-agency liaising service for our young people who are ready to move on from our services.
        We pride ourselves on providing transparency to all parties involved including a clear, proactive pathway programme
        so that the value and outcomes of our service are measurable at every stage of the journey.
      </p>
    </div>
    <div className="bg-blue-300 rounded-lg overflow-hidden lg:w-1/2">
      <img src={carepathway} alt="Residential Care" className="w-full h-full object-cover" />
    </div>
  </div>
</div>
{/* end care pathway */}

{/* Independence Skills Routes */}
<div class="text-center font-semibold pb-4 pt-0 text-3xl">
    <p class="relative inline-block pb-3">
        Independence Skills Routes
        <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
    </p>
</div>
<IndependenceSkillsRoutes/>

{/* Residential provision 16+ - provision */}
<div class="text-center font-semibold py-4 text-3xl">
    <p class="relative inline-block pb-3">
    Residential provision 16+ - provision
        <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
    </p>
</div>

  <ul className='list-disc pl-8'>
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


{/* SEMH/Education/Initial assessment provision */}
<div class="text-center font-semibold py-4 text-3xl">
    <p class="relative inline-block pb-3">
    SEMH/Education/Initial assessment provision
        <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
    </p>
</div>

<InitialAssessment/>

{/* KS2 TO KS4 - Intention and implementation of the curriculum */}
<div class="text-center font-semibold py-4 text-3xl">
    <p class="relative inline-block pb-3">
    KS2 TO KS4 - Intention and implementation of the curriculum
        <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
    </p>
</div>
<KS2toKS4/>

    </div>
    </div>
    </div>
</div>
  )
}

export default Education