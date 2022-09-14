import React, { Component } from 'react'
import MyContext from './MyContext';

class Daugther extends Component {
  render() {
    return (
      <div>
        <h1>Eu sou a filhaaaaaaaaaaaaaaaaaa!</h1>
        <MyContext.Consumer>
            {
                value => (
                    <div>
                      <p>{`Eu tenho R$ ${value.money} para gastar.`}</p>
                      <button onClick={value.spendMoney}>PEDIR UM IFOOD!</button> 
                    </div>
                )
            }
        </MyContext.Consumer>
        {/* <p>{`Eu tenho R$ ${this.props.money} para gastar.`}</p>
        <button onClick={this.props.spendMoney}>PEDIR UM IFOOD!</button> */}
      </div>
    )
  }
}

export default Daugther;