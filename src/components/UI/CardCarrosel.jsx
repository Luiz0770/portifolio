
export default function CardCarrosel({ projeto }) {
    return (
        <div
            className="rounded dark:bg-neutral-700">
                <img
                    src={projeto.image}
                    alt={projeto.title}
                    width={600}
                    height={300}
                    className="h-full w-full rounded-t object-cover"
                />
            )
            <div className="p-3">
                <h5
                    className="text-lg">
                    {projeto.title}
                </h5>
            </div>
        </div>
    );
}