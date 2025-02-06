import { Link } from "react-router-dom";
import Benefits from "./Benefits/Benefits";

const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen px-6 pt-20 mx-auto text-left text-white ">
                <p className="mb-2 text-lg text-teal-400">
                    Flexible IT Support and Software Developer Talent Deployed On-Site and Remotely
                </p>
                <h4 className="mb-6 text-3xl font-bold leading-tight md:text-4xl">
                    The Tech Skills You Need, <br /> When You Need Them
                </h4>
                <div>

                    <Link
                        to="/contact-us"
                        className="px-6 py-3 font-semibold text-black transition duration-300 bg-teal-400 rounded-md hover:bg-teal-500"
                    >
                        Contact us
                    </Link>
                </div>
                <ul className="mt-16 space-y-4 text-xl list-disc list-inside">
                    <li>Scalable software solutions: full-stack, mobile, and cloud app development.</li>
                    <li>UX/UI design to enhance digital experiences and user engagement.</li>
                    <li>IT support, talent outsourcing, and project management services.</li>
                    <li>Expertise in data analytics, cybersecurity consulting, and network management.</li>
                </ul>
                <Benefits />
                <img src="/images/IT-management.avif" alt="IT management" className="m-20 mx-auto" />

            </div>
        </>
    );
};

export default Home;
