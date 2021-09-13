import {Component} from 'react'
import CashItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {cash: 2000}

  reduceFunction = value => {
    const {cash} = this.state
    const reduceValue = cash - value

    this.setState({cash: reduceValue})
  }

  render() {
    const {cash} = this.state
    const {denominationsList} = this.props
    return (
      <div className="container">
        <div className="box">
          <div className="upperPart">
            <div className="blueBox">
              <p>S</p>
            </div>
            <p className="head">Sarah Williams</p>
          </div>
          <div className="secondPart">
            <p className="balanceElement">Your Balance</p>
            <div>
              <p className="cashElement">{cash}</p>
              <p className="rupeesElement">In Rupees</p>
            </div>
          </div>
          <div>
            <p className="withDrawElement">Withdraw</p>
            <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="ulContainer">
            {denominationsList.map(eachItem => (
              <CashItem
                props={eachItem}
                id={eachItem.id}
                updateBalance={this.reduceFunction}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
