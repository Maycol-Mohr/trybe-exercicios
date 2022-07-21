import React, { Component } from 'react';

import "./App.css";

class About extends Component {
    render() {
        const skills = ["HTML", "CSS", "JAVASCRIPT", "TERMINAL-LINUX", "GIT", "GITHUB"] // adicione mais habilidades aqui
        const jsxSkills = skills.map((skill) => <li>{skill}</li>) // cria um array de tags <li>
        return (
         <div className='about'>
           <h1>Maycol Michel Mohr</h1>
           <p>Tenho 45 anos e atualmente estudo programaçao na Trybe. Estamos estudando React.</p>
           <h2>Minhas habilidades:</h2>
           <ul>{jsxSkills}</ul>
           <img src='https://st2.depositphotos.com/6544740/9337/i/600/depositphotos_93376372-stock-photo-sunset-over-sea-pier.jpg' alt='Erro ao carregar imagem!'></img>
         </div>
        )
    }        
}

export default About;