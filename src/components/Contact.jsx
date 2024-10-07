import Forms from "./UI/Forms";

export default function Contact() {
    return (
        <>
            <section id="contact">
                <div className="my-64 flex flex-col items-center justify-center bg-white/5 rounded-lg px-8 py-16 text-center xl:py-24">
                    <h2 className="text-4xl font-medium xl:text-6xl">
                        Venha Trabalhar Comigo!
                    </h2>
                    <p className="mt-1.5 xl:text-lg">
                        Atualmente, estou disponível para trabalho freelance e aberto a discutir novos projetos.
                    </p>
                    <Forms />
                </div>
            </section>
        </>
    );
}
