import { Link } from "react-router-dom";

export default function Contact() {
    return (
        <>
            <section id="contact">
                <div className="my-64 flex flex-col items-center justify-center rounded-lg px-8 py-16 text-center xl:py-24">
                    <h2 className="text-4xl font-medium xl:text-6xl">
                        Venha Trabalhar Comigo!
                    </h2>
                    <p className="mt-1.5 xl:text-lg">
                        I&apos;m currently available for freelance work and open to
                        discussing new projects.
                    </p>
                    <Link href="mailto:ramosluizfelipe104@gmail.com">
                        <button className="mt-6">Get in touch</button>
                    </Link>
                </div>
            </section>
        </>
    );
}
