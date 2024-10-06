import Carrosel from "../components/UI/Carrosel";

export default function Projetos() {
    return (
        <>
            <section id="projects">
                <div className="my-64">
                    <h2 className="mt-3 text-4xl font-semibold xl:text-6xl">
                        Streamlined digital experiences.
                    </h2>
                    <p className="mt-1.5 xl:text-lg">
                        I&apos;ve worked on a variety of projects, from small websites to
                        large-scale web applications. Here are some of my favorites:
                    </p>

                    {/* Carrosel */}
                    <div className="mt-14">
                        <Carrosel />
                    </div>
                </div>
            </section>
        </>
    );
}