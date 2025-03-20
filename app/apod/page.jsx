import Link from 'next/link';
import "./home.css"

export default function ApodPage(){
    return(
        <main className="apod">
            <Link href="/" passHref>
                <button className="back-button">Volver al Inicio</button>
            </Link>
            <section className="head-apod">
                <h1>APOD API</h1>
                <Link href={"https://github.com/TheCYA/apod-api"}>
                    <button>Repositorio en GitHub</button>
                </Link>
                <p>Aplicación que muestra la imagen o video del día que prefieras, con una descripción de la misma</p>
                <img src="/apod/api.png"></img>
            </section>
            <section className='content-apod'>
                <h2>Características</h2>
                <article>
                    <h3>Buscador</h3>
                    <p>Selecciona el día en el calendario para buscar la imagen del día, para mayor comodidad, cuenta con 2 vistas, la predeterminada, para buscar entre los días del mes, la 2da para navegar entre los meses del año</p>
                    <img src="/apod/buscador.png"></img>
                    <img src='/apod/años.png'></img>
                </article>
                <article>
                    <h3>Modal</h3>
                    <p>Para mostrar la imagen, se abre un modal que tendrá un estado de carga en lo que se solicita la imagen a la api</p>
                    <img src="/apod/cargando.png"></img>
                    <img src='/apod/modal.png'></img>
                </article>
            </section>
        </main>
    )
}