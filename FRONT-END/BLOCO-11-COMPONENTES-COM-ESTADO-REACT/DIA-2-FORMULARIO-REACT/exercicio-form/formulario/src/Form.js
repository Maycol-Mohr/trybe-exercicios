


/*
import React, { Component } from 'react'
import EstadoFavorito from './EstadoFavorito';
import EstadoFavorito2 from './EstadoFavorito2';
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      melhorTime: '',
      nome: '',
      email: '',
      vaiTorcer: false,
      timeFavorito: '',
      formularioComErros: true
    };
  }

  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { email, vaiTorcer } = this.state;
    return (
      <div>
        <h1>Pesquisa para saber qual o melhor time do Estado do Rio de Janeiro</h1>
        <form className="form">
         <fieldset>
         <EstadoFavorito value={this.state.melhorTime} handleChange={this.handleChange}/>
         <EstadoFavorito2 value={this.state.nome} handleChange={this.handleChange}/>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={email} 
              onChange={this.handleChange} 
            />
          </label>

          <label>
            Vai torcer para um time ?
            <input
              type="checkbox"
              name="vaiTorcer"
              value={vaiTorcer} 
              onChange={this.handleChange}
            />
          </label>
         </fieldset>
          <label>
            Melhor Time:
          <select 
              name="timeFavorito" 
              value={this.state.timeFavorito} 
              onChange={this.handleChange}>
            <option value="">Selecione</option>
            <option value="Vasco">Vasco</option>
            <option value="Botafogo">Botafogo</option>
            <option value="Fluminense">Fluminense</option>
            <option value="Flamengo">Flamengo</option>
          </select>
          </label>

          <label>
            Input
            <input type="file"/>
          </label>
        
        </form>
        
      </div>
    );
  }
}

export default Form;
*/





/*
import React, { Component } from 'react'
import EstadoFavorito from './EstadoFavorito';
import './Form.css'

class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      estadoFavorito: '',
      nome: '',
      email: '',
      idade: 0,
      vaiComparecer: false,
      palavraChaveFavorita: ''
    };
  }

//name == estado favorito ou name == email baixo ficara no lugar do [name] o email ou estado favorito ou idade etc - assume valor
  handleChange({ target }) {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <h1>Estados e React - Tecnologia fantástica ou reagindo a regionalismos?</h1>
        <form className="form">
            <EstadoFavorito value={this.state.estadoFavorito} handleChange={this.handleChange}/>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={this.state.email} 
              onChange={this.handleChange} 
            />
          </label>

          <label>
            Nome:
            <input
              type="text"
              name="nome"
              value={this.state.nome} 
              onChange={this.handleChange} 
            />
          </label>

          <label>
            Idade:
            <input
              type="number"
              name="idade"
              value={this.state.idade} 
              onChange={this.handleChange} 
            />
          </label>

          <label>
            Vai comparecer a conferência ?
            <input
              type="checkbox"
              name="vaiComparecer"
              value={this.state.vaiComparecer} 
              onChange={this.handleChange}
            />
          </label>

          <label>
            Escolha sua palavra chave favorita:
          <select 
              name="palavraChaveFavorita" 
              value={this.state.palavraChaveFavorita} 
              onChange={this.handleChange}
          >
            <option value="Componente">Componente</option>
            <option value="Estado">Estado</option>
            <option value="Evento">Evento</option>
            <option value="Props">Props</option>
          </select>
          </label>
          
        </form>
      </div>
    );
  }
}

export default Form;
*/