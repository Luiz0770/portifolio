export default function CardAbout() {

    const infos = [
        { text: "Anos de experiencia", valor: "3+" },
        { text: "Tecnologias Dominadas", valor: "5+" },
        { text: "Participacoes em projetos", valor: "15+" },
    ];

    return (
        <>
            <section id="cardAbout">
                <div className="my-14 max-w-6xl flex flex-col justify-start space-y-10">
                    <div className="py-16 pb-2 ">
                        <h2 className="text-blue-500 text-3xl">Sobre Min</h2>
                        <h3 className="text-3xl font-light leading-normal tracking-tighter xl:text-[40px]">
                        Sou Luiz Felipe Coelho Ramos, tenho 18 anos e sou um estudante de programação. Me formei na escola técnica de TI da FIAP e, atualmente, estou cursando Engenharia de Software na FIAP, dando continuidade à minha jornada no mundo da tecnologia e programação.                        </h3>
                    </div>
                    <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
                        {infos.map((info) => (
                            <div key={info.text} className="flex flex-col items-center text-center xl:items-start xl:text-start">
                                <span className="text-blue-500 text-4xl font-semibold xl:text-6xl">
                                    {info.valor}
                                </span>
                                <span className="tracking-tight xl:text-lg">
                                    {info.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
