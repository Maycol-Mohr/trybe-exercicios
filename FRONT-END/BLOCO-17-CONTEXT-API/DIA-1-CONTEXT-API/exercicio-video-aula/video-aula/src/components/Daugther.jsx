import React, { Component } from 'react'
import MyContext from './MyContext'

class Daugther extends Component {
  render() {
    return (
      <div>
        <h4>Eu sou a filhaaaaaaa!!</h4>
        <MyContext.Consumer>
            {
                value => (
                    <div>
                      <p>money={`Eu tenho ${value.money} pra gastar!!!`}</p>
                      <button onClick={value.spendMoney}>PEDIR UM IFOOD</button>
                    </div>
                )
            }
        </MyContext.Consumer>
      </div>
    )
  }
}

export default Daugther