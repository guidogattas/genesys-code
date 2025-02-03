import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap, faCertificate, faUserTie, faStar } from "@fortawesome/free-solid-svg-icons";

const Benefits = () => {
    const benefits = [
        {
            icon: faMap,
            title: "Nationwide",
            description: "We draw from a network of 7000+ highly-vetted specialists across the United States, Canada, England, and parts of the EU.",
        },
        {
            icon: faCertificate,
            title: "Expertise",
            description: "Our technicians are certified experts with 5-10 years of IT experience in business and corporate environments.",
        },
        {
            icon: faUserTie,
            title: "Highly-Vetted",
            description: "Each technician goes through an intensive 4-step vetting process. Only the top 5% of applicants are accepted.",
        },
        {
            icon: faStar,
            title: "Customer Satisfaction",
            description: "Our technicians have a 97% IT resolution rate and maintain at least a 4.7/5 star customer satisfaction score.",
        },
    ];

    return (
        <section className="py-12">
            <div className="container px-6 mx-auto md:px-12">
                <div className="grid grid-cols-1 gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <FontAwesomeIcon icon={benefit.icon} className="mb-4 text-5xl text-teal-500" />
                            <h3 className="text-lg font-semibold">{benefit.title}</h3>
                            <p className="text-gray-300">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
