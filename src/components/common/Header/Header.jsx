import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import logo from "../../../../public/images/logo2.png";

const Header = () => {
    return (
        <>
            <section className='flex flex-col lg:flex-row items-center justify-between px-6 py-4 bg-navBarBG text-mainText font-bold text-[18px]'>
                {/* Logo Section */}
                <div className='flex items-center gap-4 mdbackdrop::mb-4 lg:w-1/2'>
                    <Link to="/" className="flex items-center gap-2 transition-all duration-300 transform scale-100 pulse-heart">
                        <img src={logo} alt="Logo" className="w-auto h-[80px] md:h-[100px]" />
                        {/* Header Title */}
                        <h1 className="font-bold font-inter text-[24px]">
                            <span className="text-[#F07C3F]">GENESYS</span> <span className="text-teal-300">CODE</span>
                        </h1>
                    </Link>
                </div>

                {/* Navigation Bar */}
                <NavBar />
            </section>
        </>
    );
};

export default Header;
