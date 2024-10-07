import { useParams } from "react-router-dom";

// Import Images

function ProjetoAbout() {

    const projetos = [
        {
            title: "Fokus",
            description: "Aplicacao que tem como objetivo aumentar o foco nas atividades",
            url: "https://github.com/Luiz0770/Fokus"
        },
        {
            title: "Consulta-Filmes",
            description: "Aplicacao para consultar filmes de uma API",
            url: "https://github.com/Luiz0770/Consultar-Filme"
        },
        {
            title: "VidFlow",
            description: "Aplicacao para assitir videos de uma API",
            url: "https://github.com/Luiz0770/VidFlow"
        },
        {
            title: "Reconhecimento-de-Voz",
            description: "Aplicacao que reconhece sua voz",
            url: "https://github.com/Luiz0770/Reconhecimento-de-voz"
        },
    ];

    const { id } = useParams()
    const projeto = projetos.find(projeto => projeto.title == id)
    console.log(projeto)

    return (
        <main>
            <div className="container mx-auto p-4 h-screen flex flex-col justify-center items-center gap-5">
                <h1 className="text-8xl">{projeto.title}</h1>
                <p className="text-2xl">{projeto.description}</p>
                <a href={projeto.url} className="py-2 px-5 bg-blue-500 rounded">Saiba Mais</a>
            </div>
        </main>
    );
}

export default ProjetoAbout;