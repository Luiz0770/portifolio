import { useState } from "react";

export default function Forms() {

    const [nome, SetNome] = useState("")
    const [email, SetEmail] = useState("")
    const [text, SetText] = useState("")

    function aoEnviar(e) {
        e.preventDefault()

        SetNome(e.target[0].value)
        SetEmail(e.target[1].value)
        SetText(e.target[2].value)

        const mensagem = {
            nome,
            email,
            text,
        }
        console.log(mensagem)
    }

    return (
        <form action="" onSubmit={aoEnviar} className="mt-10 flex flex-col gap-7 w-4/5 px-9">
            <div className="flex flex-col text-2xl gap-3">
                <label htmlFor="name" className="self-start">Digite seu nome:</label>
                <input type="text" name="name" className="border bg-transparent rounded py-1 p-3" placeholder="Test...." />
            </div>
            <div className="flex flex-col text-2xl gap-3">
                <label htmlFor="email" className="self-start">Digite seu email:</label>
                <input type="email" name="email" className="border bg-transparent rounded py-1 p-3"placeholder="test@gmail.com" />
            </div>
            <div className="flex flex-col text-2xl gap-3">
                <label htmlFor="textarea" className="self-start">Digite sua mensagem:</label>
                <textarea name="textarea" id="textarea" className="border bg-transparent rounded py-2 p-3 h-44"></textarea>
            </div>
            <button className="mt-6 bg-blue-500 w-max py-3 px-7 rounded-md hover:bg-slate-500 ease-in duration-200">Enviar</button>
        </form>
    );
}
