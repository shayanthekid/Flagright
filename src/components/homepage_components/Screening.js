import React, { Component } from 'react'
// import picture from '../../assets/images/Group 4.png';
import kg from '../../assets/images/kg.png';

export default class Screening extends Component {
  render() {
    return (
        <div className=' bg-[#0e0d1c] py-10 '>
            <h2 className="text-left text-4xl font-sans font-semibold  my-4 text-white m-10 pt-10 lg:text-center">My Portfolio</h2>
            <hr className="w-36 h-0.5 mx-auto my-2 bg-yellow-400 border-0 rounded md:my-10 dark:bg-yellow-400 hidden md:block" />

            <div class="flex justify-center items-center">
  <div class="grid grid-cols-2 md:grid-cols- gap-4 relative px-10 py-10">
    <div class="grid gap-4">
      <div class="relative h-auto">
        <img class="h-auto max-w-full rounded-lg" src={kg} alt="" />
        <div class="absolute inset-0 bg-black bg-opacity-50 text-white p-4 h-auto">
          <h3 class="text-xl font-bold">Image 1</h3>
          <p>Description for Image 1</p>
        </div>
      </div>
      <div class="relative">
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
        <div class="absolute inset-0 bg-black bg-opacity-50 text-white p-4">
          <h3 class="text-xl font-bold">Image 1</h3>
          <p>Description for Image 1</p>
        </div>
      </div>
    </div>
    <div class="grid gap-4">
      <div class="relative">
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
        <div class="absolute inset-0 bg-black bg-opacity-50 text-white p-4">
          <h3 class="text-xl font-bold">Image 1</h3>
          <p>Description for Image 1</p>
        </div>
      </div>
      <div class="relative">
        <img class="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg" alt="" />
        <div class="absolute inset-0 bg-black bg-opacity-50 text-white p-4">
          <h3 class="text-xl font-bold">Image 1</h3>
          <p>Description for Image 1</p>
        </div>
      </div>
    </div>
  </div>
</div>


        </div>
    )
  }
}
