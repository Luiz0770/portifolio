import { LuCode2, LuSearchCheck, LuFrame, LuMonitorSmartphone, LuEye } from "react-icons/lu";

function Cards() {

  const services = [
    {
      title: "Desenvolvimento Front-end",
      description:
        "Criando interfaces de usuário e experiências web incríveis usando as tecnologias mais recentes.",
      icon: LuCode2,
    },
    {
      title: "Design UX",
      description:
        "Construindo designs intuitivos e centrados no usuário que aumentam o engajamento e a conversão.",
      icon: LuFrame,
    },
    {
      title: "Otimização SEO",
      description:
        "Aumentando a visibilidade do seu site nos motores de busca para aumentar o tráfego orgânico.",
      icon: LuSearchCheck,
    },
    {
      title: "Design Responsivo",
      description:
        "Desenvolvendo sites que parecem e funcionam bem em todos os dispositivos e tamanhos de tela.",
      icon: LuMonitorSmartphone,
    },
    {
      title: "Desenvolvimento Backend",
      description:
        "Desenvolvendo lógica de servidor robusta e escalável para uma ampla gama de aplicações web.",
      icon: LuEye,
    },
  ];

  return (
    <>
      <section id="cards">
        <div className="my-24 flex flex-col justify-start space-y-10">
          <div className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3">

            <div className="flex flex-col py-6 xl:p-6">
              <h2 className="text-4xl font-medium">
                Precisa de mais
                <br />
                <span>
                  Informacoes
                </span>
              </h2>
              <p className="mt-2">
                Aqui estão alguns dos serviços que ofereço. Se você tiver alguma dúvida, sinta-se à vontade para entrar em contato.
              </p>
            </div>

            {services.map((service) => (
              <div key={service.title}
                className="flex flex-col items-start rounded-md bg-white/5 p-14 shadow-md backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-md">
                <service.icon className="my-6" size={20} />
                <span className="text-lg">{service.title}</span>
                <span className="mt-2">{service.description}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Cards;