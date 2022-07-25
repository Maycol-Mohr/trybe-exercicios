
/*
import React from 'react';
import './App.css';
*/
/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
/*
class App extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)
    this.state = {
      numeroDeCliques: 0
    }

  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
  }
  
  render() {
    console.log(this);
    return (
        <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
    )
  }
}

export default App;
*/



/*
import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
    console.log(this)
    return <span>Hello, world!</span>
  }
}

export default App;
*/


/*
import React from 'react';
import './App.css';
*/
/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */
/*
class App extends React.Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this)

    console.log('componente sendo construido');
  }

  handleClick() {
    console.log(this);
    console.log('CLICOU!')
  }
  
  render() {
    console.log(this);
    return (
        <button onClick={this.handleClick}>meu botao</button>
    )
  }
}

export default App;
*/



import React from 'react';
import './App.css';

/* Embora isso funcione, essa DEFINITIVAMENTE
não é a maneira correta de se criar eventos
em React! A função se refere ao componente,
então deve ser parte de sua classe! */



class App extends React.Component {
  /* Repare que, diferentemente do HTML, no
  JSX você associa uma função a um evento
  passando a própria função entre chaves `{}` */

  constructor() {
    super()

    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0
    }

    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClick = this.handleClick.bind(this)
    this.handleClick2 = this.handleClick2.bind(this)
    this.handleClick3 = this.handleClick3.bind(this)
  }

  handleClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(this.state.numeroDeCliques)}`);
    })
  }
  
  handleClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 + 1
    }), () => {
      console.log(`Botão 2 ${this.getButtonColor(this.state.numeroDeCliques2)}`);
    })
  }
  
  handleClick3() {
    this.setState(({ numeroDeCliques3 }) => ({
      numeroDeCliques3: numeroDeCliques3 + 1
    }), () => {
      // Aqui imprimimos a cor no console após o setState atualizar
      // a quantidade de clicks no botão
      console.log(`Botão 3 ${this.getButtonColor(this.state.numeroDeCliques3)}`);
    })
  }
     
  // Para essa função, não precisamos utilizar o bind porque ela é utilizada
  // apenas dentro do contexto do componente App
    getButtonColor(num) {
      // Essa função contém um ternário que realiza a lógica para mudarmos
      // a cor do botão para verde quando for um número par
      return num % 2 === 0 ? 'green' : 'white';
    }
  
  render() {
    const { numeroDeCliques, numeroDeCliques2, numeroDeCliques3 } = this.state;
    return (
      <div>
        <button 
          onClick={this.handleClick}
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques) }}
        >
          Botao 1 | Count: { numeroDeCliques }</button>
          
          <button 
          onClick={this.handleClick2}
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques2) }}
        >
          Botao 2 | Count: { numeroDeCliques2 }</button>

          <button 
          onClick={this.handleClick3}
          style={{ backgroundColor: this.getButtonColor(numeroDeCliques3) }}
        >
          Botao 3 | Count: { numeroDeCliques3 }</button>
      </div>
    )
  }
}

export default App;
