import './index.css'

const TransactionItem = props => {
  const {love, deleteFunctionMain} = props
  const {id, title, amount, type} = love

  const deleteFunction = () => {
    deleteFunctionMain(id, amount, type)
  }

  return (
    <li className="tr1">
      <p className="tr-item">{title}</p>
      <p className="tr-item">Rs {amount}</p>
      <p className="tr-item">{type}</p>
      <button
        data-testid="delete"
        type="button"
        onClick={deleteFunction}
        className="heading-delete"
      >
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default TransactionItem
