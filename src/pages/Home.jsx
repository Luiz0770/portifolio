import CardAbout from "../components/CardAbout";
import Cards from "../components/Cards";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projetos from "../components/Projetos";


export default function Home() {
    return (
        <main className="container mx-auto px-4">
            <Hero/>
            <CardAbout/>
            <Projetos/>
            <Cards/>
            <Contact/>
        </main>
    );
}