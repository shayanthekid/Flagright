import React, { Component } from 'react'
import rocket from '../../assets/images/rocket.png';
import cloud from '../../assets/images/cloud.png';
import bolt from '../../assets/images/bolt.png';
import usage from '../../assets/images/usage.png';
import response from '../../assets/images/response.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default class Services extends Component {
  render() {
    return (
        <div style={{ backgroundColor: "#1A1935" }} className=" lg:hidden mt-14 pb-5 "  >
        
            <h2 className="text-left text-3xl font-sans font-semibold  my-4 text-white m-10 pt-10"> What makes Flagright <span style={{ color: '#7E6BDD' }}>different?</span></h2>
            <p className='text-left px-5 my-1 ml-5 text-white'>Flagright's developer friendly API takes developer teams 4 days to integrate. Flaright API is the ultimate AML compliance and fraud prevention layer that enables you to delivery services to your customers at scale using your preferred frameworks</p>
            <div className="grid grid-rows-3 ">
                <div className="row-span-1 mx-10 mt-8 flex items-start ">
                    <div className="">
                        <img src={rocket} className="w-8 h-8 mr-2 mb-2 " alt="item1 " />
                        <div>
                            <h3 className="text-lg font-medium text-white ">Go live in 4 days</h3>
                            <p className="text-sm text-white">
Quickest integration in the world. 85% faster than industry benchmark. Our competitors take 2-4 months;                                </p>
                        </div>
                    </div>
                </div>
                <div className="row-span-1 mx-10 mt-8 flex items-start">
                    <div className="">
                        <img src={cloud} className="w-8 h-8 mr-2 mb-2" alt="item1" />
                        <div>
                            <h3 className="text-lg font-medium text-white">One powerful API</h3>
                            <p className="text-sm text-white">
A unified, standardized API for all suscpicious acitivty detection use cases.
                                </p>
                        </div>
                    </div>
                </div>
                <div className="row-span-1 mx-10 mt-8 flex items-start">
                    <div className="">
                        <img src={bolt} className="w-8 h-8 mr-2 mb-2" alt="item1" />
                        <div>
                            <h3 className="text-lg font-medium text-white">Always real-time</h3>
                            <p className="text-sm text-white">
Flagright API is always fast at no additional cost even for complex use cases.                                </p>
                        </div>
                    </div>
                </div>
                <div className="row-span-1 mx-10 mt-8 flex items-start">
                    <div className="">
                        <img src={usage} className="w-10 h-10 mr-2 mb-2" alt="item1" />
                        <div>
                            <h3 className="text-lg font-medium text-white">Usage-based pricing</h3>
                            <p className="text-sm text-white">
                                Flexible payment plans that help you realize ROI faster                                </p>
                        </div>
                    </div>
                </div>
                <div className="row-span-1 mx-10 mt-8 flex items-start">
                    <div className="w-full h-full p-2">
                        <Carousel showThumbs={false} showStatus={false} showIndicators={false}>
                            <div>
                                <img src={response} />
                              
                            </div>
                            <div>
                                <img src={response} />
                             
                            </div>
                            <div>
                                <img src={response} />
                                
                            </div>
                        </Carousel>
                        <div className="indicator-container flex justify-center py-10">
                            <button style={{ backgroundColor: '#7E6BDD' }} className="w-8 h-2 rounded border-none mx-2"></button>
                            <button className=" w-2 h-2 rounded border-none bg-gray-500 mx-2"></button>
                            <button className="w-2 h-2 rounded border-none bg-gray-500 mx-2"></button>
                        </div>
                        <button className="bg-blue-500 text-white px-4 py-2 w-full">Request demo</button>

                    </div>
                </div>
            </div>
        </div>
    )
  }
}
