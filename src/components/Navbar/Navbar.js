import React, { Component } from 'react';
import Logo from '../../assets/images/swoosh-01.png';

// services - will list the services
// portfolio - recent artworks
// clients - will put client logos
// Contact us - form
export default class Navbar extends Component {
    render() {
        return (
            <nav className="flex items-center justify-between  py-4 px-6 
            bg-black"
            > 
                <div className="flex items-center">
                    <img src={Logo} alt="Logo" className="w-8 h-8" />
                </div>
                <div className="flex items-center space-x-4 ">
                    <a href="#" className="text-white hover:text-gray-300 ">Home</a>
                    <a href="#" className="text-white hover:text-gray-300">Services</a>
                    <a href="#" className="text-white hover:text-gray-300">Portfolio</a>
                    <a href="#" className="text-white hover:text-gray-300">Clients</a>
                    <a href="#" className="text-white hover:text-gray-300">Contact us</a>
                </div>
            </nav>
        )
    }

}