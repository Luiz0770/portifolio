export default function Hero() {
    return (
        <section id="hero">
            <div className="grid grid-cols-2 content-center h-[calc(100vh-4rem)]">
                <div className="flex flex-col gap-4 w-10/12 mx-auto">
                    <h1 className="text-9xl font-semibold">
                        Hello, I'm <span className="text-blue-500">Luiz Felipe.</span>
                    </h1>
                    <p className="text-xl">
                        An experienced full-stack website developer with a passion for crafting unique digital experiences.
                    </p>
                    <div className="">
                        <button className="bg-blue-500 hover:bg-slate-500 py-3 px-8 rounded transition duration-300 ease-in-out">
                            Fale Comigo
                        </button>
                        <button className="ml-4 bg-transparent border border-slate-500 hover:bg-gray-700 py-3 px-8 rounded transition duration-300 ease-in-out">
                            Saiba Mais
                        </button>
                    </div>
                </div>

                <div>
                </div>
            </div>

        </section>
    );
}
