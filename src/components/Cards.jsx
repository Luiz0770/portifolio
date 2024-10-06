import { LuCode2, LuSearchCheck, LuFrame, LuMonitorSmartphone, LuEye } from "react-icons/lu";

function Cards() {

  const services = [
    {
      title: "Front-end Development",
      description:
        "Creating stellar user interfaces and web experiences using the latest technologies.",
      icon: LuCode2,
    },
    {
      title: "UX Design",
      description:
        "Building intuitive, user-centric designs that drive engagement and conversion.",
      icon: LuFrame,
    },
    {
      title: "SEO Optimization",
      description:
        "Enhancing your website's visibility in search engines for increased organic traffic.",
      icon: LuSearchCheck,
    },
    {
      title: "Responsive Design",
      description:
        "Designing websites that look and perform equally well on all devices and screen sizes.",
      icon: LuMonitorSmartphone,
    },
    {
      title: "Backend Development",
      description:
        "Developing robust, scalable server-side logic for a wide range of web applications.",
      icon: LuEye,
    },
  ];

  return (
    <>
      <section id="cards">
        <div className="my-24 flex flex-col justify-start space-y-10">
          <div className="grid items-center gap-1.5 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col py-6 xl:p-6">
              <h2 className="text-4xl font-medium tracking-tight">
                Need more info?
                <br />
                <span>
                  I got you.
                </span>
              </h2>
              <p className="mt-2">
                Here are some of the services I offer. If you have any
                questions, feel free to reach out.
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