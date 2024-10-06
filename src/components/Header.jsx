import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="py-6 flex justify-around text-lg drop-shadow-xl">
                <div>
                    <h1 className="font-semibold">luiz</h1>
                </div>
                <nav className="flex gap-7">
                    <NavLink to='/' className="duration-300 hover:scale-105">home</NavLink>
                    <NavLink to='/about' className="duration-300 hover:scale-105">about</NavLink>
                    <NavLink to='/projects' className="duration-300 hover:scale-105">projects</NavLink>
                </nav>
            </header>
        </>
    );
}

