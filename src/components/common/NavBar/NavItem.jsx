import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const NavItem = ({ to, label, className = "hover:bg-secondaryText", onClick, children }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <li className="relative w-full group ">
            <div
                className={`block py-4 px-4 font-bold text-center md:text-left transition duration-300 rounded cursor-pointer md:w-auto ${className} `}
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                {to ? (
                    <Link to={to} onClick={onClick} className="block w-full h-full">
                        {label}
                    </Link>
                ) : (
                    <div className="flex items-center justify-start gap-4">
                        {label}
                        {children && <FontAwesomeIcon icon={faChevronDown} />}
                    </div>
                )}
            </div>
            {children && (
                <ul
                    className={`flex flex-col gap-2 py-4 mt-2 ${isDropdownOpen ? 'block' : 'hidden'
                        } w-full bg-dropDownBG md:absolute md:w-auto shadow-lg rounded-lg`}
                >
                    {children}
                </ul>
            )}
        </li>
    );
};

export default NavItem;
