import React, { Component } from 'react'
import logo1 from '../../assets/images/logos/comply.png';
import logo2 from '../../assets/images/logos/coinfirm.png';
import logo3 from '../../assets/images/logos/trm.png';
import logo4 from '../../assets/images/logos/aiprise.png';
import logo5 from '../../assets/images/logos/clearjun.png';
import logo6 from '../../assets/images/logos/Rapyd.png';
import logo7 from '../../assets/images/logos/Revolut.png';
import logo8 from '../../assets/images/logos/pal.png';
import logo9 from '../../assets/images/logos/aws.png';
import logo10 from '../../assets/images/logos/floridablue.png';


export default class Partners extends Component {
  render() {
    return (
      <div className='bg-white p-5 ' >
            <div className="grid grid-rows-4">
                <div className="row-span-1">
                    <h1 className="text-center text-3xl font-sans font-semibold p-5   ">Our partners</h1>
                </div>
                <div className="row-span-3 grid grid-cols-2 p-4 flex ml-6">
            <img src={logo1} className="object-cover w-27 h-27" alt="Image 1" />
            <img src={logo2} className="object-cover w-32 h-27" alt="Image 2" />
            <img src={logo3} className="object-cover w-27 h-27" alt="Image 3" />
            <img src={logo4} className="object-fit w-50 h-8" alt="Image 4" />
            <img src={logo5} className="object-fit w-50 h-8" alt="Image 4" />
            <img src={logo6} className="mt-2 object-fit w-50 h-8" alt="Image 4" />
               
                </div>
            </div>
            <div className="grid grid-rows-3">
                <div className="row-span-1">
                    <h1 className="text-center text-3xl font-sans font-semibold  ">Expert team</h1>
                    <p className='text-center p-4 font-sans font-medium  '>Our team has built anomaly detection & financial crime solutions in the world's most innovative companies   </p>
                </div>
          <div className="row-span-3 grid grid-cols-2 p-6 flex ml-6">
            <img src={logo7} className="object-cover w-27 h-27" alt="Image 1" />
            <img src={logo8} className="object-cover w-32 h-27" alt="Image 2" />
            <img src={logo9} className="object-cover w-20 h-27" alt="Image 3" />
            <img src={logo10} className="object-fit w-50 h-10" alt="Image 4" />
   
          </div>
            </div>

      </div>
    )
  }
}
