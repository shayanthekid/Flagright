import React, { Component } from 'react';
import heroImg from '../../assets/images/heroimg.svg';
import bolticon from '../../assets/images/bolt.png';

export default class HeroSection extends Component {
  render() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen p-7 bg-gradient-to-t from-gray-700 via-gray-900 to-black">
        <div className="flex flex-col justify-center items-start lg:p-10">
          <h1 className="font-sans font-bold text-left text-2xl lg:text-5xl text-slate-50">
            Hey I'm Sajid, <span className="text-[#ffe831]">I build websites</span>
          </h1>
          <div className="my-2 flex items-start p-1">
           
            <p className="lg:w-2/4 text-slate-50">
              With 2 years (and counting) of industrial experience, I'm a web Engineer interested in design systems and bridging the gap between design and development
            </p>
          </div>
          <div className="my-2 flex items-center mt-10">
            <button
              type="button"
              className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              Get in Touch
            </button>
          </div>
        </div>
        <div className="">
          <img src={heroImg} alt="dashboard" className="w-full h-full object-cover lg:w-[100%] lg:h-auto" />
        </div>
      </div>
    );
  }
}
