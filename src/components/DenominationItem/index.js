import './index.css'

const CashItem = eachItem => {
  const {props, updateBalance} = eachItem
  const {value} = props

  const update = () => {
    updateBalance(value)
  }

  return (
    <li>
      <button type="button" className="but" onClick={update}>
        {value}
      </button>
    </li>
  )
}

export default CashItem
