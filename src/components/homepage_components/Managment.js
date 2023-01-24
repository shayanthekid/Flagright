import React, { Component } from 'react'
import picture from '../../assets/images/Group3.png';

export default class Managment extends Component {
  render() {
    return (
        <div style={{ backgroundColor: "#f8fafe" }} className="grid grid-rows-2 justify-center items-center h-screen p-7 mt-5 -mb-20">
            <div className="row-span-1">
                <h1 className="font-sans font-bold text-left text-3xl p-3">
Streamline screening & case management                </h1>
                <div className="row-span-2 text-left p-2">
                    <div className="my-2 flex items-start p-1">
                        <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                        </div>
                        <p >Automatically screen all new customers</p>
                    </div>
                    <div className="my-2 flex items-start p-1">
                        <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                            <svg className="w-5 h-5 text-white fill-current rounded-full" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                        </div>
                        <p>Get a complete, unified picture of risky customers and transactions</p>
                    </div>
                    <div className="my-2 flex items-start p-1">
                        <div className="bg-blue-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                            <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                            </svg>
                        </div>
                        <p >Flexible configuration options to minimize false positives</p>
                    </div>
                </div>
                
            </div>
            <div className="row-span-1 mt-10 ">
                <img src={picture} alt="image description" className=" w-full h-full object-cover " />
            </div>
        </div>
    )
  }
}
