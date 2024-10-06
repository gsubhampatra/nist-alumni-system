import React from 'react'
import { Link } from 'react-router-dom'
import Hero from './Hero'
export default function Home() {
    return (
        <div className="min-h-screen  bg-gray-100">
            {/* Header */}


            {/* Hero Banner */}
            <Hero />

            {/* Main Content */}
            <main className="container mx-auto p-12 ">
                {/* Network and Contribute Section */}
                <section className="flex justify-between mb-12">
                    <div className="w-1/2 bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4">NETWORK AND GROW WITH THE BEST</h3>
                        <p className="mb-4">15000+ Leading the industry & academia across the globe</p>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded">Become a Member</button>
                    </div>
                    <div className="w-1/2 bg-white p-6 rounded-lg shadow-md ml-6">
                        <h3 className="text-2xl font-bold mb-4">CONTRIBUTE FOR GROWTH</h3>
                        <p className="mb-4">Where would you like your gift to go?</p>
                        <button className="bg-orange-500 text-white px-4 py-2 rounded">Donate Now</button>
                    </div>
                </section>

                {/* Latest Events Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">LATEST EVENTS</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {["https://alumni.nist.edu/images/events/alumni-meet-bbsr.jpg", "https://alumni.nist.edu/images/events/alumni-members-silver-jubilee.jpg", "https://alumni.nist.edu/images/events/alumni-meet-bbsr.jpg", "https://alumni.nist.edu/images/events/alumni-meet-2022-bbsr.jpg"].map((item) => (
                            <div key={item} className="bg-white p-4 rounded-lg shadow-md">
                                <img src={item} alt="Event" className="mb-4" />
                                <h4 className="font-bold mb-2">ALUMNI MEMBERS @ 25 YEAR’S SILVER JUBILEE CELEBRATION</h4>
                                <p className="text-sm"> Sep 19/2021  NIST, Berhampur</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Members Section */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold mb-6">MEMBERS</h2>
                    <div className="grid grid-cols-6 gap-4">
                        {[1, 2, 3, 4, 5, 6, 8, 9, , 10, 11, 12, 13].map((item, index) => (
                            <img key={index} src={`https://alumni.nist.edu/images/members/${item}.jpg`} loading='lasy' alt={`Member ${index + 1}`} className="rounded-full" />
                        ))}
                    </div>
                </section>

                {/* Testimonial Section */}
                <section>
                    <h2 className="text-3xl font-bold mb-6">Chairman's Message
                    </h2>
                    <div className="bg-white p-6 rounded-lg shadow-md flex items-center">
                        <img src="https://alumni.nist.edu/images/chairman.jpg" alt="Testimonial" width={100} height={100} className="rounded-full mr-6" />
                        <div>
                            <p className="italic mb-2">"
                                At the end of another successful academic year at NIST, diploma in hand, radiating with extra ordinary dreams, hopes and aspiration you are now entering our NIST alumni community – over thousands of people around globe who have made a similar journey. As very proud and successful new graduates, amongst you are technocrats, visionaries, future thought leaders, and innovators who now enter the world of untold opportunities. Each of you have proved yourself to be successful, set the bar for achievement very high, and each of your stories is distinct, unique and powerful. My best wishes to you and the alumni community (the proud NISTIANs) around globe."</p>
                            <p className="font-bold">Dr. Sukant K. Mohapatra
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}

        </div>
    )
}