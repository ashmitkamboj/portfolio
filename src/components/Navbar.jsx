import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="p-4 flex justify-between items-center bg-gray-100 dark:bg-gray-800 shadow">
            <Link to="/" className="text-xl font-bold"> My Portfolio</Link>
            <div classname ="space-x-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/resume">Resume</Link>
            </div>
        </nav>
    )
} 

export default Navbar;