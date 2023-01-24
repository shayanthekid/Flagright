import React, { Component } from 'react'
import heroImg from '../../assets/images/heroimg2.png';

export default class HeroSection extends Component {
  render() {
    return (
        <div style={{ backgroundColor: "#f8fafe" }} className="grid grid-rows-2 justify-center items-center  h-screen p-7 mt-5 lg:justify-left items-left">
            <div className="row-span-1 lg:pr-96 lg:mt-44  ">
                <h1 className="font-sans font-bold text-left text-3xl p-3 lg:w-3/5 ">
                    Sanctions, PEP and media checks on a centralized platform <span className='lg:hidden'> for all AML compliance needs </span>
                </h1>
                <div className="row-span-2 text-left p-2">
                    <div className="my-2 flex items-start p-1">
                        <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center mr-2 lg:hidden ">
                            <svg className="w-5 h-5 text-white fill-current lg:hidden " viewBox="0 0 20 20" fill="currentColor">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                        </div>
                        <p className='lg:w-2/4' >Bring all your data on a no-code powerful platform to maximize the efficacy of AML compliance operations</p>
                    </div>
                    <div className="my-2 flex items-start p-1 lg:hidden ">
                        <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                            <svg className="w-5 h-5 text-white fill-current rounded-full" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                        </div>
                        <p className='lg:w-1/4'>Combine screening with transaction monitoring, customer risk, assessment and more</p>
                    </div>

                </div>
                <div className="my-2 flex items-center ml-5 lg:hidden  ">
                    <a href="#" className="text-indigo-500 text-sm px-2 py-1">Learn More</a>
                    <svg className="w-5 h-5 -ml-1 text-indigo-500 fill-current" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />  </svg>
                </div>
            </div>
            <div className="row-span-1 p-0 lg:row-span-2 lg:-mt-96 relative">
                <img src={heroImg} alt="image description" className=" w-full h-full object-cover lg:w-[60%] lg:h-auto lg:ml-auto" />
            </div>
        </div>
    )
  }
}
