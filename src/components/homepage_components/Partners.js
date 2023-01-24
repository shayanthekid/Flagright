import React, { Component } from 'react'

export default class 

extends Component {
  render() {
    return (
      <div className='bg-black p-5 ' >
            <div className="grid grid-rows-4">
                <div className="row-span-1">
                    <h1 className="text-center text-3xl font-sans font-semibold p-5  text-blue-500 ">Our partners</h1>
                </div>
                <div className="row-span-3 grid grid-cols-2">
                    <img src="image1.jpg" className="object-cover" alt="Image 1" />
                    <img src="image2.jpg" className="object-cover" alt="Image 2" />
                    <img src="image3.jpg" className="object-cover" alt="Image 3" />
                    <img src="image4.jpg" className="object-cover" alt="Image 4" />
                </div>
            </div>
            <div className="grid grid-rows-4">
                <div className="row-span-1">
                    <h1 className="text-center text-3xl font-sans font-semibold  text-blue-500">Expert team</h1>
                    <p className='text-center p-1 font-sans font-medium  text-blue-500'>Our team has built anomaly detection & financial crime solutions in the world's most innovative companies   </p>
                </div>
                <div className="row-span-3 grid grid-cols-2">
                    <img src="image1.jpg" className="object-cover" alt="Image 1" />
                    <img src="image2.jpg" className="object-cover" alt="Image 2" />
                    <img src="image3.jpg" className="object-cover" alt="Image 3" />
                    <img src="image4.jpg" className="object-cover" alt="Image 4" />
                </div>
            </div>

      </div>
    )
  }
}
