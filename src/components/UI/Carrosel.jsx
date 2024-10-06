import { Swiper, SwiperSlide } from 'swiper/react';
import CardCarrosel from './CardCarrosel';

// Import Images
import img1 from '../../assets/imgs/unqueue.webm'
import img2 from "../../assets/imgs/infinitevps.webm"
import img3 from "../../assets/imgs/translate_bot.webm"
import img4 from "../../assets/imgs/wrona.jpeg"
import img5 from "../../assets/imgs/portfolio.webm"


export default function Carrosel() {

    const projetos = [
        {
            title: "Unqueue",
            description: "E-commerce platform for selling digital products",
            image: img1,
            href: "https://unqueue.shop/",
        },
        {
            title: "InfiniteVPS",
            description: "High performance VPS hosting solution",
            image: img2,
            href: "#",
        },
        {
            title: "TranslateBot",
            description: "Powerful Multilingual Translation Bot for Discord",
            image: img3,
            href: "https://translatebot.app/",
        },
        {
            title: "Wrona",
            description: "Robotics-focused technology company",
            image: img4,
            href: "https://www.wrona.com/",
        },
        {
            title: "This website",
            description: "My personal website",
            image: img5,
            href: "https://github.com/wendoj/portfolio",
        },
    ];

    return (
        <>
            <Swiper pagination={{ clickable: true }} navigation  spaceBetween={10} breakpoints={{320: {slidesPerView: 1}, 768: {slidesPerView: 2}}}>
                {projetos.map(projeto => (
                    <SwiperSlide key={projeto.title}>
                        <CardCarrosel projeto={projeto} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
