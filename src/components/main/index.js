import React from "react";
import './style.css';

export default function Main(){
    return(
        <main className="modo-escuro">
            <div className="largura-limitada">
                <article>
                    <h1>Bem-vindo a Barber Shop</h1>

                    <p><strong>Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</strong></p>

                    <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>

                    <h1 className="great-vibes titulo-colorido">S. Kelly</h1>
                </article>
            </div>
        </main>
    )
}