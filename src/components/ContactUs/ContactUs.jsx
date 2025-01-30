import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);


        const serviceID = "service_fvrt8zn";
        const templateID = "template_8qstzpv";
        const userID = "CkZCdshDCDm07vF3c";

        emailjs
            .send(serviceID, templateID, formData, userID)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
                alert("Email sent successfully!");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    company: "",
                    message: "",
                });
            })
            .catch((err) => {
                console.error("FAILED...", err);
                setError("Failed to send the email. Please try again.");
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

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
                </div>

                {/* Right Section */}
                <div className="p-8 bg-black rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Name"
                                className="w-full p-3 text-black border border-gray-600 rounded-md bg-customGrey focus:outline-none focus:border-customOrange"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="w-full p-3 text-black border border-gray-600 rounded-md bg-customGrey focus:outline-none focus:border-customOrange"
                                required
                            />
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                className="w-full p-3 text-black border border-gray-600 rounded-md bg-customGrey focus:outline-none focus:border-customOrange"
                            />
                            <input
                                type="text"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                placeholder="Company Name"
                                className="w-full p-3 text-black border border-gray-600 rounded-md bg-customGrey focus:outline-none focus:border-customOrange"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Message"
                                rows="4"
                                className="w-full p-3 text-black border border-gray-600 rounded-md bg-customGrey focus:outline-none focus:border-customOrange"
                                required
                            ></textarea>
                        </div>

                        {/* Feedback message */}
                        {error && (
                            <p className="mt-4 text-sm text-red-500" aria-live="polite">{error}</p>
                        )}

                        <button
                            type="submit"
                            className={`w-full py-3 font-bold text-white transition duration-300 rounded-md 
        ${isSubmitting ? "bg-gray-400" : "bg-buttonMain hover:bg-buttonHover hover:text-white"}
    `}
                            disabled={isSubmitting}
                            aria-busy={isSubmitting}
                            aria-live="polite"
                        >
                            {isSubmitting ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
