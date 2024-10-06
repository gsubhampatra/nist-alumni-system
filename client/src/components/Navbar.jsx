import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header className="bg-blue-700 text-white p-4 px-20">
            <div className="container mx-auto flex justify-between items-center">
                <img src="./logo.svg" className=' h-12 bg-white roundedmd ' alt="NIST Logo" />
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">News Letter</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Giving Back</a></li>
                    </ul>
                </nav>
                <Link to="/join" className="bg-orange-500 text-white px-4 py-2 rounded">Join / Login</Link>
            </div>
        </header>)
}

export default Navbar