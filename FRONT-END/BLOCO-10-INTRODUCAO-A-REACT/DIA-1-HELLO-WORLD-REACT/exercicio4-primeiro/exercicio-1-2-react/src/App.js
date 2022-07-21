import { Component } from 'react';


/*
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
*/

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Acordar', 'Tomar café', 'Escovar os dentes', 'Ir trabalhar'];

class App extends Component  {
  render() {
    return (
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    );
    
    /*
    const compromissos = ["Estudar", "Aprender", "Ouvir", "Pensar", "Compreender", "Evoluir"] // adicione mais tarefas aqui
    const tasksElements = compromissos.map((compromisso) => <li>{compromisso}</li>) // cria um array de tags <li>  e tarefas
    return (
      <div>{ Task(tasksElements) }</div>
    )
    */
  }
}

export default App;
