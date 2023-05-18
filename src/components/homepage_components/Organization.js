import React, { Component } from 'react'
import court from '../../assets/images/chrome.png';
import gavel from '../../assets/images/code.png';
import news from '../../assets/images/news.png';


export default class Organization extends Component {
  render() {
    return (
        <div className="-mt-10 bg-slate-50 py-5	 "  >
            <h2 className="text-left text-4xl font-sans font-semibold  my-4 text-black m-10 pt-10 lg:text-center">Our Services</h2>
            <hr className="w-36 h-0.5 mx-auto my-2 bg-yellow-400 border-0 rounded md:my-10 dark:bg-yellow-400 hidden md:block" />

            <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-gap-1/2 lg:py-10 lg:px-24   lg:grid-rows-1  lg:justify-center lg:items-center ">
                <div className="row-span-1 m-10 flex items-start lg:justify-center lg:justify-self-center ">
                    <div className="">
                        <img src={gavel} className="w-10 h-10 mr-2 mb-2 my-2 " alt="gavel logo " />
                        <div>
                            <h3 className="text-2xl font-bold text-black my-2 ">Service 1</h3>
                            <p className="text-sm text-black my-2">Global data about financial penalties imposed on institutions by governments.</p>
                        </div>
                    </div>
                </div>
                <div className="row-span-1 m-10 flex items-start lg:justify-center lg:justify-self-center ">
                    <div className="">
                        <img src={court} className="w-10 h-10 mr-2 mb-2 my-2 " alt="gavel logo " />
                        <div>
                            <h3 className="text-2xl font-bold text-black my-2">Service 2</h3>
                            <p className="text-sm text-black my-2">Global data about financial penalties imposed on institutions by governments.</p>
                        </div>
                    </div>
                </div>
                <div className="row-span-1 m-10 flex items-start lg:justify-center lg:justify-self-center ">
                    <div className="">
                        <img src={gavel} className="w-10 h-10 mr-2 mb-2 my-2 " alt="gavel logo " />
                        <div>
                            <h3 className="text-2xl font-bold text-black my-2">Service 3</h3>
                            <p className="text-sm text-black my-2">Global data about financial penalties imposed on institutions by governments.</p>
                        </div>
                    </div>
                </div>
                <div className="row-span-1 m-10 flex items-start lg:justify-center lg:justify-self-center ">
                    <div className="">
                        <img src={court} className="w-10 h-10 mr-2 mb-2 my-2 " alt="gavel logo " />
                        <div>
                            <h3 className="text-2xl font-bold text-black my-2 ">Service 4</h3>
                            <p className="text-sm text-black my-2">Global data about financial penalties imposed on institutions by governments.</p>
                        </div>
                    </div>
                </div>
                <div className="row-span-1 m-10 flex items-start lg:justify-center lg:justify-self-center">
                    <div className="">
                        <img src={gavel} className="w-10 h-10 mr-2 mb-2 my-2" alt="court logo" />
                        <div>
                            <h3 className="text-2xl font-bold text-black my-2">Service 5</h3>
                            <p className="text-sm text-black my-2">Identify politically exposed parties and accurately asses your customer's risk exposure.</p>
                       </div>
                    </div>
                </div>
                <div className="row-span-1 m-10 flex items-start lg:justify-center lg:justify-self-center">
                    <div className="">
                        <img src={court} className="w-10 h-10 mr-2 mb-2 my-2" alt="news logo" />
                        <div>
                            <h3 className="text-2xl font-bold text-black my-2">Service 6</h3>
                            <p className="text-sm text-black my-2">View negative mentions of business and consumer users in the news</p>
                                       </div>
                    </div>
                </div>
              
              
            </div>
        </div>

    )
  }
}
