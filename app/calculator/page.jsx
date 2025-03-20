import "./home.css"
import Link from 'next/link';

export default function Calculator() {
    return (
        <main className="calculator">
            <Link href="/" passHref>
                <button className="back-button">Volver al Inicio</button>
            </Link>

            <section className="head-calculator">
                <h2>Calculadora Básica</h2>
                <Link href={"https://github.com/TheCYA/calculator"}>
                    <button>Repositorio en GitHub</button>
                </Link>
                <p>
                    Realizado usando el framework NextJs, Un proyecto sencillo para probar el uso de hooks básicos 
                    de react, lógica simple de JavaScript y diseño responsive con css.
                </p>
                <img src="/calculadora/calc-main.png" alt="Captura de pantalla de la calculadora" />
            </section>
            <section className="content-calculator">
                <h2>Características</h2>
                <article>
                    <h3>Cambio de tema (Claro/Oscuro)</h3>
                    <img src="/calculadora/calc (7).png" alt="Captura de pantalla del cambio de tema" />
                </article>
                <article>
                    <h3>Operaciones Básicas</h3>
                    <img src="/calculadora/calc (6).png" alt="Captura de pantalla de operaciones básicas" />
                </article>
                <article>
                    <h3>Historial de Operaciones</h3>
                    <img src="/calculadora/calc (5).png" alt="Captura de pantalla del historial de operaciones" />
                </article>
                <article>
                    <h3>Operar sobre el resultado</h3>
                    <div className="images">
                        <img src="/calculadora/calc (4).png" alt="Captura de pantalla de operar sobre el resultado" />
                        <img src="/calculadora/calc (3).png" alt="Captura de pantalla de operar sobre el resultado" />
                        <img src="/calculadora/calc (2).png" alt="Captura de pantalla de operar sobre el resultado" />
                    </div>
                </article>
            </section>
        </main>
    );
}