import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="py-6 flex justify-around text-lg drop-shadow-xl">
                <div>
                    <h1 className="font-semibold">luiz</h1>
                </div>
                <nav>
                    <ul className="flex gap-7">
                        <li className="duration-300 hover:scale-105"><NavLink to='/' >home</NavLink></li>
                        <li className="duration-300 hover:scale-105"><NavLink to='/about' >about</NavLink></li>
                        <li className="duration-300 hover:scale-105"><NavLink to='/projects' >projects</NavLink></li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

