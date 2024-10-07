import Carrosel from "../components/UI/Carrosel";

export default function Projetos() {
    return (
        <>
            <section id="projects">
                <div className="my-64">
                    <h2 className="mt-3 text-4xl font-semibold xl:text-6xl">
                        Projetos digitais otimizados.
                    </h2>
                    <p className="mt-1.5 xl:text-lg">
                        Trabalhei em diversos projetos, desde pequenos sites até grandes aplicações web. A seguir, apresento alguns dos meus projetos favoritos.
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