import './index.css'

const MoneyDetails = props => {
  const {expenses, income, amount} = props

  return (
    <div className="alignment">
      <div className="money-card1">
        <img
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div>
          <p>Your Balance</p>
          <p data-testid="balanceAmount">Rs {amount}</p>
        </div>
      </div>
      <div className="money-card2">
        <img
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div>
          <p>Your Income</p>
          <p data-testid="incomeAmount">Rs {income}</p>
        </div>
      </div>

      <div className="money-card3">
        <img
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div>
          <p>Your Expenses</p>
          <p data-testid="expensesAmount">Rs {expenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
