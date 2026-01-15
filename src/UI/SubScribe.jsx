import React from 'react'
import pic from "../assets/vv.png"
import Frame from "../assets/Frame.png"

const SubScribe = () => {
  return (
     <div className="rounded-2xl flex flex-col md:flex-row bg-[#3365E31A] my-20 p-10 ">
              <div className="w-full space-y-10 md:p-10 "
    
                style={{
                  backgroundImage: `url(${pic})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="">
                  <p className="text-primary font-bold text-4xl">Are You ready to Start ?</p>
                  <p>Apply Now.</p>
                </div>
                <div className="flex flex-col md:flex-row gap-4 items-center w-full">
                  <input type="text" className="rounded-full px-4 p-2  border-black text-blackx bg-transparent w-full outline-none border" placeholder="Enter Email" />
                  <button className="rounded-full w-48 bg-primary text-white px-4 py-2">Contact Us</button>
                </div>
              </div>
              <div className="w-full flex  justify-center">
                <img src={Frame} alt="" className='w-72 hidden md:block' />
              </div>
    
    
            </div>
  )
}

export default SubScribe