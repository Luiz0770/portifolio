import { useParams } from "react-router-dom";

export default function Projects() {

    const { id } = useParams()

    return (
        <main>
            <div className="container mx-auto p-4">
                <h1 className="my-10 text-5xl text-center">{id}</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div>
                        <h2>{}</h2>
                    </div>
                </div>

            </div>
        </main>
    );
}