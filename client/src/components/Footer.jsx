import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white p-8">
            <div className="container mx-auto flex justify-between">
                <div>
                    <h3 className="text-xl font-bold mb-4">NIST Institute of Science and Technology</h3>
                    <p>Palur Hills, Berhampur, Odisha India, Pin 761008</p>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4">QUICK CONTACT</h3>
                    <form>
                        <input type="email" placeholder="Email" className="mb-2 p-2 w-full" />
                        <textarea placeholder="Message" className="mb-2 p-2 w-full"></textarea>
                        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Send Message</button>
                    </form>
                </div>
            </div>
        </footer>)
}

export default Footer