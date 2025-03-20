import Link from 'next/link';
import "./home.css"
export default function SnakePage(){
    return(
        <main className="snake">
            <Link href="/" passHref>
                <button className="back-button">Volver al Inicio</button>
            </Link>
            <section className="head-snake">
                <h1>Snake</h1>
                <Link href={"https://github.com/TheCYA/Snake"}>
                    <button>Repositorio en GitHub</button>
                </Link>
                <p>Clásico Juego Snake para navegador, funcionamiento con botones y el teclado</p>
                <img src="/snake/snake.png"></img>
            </section>
            <section className='content-snake'>
                <h2>Características</h2>
                <article>
                    <h3>Controles</h3>
                    <p>El juego se controla con las flechas del teclado o con los botones de la pantalla</p>
                    <img src="/snake/snake1.png"></img>
                </article>
                <article>
                    <h3>Comida</h3>
                    <p>La comida aparece en lugares aleatorios del tablero, al comerla la serpiente crece y la puntuacion aumenta</p>
                    <img src="/snake/snake2.png"></img>
                </article>
                <article>
                    <h3>Game Over</h3>
                    <p>El juego termina cuando la serpiente choca con los bordes del tablero o con su propio cuerpo</p>
                    <img src="/snake/snake.png"></img>
                </article>
            </section>
        </main>
    )
}