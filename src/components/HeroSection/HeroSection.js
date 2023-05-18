import React, { Component } from 'react'
import heroImg from '../../assets/images/horse5.png';

export default class HeroSection extends Component {
  render() {
    return (
        <div className="grid grid-rows-1 justify-center items-center h-screen p-7  lg:justify-left items-left bg-gradient-to-t from-gray-700 via-gray-900 to-black">
            <div className="row-span-1 lg:pr-96 lg:mt-44  ">
                {/* <h1 className="font-sans font-bold text-left text-3xl p-3 lg:w-3/5 text-slate-50 "> */}
                <h1 className="font-sans font-bold text-left p-3 lg:text-5xl lg:w-3/5 text-slate-50 text-2xl ">
                    Software solutions <span className="text-[#ffe831]"> made easy</span> <span className='lg:hidden'> for all AML compliance needs </span>
                </h1>
                <div className="row-span-2 text-left p-2">
                    <div className="my-2 flex items-start p-1">
                        <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center mr-2 lg:hidden ">
                            <svg className="w-5 h-5 text-white fill-current lg:hidden " viewBox="0 0 20 20" fill="currentColor">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                        </div>
                        <p className='lg:w-2/4 text-slate-50' >Bring all your data on a no-code powerful platform to maximize the efficacy of AML compliance operations</p>
                    </div>
                    <div className="my-2 flex items-start p-1 lg:hidden ">
                        <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                            <svg className="w-5 h-5 text-white fill-current rounded-full" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                        </div>
                        <p className='lg:w-1/4 text-slate-50'>Combine screening with transaction monitoring, customer risk, assessment and more</p>
                    </div>

                </div>
                <div className="my-2 flex items-center ml-2 mt-10">
               
                    <button className="flex items-center justify-center px-4 py-2 text-base font-bold text-gray-800 bg-gray-200 rounded hover:bg-gray-300 focus:outline-none focus:bg-gray-300">
                        Get quotation
                        
                    </button>

                </div>
            </div>
            <div className="row-span-1 p-0 lg:row-span-2 lg:-mt-96 lg:-mr-52 relative ">
                <img src={heroImg} alt="dashboard" className=" w-full h-full object-cover lg:w-[60%] lg:h-auto lg:ml-auto" />
            </div>
        </div>
    )
  }
}
