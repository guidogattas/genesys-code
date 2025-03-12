import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import logo from "../../../../public/images/logo.png";

const Header = () => {
    return (
        <>
            <section className='flex flex-col md:flex-row items-center justify-around px-4 py-4 bg-navBarBG  text-mainText font-bold text-[18px]'>
                <div className='flex items-center md:w-1/2'>
                    <Link
                        to="/"
                        className="block py-8 font-bold text-center transition duration-300 transform scale-100 rounded md:px-10 pulse-heart hover:scale-125"
                    >

                        <img src={logo} alt="Logo" className="w-auto h-[120px]" />

                    </Link>
                </div>
                <NavBar />
            </section>
        </>
    );
};

export default Header;
