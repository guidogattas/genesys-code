import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import logo from "../../../../public/images/logo.png";

const Header = () => {
    return (
        <>
            <section className='flex flex-col lg:flex-row items-center justify-between px-6 py-4 bg-navBarBG text-mainText font-bold text-[18px]'>
                {/* Logo Section */}
                <div className='flex items-center justify-between lg:w-1/2 gap-6'>
                    <Link to="/" className="block py-4 md:py-8 font-bold text-center transition-all duration-300 transform scale-100 hover:scale-110 hover:opacity-80">
                        <img src={logo} alt="Logo" className="w-auto h-[120px] md:h-[150px] max-w-[150px]" />
                    </Link>
                    {/* Header Title */}
                    <h1 className="font-bold text-center font-inter hidden md:block text-[24px]">
                        <span className="text-teal-300">GENESYS</span> <span className="text-white">CODE</span>
                    </h1>
                </div>
                
                {/* Navigation Bar */}
                <NavBar />
            </section>
        </>
    );
};

export default Header;
