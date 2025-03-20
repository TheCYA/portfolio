"use client"
import "./home.css"
import { FaHtml5, FaNodeJs, FaCss3Alt, FaJsSquare, FaReact  } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { MdContactPhone, MdEmail } from "react-icons/md";
import { IconContext } from "react-icons";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <section className="main">
      <h2>HOLA, SOY CARLOS</h2>
      <h1>ASPIRANTE A DESARROLLADOR FULL STACK</h1>

    </section>
    <section className="about">
      <h2>Sobre Mi</h2>
      <p>Soy un joven desarrollador apasionado en el desarrollo web usando tecnologías escalables e innovadoras como NEXT.JS, React Express y node.JS</p>
    </section>
    <section className="projects">
      <h2>Proyectos</h2>
      <div className="container">
        <Link href={"/calculator"}>
          <article>
            <img src="/calculadora/calc.png" alt="proyecto 1"></img>
            <h3>Calculadora Básica</h3>
            <p>Una calculadora básica, con historial y cambio de tema</p>
          </article>
        </Link>
        <Link href={"/snake"}>
          <article>
            <img src="/snake/snake.png" alt="proyecto 2"></img>
            <h3>Juego snake</h3>
            <p>El clásico juego de snake para navegador</p>
          </article>
        </Link>
        <Link href={"/apod"}>
          <article>
            <img src="/apod/api.png" alt="proyecto 3"></img>
            <h3>APOD API</h3>
            <p>Una página sencilla con un buscador de imagenes que consume la API de la NASA</p>
          </article>
        </Link>
      </div>      
    </section>
    <section className="skills">
      <h2>Habilidades</h2>
      <div className="container">
        <IconContext.Provider value={{ size: "2rem"}}>
          <div><FaHtml5 color="#E44D26"/>HTML</div>
          <div><FaCss3Alt color="#1572B6"/>CSS</div>
          <div><FaJsSquare color="#F7DF1E" />JavaScript</div>
          <div><FaReact color="#61DAFB"/>React</div>
          <div><RiNextjsFill color="var(--icon-nextjs-color)"/>Next.js</div>
          <div><FaNodeJs color="#68A063"/>Node.js</div>
          <div><SiExpress color="var(--icon-express-color)"/>Express</div>
          <div><BiLogoPostgresql color="#4478ac"/>PostgreSQL</div>
        </IconContext.Provider>
      </div>
    </section>
    <section className="contact">
      <h2>Contacto</h2>
      <p>¿Interesado en trabajar juntos? ¡Contáctame!</p>
      <div className="container">
        <div><MdContactPhone /> Tel: +52 56 1029 2897</div>
        <div><MdEmail /> Email: thecyacya@gmail.com</div>
      </div>
    </section>
    </>
  );
}
