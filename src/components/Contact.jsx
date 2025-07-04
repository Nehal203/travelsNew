import React from 'react';

const Contact = () => {
    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">CONTACT US</h1>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Contact Information */}
                <div className="space-y-6">
                    <div>
                        <h2 className="text-lg font-semibold mb-2">Address</h2>
                        <p>2369 Robinson Lane Jackson, OH 45640</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">Phone</h2>
                        <p>(+1) 740-395-3829</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">Email</h2>
                        <p>Info@example.com</p>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold mb-2">Working Hours</h2>
                        <p>Mon - Fri: 08.00 - 16.00</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="name" className="block font-medium">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block font-medium">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block font-medium">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block font-medium">Your Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            className="w-full p-2 border border-gray-300 rounded"
                        ></textarea>
                    </div>

                    <button className="bg-blue-400 text-white px-6 py-2 rounded hover:bg-black transition">
                        SEND MESSAGE
                    </button>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-96 mb-8">
                <h2 className="text-xl font-semibold mb-4">Our Location</h2>
                <div className="w-full h-full rounded-lg overflow-hidden">
                    {/* OpenStreetMap alternative */}
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-82.6606%2C39.0336%2C-82.6206%2C39.0536&layer=mapnik"
                        style={{ border: '1px solid black' }}
                    ></iframe>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="text-lef text-sm text-gray-600 border-t pt-4">
               COPYRIGHT © 2025 | All Rights Reserved.
            </div>
        </div>
    );
};

export default Contact;