import React, { Component } from 'react'
import picture from '../../assets/images/Group 4.png';

export default class Screening extends Component {
  render() {
    return (
        <div className='hidden lg:block py-28 '>
            <div className="grid grid-rows-2 justify-center items-center h-screen p-7 mt-5 -mb-20">
                <div className="row-span-1 lg:pr-96 lg:mt-44 lg:mr-44">
                    <h1 className="font-sans font-bold text-left text-3xl p-3 lg:w-3/5">
                        Combine screening with transaction monitoring, customer risk assessment & more.             </h1>
                    <div className="row-span-2 text-left p-2 flex-col">
                        <div className="my-2 flex items-start p-1 lg:py-4">
                            <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center mr-2 ">
                                <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                </svg>
                            </div>
                            <p className='' >Real-time, risk-based transaction minitoring for AML <br/> compliance & fraud prevention.</p>
                          
                        </div>
                        <div className="my-2 flex items-center ml-5   ">
                            <a href={() => false} onClick={(event) => { event.preventDefault(); }} className="text-blue-500 text-base font-bold px-2 py-1 mt-2">Learn More</a>
                            <svg className="w-5 h-5 -ml-1 mt-2 text-blue-500 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />  </svg>
                        </div>
                        <div className="my-2 flex items-start p-1 lg:py-4">
                            <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                                <svg className="w-6 h-6 text-white fill-current rounded-full" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                                </svg>
                            </div>
                            <p>Transform customer risk assessment for onboarding & <br/> transaction risk, get rid of spreadsheets.</p>
                         
                        </div>
                        <div className="my-2 flex items-center ml-5   ">
                            <a href={() => false} onClick={(event) => { event.preventDefault(); }}  className="text-blue-500 text-base font-bold px-2 py-1 mt-2">Learn More</a>
                            <svg className="w-6 h-6 -ml-1 mt-2 text-blue-500 fill-current" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />  </svg>
                        </div>
                    

                    </div>

                </div>
                <div className="row-span-1 mt-10 lg:row-span-2 lg:-mt-96 relative ">
                    <img src={picture} alt="description dashboard" className=" w-full h-full object-cover  lg:w-1/2 lg:h-auto lg:ml-auto  lg:mt-0" />
                </div>
            </div>
        
        </div>
    )
  }
}
