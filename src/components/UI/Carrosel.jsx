import { Swiper, SwiperSlide } from 'swiper/react';
import CardCarrosel from './CardCarrosel';
import { Link } from 'react-router-dom';

// Import Images
import img1 from '../../assets/imgs/fokus.png'
import img2 from "../../assets/imgs/consulta-filmes.png"
import img3 from "../../assets/imgs/vidflow.png"
import img4 from "../../assets/imgs/reconhecimento.png"

export default function Carrosel() {

    const projetos = [
        {
            title: "Fokus",
            description: "Aplicacao que tem como objetivo aumentar o foco nas atividades",
            image: img1,
            href: "/projeto/Fokus",
        },
        {
            title: "Consulta Filmes",
            description: "Aplicacao para consultar filmes de uma API",
            image: img2,
            href: "/projeto/Consulta-Filmes",
        },
        {
            title: "VidFlow",
            description: "Aplicacao para assitir videos de uma API",
            image: img3,
            href: "/projeto/VidFlow",
        },
        {
            title: "Reconhecimento de Voz",
            description: "Aplicacao que reconhece sua voz",
            image: img4,
            href: "/projeto/Reconhecimento-de-Voz",
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
