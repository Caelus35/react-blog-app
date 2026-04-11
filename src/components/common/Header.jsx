import React from "react";
import{useTheme} from '../ThemeContext';

function Header(){
    const {toggleTheme}=useTheme();
    return (
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 px-5 py-5 text-gray-100 font-sans">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">My Blog</h1>
            <nav>
                <ul className="flex flex-row justify-center space-x-8 text-lg">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contract</li>
                    <button onClick={toggleTheme}>Toggle Theme</button>
                </ul>
            </nav>
        </div>
    );
}

export default Header;