import React, { Component } from 'react'
import court from '../../assets/images/court.png';
import gavel from '../../assets/images/gavel.png';
import news from '../../assets/images/news.png';


export default class Organization extends Component {
  render() {
    return (
        <div style={{ backgroundColor: "#1A1935" }} className="mt-14 "  >
            <h2 className="text-left text-3xl font-sans font-semibold  my-4 text-white m-10 pt-10 lg:text-center"><span style={{ color: '#7E6BDD' }}>Protect</span>  your organization and users</h2>
            <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-gap-1/2 lg:px-96 lg:mt-16 lg:grid-rows-1 lg:py-12 lg:justify-center lg:items-center ">
                <div className="row-span-1 m-10 flex items-start lg:justify-center lg:justify-self-center ">
                    <div className="">
                        <img src={gavel} className="w-10 h-10 mr-2 mb-2  " alt="item1 " />
                        <div>
                            <h3 className="text-lg font-medium text-white ">Sanctions</h3>
                            <p className="text-sm text-white">Global data about financial penalties imposed on institutions by governments.</p>
                        </div>
                    </div>
                </div>
                <div className="row-span-1 m-10 flex items-start lg:justify-center lg:justify-self-center">
                    <div className="">
                        <img src={court} className="w-10 h-10 mr-2 mb-2" alt="item1" />
                        <div>
                            <h3 className="text-lg font-medium text-white">PEP</h3>
                            <p className="text-sm text-white">Identify politically exposed parties and accurately asses your customer's risk exposure.</p>
                       </div>
                    </div>
                </div>
                <div className="row-span-1 m-10 flex items-start lg:justify-center lg:justify-self-center">
                    <div className="">
                        <img src={news} className="w-10 h-10 mr-2 mb-2" alt="item1" />
                        <div>
                            <h3 className="text-lg font-medium text-white">Adverse Media</h3>
                            <p className="text-sm text-white">View negative mentions of business and consumer users in the news</p>
                                       </div>
                    </div>
                </div>
              
              
            </div>
        </div>

    )
  }
}
