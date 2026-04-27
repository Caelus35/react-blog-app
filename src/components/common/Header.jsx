import React from "react";
import{useTheme} from '../ThemeContext';
import { Link } from "react-router";
import { useAuth, useUsername } from "../authWrapper/authContext";

function Header(){
    const username = useUsername();
    const {toggleTheme}=useTheme();
    const {logout} = useAuth();
    return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-5 py-5 text-gray-100 font-sans">
            <h1 className="text-4xl font-bold mb-4 tracking-tight">My Blog</h1>
            <nav>
                <ul className="flex flex-row justify-center space-x-8 text-lg">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/posts">Blog Posts</Link>
                    </li>
                    {/*<li>About</li>*/}
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        {username ? <p onClick={logout}>Hi {username}, Logout?</p> : <Link to="/login">Login</Link>}
                    </li>
                    {/*<button onClick={toggleTheme}>Toggle Theme</button>*/}
                </ul>
            </nav>
        </div>
    );
}

export default Header;