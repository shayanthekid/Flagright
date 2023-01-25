import React, { Component } from 'react'
import logo from '../../assets/images/logos/white-logo.png';
import logo2 from '../../assets/images/logos/bxl-linkedin (1).svg';
import logo3 from '../../assets/images/logos/bxl-twitter.svg';
import logo4 from '../../assets/images/logos/bxl-medium.svg';

export default class Footer extends Component {
  render() {
    return (
        <footer style={{ backgroundColor: "#EBF2FF" }} className="grid grid-rows-5 lg:grid-rows-1 lg:grid-cols-5 lg:py-32 lg:px-28">
            <div className="row-span-1 p-4 mt-10">
                <div className="grid grid-cols-2">
                    <div className="col-span-1">
                        <img src={logo} alt="Logo" className="object-fit w-50 h-30" />
                        <p className="text-center text-xs mr-20 my-2">©2022 Flagright</p>
                    </div>
                    <div className="col-span-1 lg:hidden">
                        <h4 className="text-center font-medium	 text-1xl">Follow us</h4>
                        <div className="grid grid-cols-3 p-5 ml-8">
                            <div className="col-span-1">     <img src={logo2} alt="Logo" className="object-fit w-50 h-30" />
                    </div>
                            <div className="col-span-1">   <img src={logo3} alt="Logo" className="object-fit w-50 h-30" /></div>
                            <div className="col-span-1">  <img src={logo4} alt="Logo" className="object-fit w-50 h-30" /></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row-span-1 px-5">
                <h1 className="text-left font-semibold text-2l">Platform</h1>
                <ul className="text-left text-xs mt-2">
                    <li className='my-2'><a href="#">Real-time transcation monitoring</a></li>
                    <li className='my-2'><a href="#">Customer Risk assessment</a></li>
                    <li className='my-2'><a href="#">Sactions, PEP, AM screening</a></li>
                    <li className='my-2'><a href="#">ID verification</a></li>
                </ul>
            </div>
            <div className="row-span-1 px-5 mt-4">
                <h1 className="text-left font-semibold text-2l">Integrations</h1>
                <ul className="text-left text-xs mt-2">
                    <li className=''><a href="#">Blockchain analytics</a></li>
         
                </ul>
                <h1 className="text-left font-semibold text-2l hidden lg:block lg:py-4">Advisory services</h1>
                <ul className="text-left text-xs mt-2">
                    <li className=''><a href="#">Launchpad</a></li>

                </ul>
            </div>
            <div className="row-span-1 px-5 -mt-8 lg:hidden">
                <h1 className="text-left font-semibold text-2l">Advisory services</h1>
                <ul className="text-left text-xs mt-2">
                    <li className=''><a href="#">Launchpad</a></li>
               
          </ul>
        </div>
            <div className="row-span-1 px-5 -mt-24 lg:mt-0 ">
                <h1 className="text-left font-semibold text-2l my-1">Privacy Policy</h1>
                <h1 className="text-left font-semibold text-2l my-1">Terms </h1>
                <h1 className="text-left font-semibold text-2l my-1">Jobs</h1>
                <h1 className="text-left font-semibold text-2l my-1">Cookie Policy </h1>
                <h1 className="text-left font-semibold text-2l my-1">Imprint</h1>

                </div>
            <div className="row-span-1 px-5 -mt-24 lg:mt-0  ">
                <div className="col-span-1  hidden lg:block ">
                    <h4 className="text-center font-medium	 text-1xl">Follow us</h4>
                    <div className="grid grid-cols-3 p-5 ml-8">
                        <div className="col-span-1">     <img src={logo2} alt="Logo" className="object-fit w-50 h-30" />
                        </div>
                        <div className="col-span-1">   <img src={logo3} alt="Logo" className="object-fit w-50 h-30" /></div>
                        <div className="col-span-1">  <img src={logo4} alt="Logo" className="object-fit w-50 h-30" /></div>
                    </div>
                </div>

            </div>
          
    </footer >  
    )
  }
}
