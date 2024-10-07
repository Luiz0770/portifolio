import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="flex justify-around items-center">
            <div className="text-center py-6">
                <p className="text-sm">© Developer Portfolio by Luiz Felipe</p>
            </div>
            <div className="flex gap-3 items-center">
                <a href="https://github.com/Luiz0770" target="_blank"><DiGithubBadge size={40} /></a>
                <a href="https://www.linkedin.com/in/luiz-felipe-coelho-ramos/" target="_blank"><FaLinkedin size={35} /></a>
                <a href="https://www.instagram.com/luizfcr__/" target="_blank"><FaInstagram size={35} /></a>
            </div>
        </footer>
    );
}
