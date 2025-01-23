const ContactUs = () => {
    return (
        <div className="px-8 py-16 bg-customGrey text-customWhite">
            <div className="grid gap-8 mx-auto max-w-7xl md:grid-cols-2">
                {/* Left Section */}
                <div>
                    <h4 className="mb-2 text-lg font-semibold text-customOrange">Get in Touch</h4>
                    <h1 className="mb-4 text-4xl font-bold">
                        We look forward to connecting with you!
                    </h1>
                    <p className="mb-4 text-lg">
                        Book a meeting with us today to learn more about our services and how
                        we can assist you in achieving your goals.
                    </p>
                    <p className="mb-8 text-lg">
                        If you need urgent support, <a href="#" className="text-customOrange">click here</a> to book an IT specialist now.
                    </p>

                    <div className="mb-8">
                        <div className="flex items-center w-1/2 p-4 mb-10 transition duration-300 rounded-2xl bg-slate-500 hover:bg-slate-800">
                            <i className="mr-4 text-2xl fas fa-calendar-alt text-customOrange"></i>
                            <button className="inline-flex text-xl font-bold">Book a Meeting</button>
                        </div>
                        <div className="space-y-2">
                            <p className="flex items-center">
                                <i className="mr-2 text-lg fas fa-phone text-customOrange"></i>
                                USA: (+1) 737 377 6791
                            </p>
                            <p className="flex items-center">
                                <i className="mr-2 text-lg fas fa-phone text-customOrange"></i>
                                UK: (+44) 020 7183 8794
                            </p>
                            <p className="flex items-center">
                                <i className="mr-2 text-lg fas fa-phone text-customOrange"></i>
                                SA: (+27) 087 727 7276
                            </p>
                        </div>
                    </div>

                    <div className="flex space-x-4 text-2xl">
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-youtube"></i>
                        <i className="fab fa-facebook"></i>
                    </div>
                </div>

                {/* Right Section */}
                <div className="p-8 bg-black rounded-lg">
                    <form>
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full p-3 text-black border border-gray-600 rounded-md bg-customGrey focus:outline-none focus:border-customOrange"
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full p-3 text-black border border-gray-600 rounded-md bg-customGrey focus:outline-none focus:border-customOrange"
                            />
                            <input
                                type="text"
                                placeholder="Phone"
                                className="w-full p-3 text-black border border-gray-600 rounded-md bg-customGrey focus:outline-none focus:border-customOrange"
                            />
                            <input
                                type="text"
                                placeholder="Company Name"
                                className="w-full p-3 text-black border border-gray-600 rounded-md bg-customGrey focus:outline-none focus:border-customOrange"
                            />
                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full p-3 text-black border border-gray-600 rounded-md bg-customGrey focus:outline-none focus:border-customOrange"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 font-bold text-white transition duration-300 rounded-md bg-customOrange bg-slate-500 hover:bg-slate-800"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs