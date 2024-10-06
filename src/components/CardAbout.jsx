export default function CardAbout() {

    const infos = [
        { label: "Years of experience", value: "3+" },
        { label: "Technologies mastered", value: "5+" },
        { label: "Companies worked with", value: "15+" },
      ];

    return (
        <>
            <section id="cardAbout">
                <div className="my-14 max-w-6xl flex flex-col justify-start space-y-10">
                    <h2 className="py-16 pb-2 text-3xl font-light leading-normal tracking-tighter xl:text-[40px]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut quo consequatur obcaecati quisquam quibusdam, minus quod? Quam, corporis! Ex, dicta repellendus cupiditate facere dolores iste deserunt, recusandae eum illum ad enim officiis! Exercitationem pariatur, suscipit voluptatibus aspernatur illum ut beatae quis accusantium corporis sequi nesciunt ullam! Cumque tempora voluptatibus eum.
                    </h2>
                    <div className="grid grid-cols-2 gap-8 xl:grid-cols-3">
                        {infos.map((info) => (
                            <div key={info.label} className="flex flex-col items-center text-center xl:items-start xl:text-start">
                                <span className="text-4xl font-semibold xl:text-6xl">
                                    {info.value}
                                </span>
                                <span className="tracking-tight xl:text-lg">
                                    {info.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
