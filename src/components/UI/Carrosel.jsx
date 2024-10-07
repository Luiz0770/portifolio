import { Swiper, SwiperSlide } from 'swiper/react';
import CardCarrosel from './CardCarrosel';
import { Link } from 'react-router-dom';

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
            href: "/projeto/Unqueue",
        },
        {
            title: "InfiniteVPS",
            description: "High performance VPS hosting solution",
            image: img2,
            href: "/projeto/InfiniteVPS",
        },
        {
            title: "TranslateBot",
            description: "Powerful Multilingual Translation Bot for Discord",
            image: img3,
            href: "/projeto/TranslateBot",
        },
        {
            title: "Wrona",
            description: "Robotics-focused technology company",
            image: img4,
            href: "/projeto/Wrona",
        },
        {
            title: "This website",
            description: "My personal website",
            image: img5,
            href: "/projeto/Portifolio",
        },
    ];

    return (
        <>
            <Swiper pagination={{ clickable: true }} navigation  spaceBetween={10} breakpoints={{320: {slidesPerView: 1}, 768: {slidesPerView: 2}}}>
                {projetos.map(projeto => (
                    <SwiperSlide key={projeto.title}>
                        <Link to={projeto.href}><CardCarrosel projeto={projeto} /></Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
