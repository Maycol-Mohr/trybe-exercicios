import React, { Component } from 'react'
import Grandmother from './Grandmother';
import MyContext from './MyContext';

class GreatGranmother extends Component {
    constructor(props) {
        super(props)
        this.state= {
            money: 1000000000
        }
        this.handleSpendMoney = this.handleSpendMoney.bind(this);
    }

    handleSpendMoney() {
        this.setState((prevState)=> ({money: prevState.money - 1000}))
    }

  render() {
    const contextValue = {
        money: this.state.money,
        spendMoney: this.handleSpendMoney,
    }
    return (
      <MyContext.Provider value={contextValue}>
        <div>
          <h1>Eu sou a bisavó!</h1>
          <Grandmother money={this.state.money} spendMoney={this.handleSpendMoney}/>
      </div>
      </MyContext.Provider>
    )
  }
}

export default GreatGranmother;
 