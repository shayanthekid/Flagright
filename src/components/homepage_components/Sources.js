import React, { Component } from 'react'
import logo1 from '../../assets/images/logos/OFAC.png';
import logo4 from '../../assets/images/logos/UN.png';

export default class Sources extends Component {
  render() {
    return (
        <div className="grid grid-rows-2 bg-neutral-50  ">
            <div className="row-span-2">
                <h1 className="font-sans font-bold text-left text-3xl mx-10 mt-10 mb-5">Reliable, global data sources</h1>
            </div>
            <div className="row-span-1">
                <p className="mx-10 my-1 mb-10 text-left">We support and frequently update our data sources from global lists including OFAC, HM Treasury, UN and EU to deliver you relevant and up-to-date information</p>
            </div>
            <div className="row-span-2 grid grid-cols-2 justify-center items-center  ">
                <img src={logo1} className="w-18 h-18 object-fit my-2 mx-auto" alt="image1" />
                <img src={logo1} className="object-fit w-18 h-18 my-2 mx-auto" alt="image2" />
                <img src={logo1} className="object-fit w-18 h-18 my-2 mx-auto" alt="image2" />
                <img src={logo4} className="object-fit w-18 h-18 my-2 mx-auto " alt="image2" />
            </div>
        </div>
    )
  }
}
