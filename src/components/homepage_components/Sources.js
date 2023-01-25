import React, { Component } from 'react'
import logo1 from '../../assets/images/logos/OFAC.png';
import logo2 from '../../assets/images/logos/EU.png';
import logo3 from '../../assets/images/logos/UN.png';
import logo4 from '../../assets/images/logos/FCA.png';

export default class Sources extends Component {
  render() {
    return (
        <div className="grid grid-rows-2 bg-neutral-50 lg:p-32">
            <div className="row-span-2">
                <h1 className="font-sans font-bold text-left text-3xl mx-10 mb-5 lg:text-center ">Reliable, global data sources</h1>
            </div>
            <div className="row-span-1">
                <p className="mx-10 my-1 mb-10 text-left lg:text-center ">We support and frequently update our  data sources from global lists including OFAC, HM <br className="hidden lg:block" /> Treasury, UN and EU to deliver you relevant and up-to-date information</p>
            </div>
            <div className="row-span-2 grid grid-cols-2 lg:grid-cols-4 justify-center items-center lg:grid-gap-1/2 lg:px-96 lg:my-20">
                <img src={logo1} className="object-fit w-20 h-20  my-2 mx-auto lg:my-0 lg:w-16 lg:h-16" alt="treasury" />
                <img src={logo4} className="object-fit w-20 h-20 my-2 mx-auto lg:my-0 lg:w-16 lg:h-16" alt="eu" />
                <img src={logo2} className="object-fit w-20 h-20 my-2 mx-auto lg:my-0 lg:w-16 lg:h-16" alt="un" />
                <img src={logo3} className="object-fit w-20 h-20 my-2 mx-auto lg:my-0 lg:w-16 lg:h-16" alt="hm treasury" />
            </div>
        </div>
    )
  }
}
