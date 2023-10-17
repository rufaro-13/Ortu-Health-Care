import React from 'react'
import{Link}  from "react-router-dom";
function KS2toKS4() {
  return (
<div>
    <div className="min-h-[100%] min-w-full flex items-center justify-center">
    <div className="flex flex-col sm:flex-row w-[100%] max-w-3xl mx-auto space-y-6 sm:space-y-0 sm:space-x-6">

    <div className=" w-[100%] p-4 rounded-lg shadow-md">
    <p class="relative inline-block pb-3 font-semibold">
        Key Stage 3
        <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
    </p>
      <p className="mt-4 mb-4">Find out more about our Key Stage 3 Curriculum and our aims for each pupil.</p>
      <Link to='/ks3'>
        <button className="bg-bluetheme text-black px-3 py-2 rounded-md hover:bg-pinktheme">OUR KS3 INFO</button></Link>
    </div>


    <div className="w-full p-4 rounded-lg shadow-md">
    <p class="relative inline-block pb-3 font-semibold">
        Key Stage 4
        <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
    </p>
      <p className="mt-4 mb-4">Find out more about our Key Stage 4 Curriculum and our aims for each pupil.</p>
      <Link to='/ks4'><button className="bg-bluetheme text-black px-3 py-2 rounded-md hover:bg-pinktheme">OUR KS4 INFO</button></Link>
    </div>


    <div className="w-full p-4 rounded-lg shadow-md">
       <p class="relative inline-block pb-3 font-semibold">
       KS 4-5 Careers
        <span class="absolute bottom-0 left-0 w-[50%] h-1 bg-bluetheme"></span>
    </p>
      <p className="mt-4 mb-4">Intention and Implementation of the Curriculum – Careers.</p>
      <Link to='/ksCareer'><button className="bg-bluetheme text-black px-3 py-2 rounded-md hover:bg-pinktheme">KS Careers</button></Link>
    </div>

  </div>
    </div>
</div>
  )
}

export default KS2toKS4