import React from 'react'
import HeaderGeneral from '../Resue/HeaderGeneral'
import f from "../assets/generalHeader/Group.png";
import g from "../assets/generalHeader/elements.png";
import t from "../assets/plane.png";
import one from "../assets/CEO/1.png";
import two from "../assets/CEO/2.png";
import te from "../assets/CEO/3.png";
import obj from "../assets/CEO/4.png";
import obj2 from "../assets/CEO/5.png";





const CEOMessage = () => {
    return (
        <div className="">
            <div className="w-[80%] mx-auto mt-10">
                <HeaderGeneral
                    a={f}
                    b={g}
                    c={t}
                    text="OUR CEO"
                    des="MEET THE MAN BEHIND BSI CONSULTANCY"
                />
                <div className="my-32   w-[80%] mx-auto">
                    <div className="  gap-20   flex">

                        <div className="">
                            <img src={one} alt="" className='w-[550px]' />
                        </div>
                        <div className=" space-y-4  flex flex-col justify-center">
                            <div className="text-primary">
                                <p className='text-3xl  mb-2 font-bold'>Barrister Shahroz Iqbal</p>
                                <p className='text-sm'>FOUNDER & CEO BSI CONSULTANCY</p>
                            </div>
                            <p className='text-gray-500'>A Lincoln’s Inn qualified Barrister, on a mission to improve lives with his services as an Immigration Lawyer.</p>
                            <div className="">

                                <p>
                                    <b>Email :</b> adbs@gmail.com
                                </p>
                                <br />
                                <p>
                                    <b>Phone :</b> (907) 555-0101
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="my-20 space-y-2">
                        <p className='text-2xl font-bold text-primary'>Personal Experience</p>
                        <p className='font-medium text-xl'>I qualified as an <span className='text-primary'>LLB HONS</span> from the <span className='text-primary'>University of Bedfordshire, London</span>. It has been an enriching and transformative experience. From the beginning, I was drawn to the intricacies of law and justice, eager to understand the world through a legal lens. The blend of theoretical knowledge and practical application allowed me to grow confidently as an aspiring legal professional. With each milestone, I became more passionate and determined to contribute meaningfully to the field of law.</p>
                    </div>
                    <div className="flex gap-10  items-center relative">
                        <div className="w-[60%]">
                            <img src={two} alt="" className=' ' />
                        </div>
                        <div className="w-[40%] ">
                            <img src={obj} alt="" className='w-40 absolute   rotate-[120deg] right-0 top-0  ' />

                            <p className='text-4xl mb-4 text-primary font-bold'>Faculty and colleagues</p>
                            <p className='font-medium text-3xl'>Engaging with inspiring faculty and collaborating with diverse peers honed my critical thinking and analytical skills.</p>
                        </div>

                    </div>
                    <div className="flex  my-20">
                        <div className="w-full  relative">
                            <img src={obj} alt="" className='w-40 relative -left-32' />
                            <div className="mb-10">
                                <p className='text-2xl font-bold text-primary'>Joining lincoln’s inn</p>
                                <p>One of the most prestigious Inn of Court</p>
                            </div>
                            <p className='text-2xl w-72 '>
                                My journey to qualifying as a Barrister from Lincoln’s Inn has been both challenging and immensely rewarding. Joining Lincoln’s Inn, one of the most prestigious Inn of Court has been an honour
                            </p>
                        </div>
                        <div className="w-full">
                            <img src={te} alt="" />
                        </div>


                    </div>
                    <div className="my-20 flex">
                        <div className="w-full flex flex-col gap-4">
                            <p className='font-bold text-2xl text-primary'>Becoming an Immigration Lawyer</p>
                            <p className='text-xl'>Started practising as an immigration lawyer because of its profound impact on individuals and communities. It offers the opportunity to advocate for those seeking a better life, whether through asylum, family reunification, or securing rights in a new country. Working as an Immigration lawyer has allowed me to make a tangible difference in people’s lives through my legal expertise and a deep understanding of human stories.</p>
                      <div className="flex justify-center items-center mt-20">
                        <img src={obj2} alt="" className='object-contain ' />
                      </div>
                        </div>
                         
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CEOMessage