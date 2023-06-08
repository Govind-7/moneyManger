import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import './index.css'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    amount: 0,
    income: 0,
    expenses: 0,
    transactionsLis: [],
  }

  deleteFunctionMain = (id, amount, type) => {
    const {transactionsLis} = this.state
    // console.log(amount)
    const CBI = transactionsLis.filter(item => item.id !== id)

    if (type === 'Income') {
      this.setState(prev => ({
        amount: prev.amount - parseInt(amount),
        income: prev.income - parseInt(amount),
        transactionsLis: CBI,
      }))
    } else if (type === 'Expenses') {
      this.setState(prev => ({
        amount: prev.amount + parseInt(amount),
        expenses: prev.expenses - parseInt(amount),
        transactionsLis: CBI,
      }))
    }
  }

  addFunction = () => {
    const title = document.getElementById('title').value
    const amount = document.getElementById('amount').value
    const type = document.getElementById('type').value

    if (type === 'INCOME' && amount !== '' && title !== '') {
      const amount1 = parseInt(amount)
      const newObj = {id: uuidv4(), title, amount, type: 'Income'}

      this.setState(prev => ({
        amount: prev.amount + amount1,
        income: prev.income + amount1,
        // title,
        // type,
        transactionsLis: [...prev.transactionsLis, newObj],
      }))
      document.getElementById('title').value = ''
      document.getElementById('amount').value = ''
    } else if (type === 'EXPENSES' && amount !== '' && title !== '') {
      const amount2 = parseInt(amount)
      const newObj = {id: uuidv4(), title, amount, type: 'Expenses'}

      this.setState(prev => ({
        amount: prev.amount - amount2,
        expenses: prev.expenses + amount2,
        // title: '',
        // type,
        // enterdAmount: amount,
        transactionsLis: [...prev.transactionsLis, newObj],
      }))
      document.getElementById('title').value = ''
      document.getElementById('amount').value = ''
      document.getElementById('type').value = 'INCOME'
    }
  }

  render() {
    const {income, amount, expenses, transactionsLis} = this.state

    return (
      <div className="bg">
        <div className="f-bg">
          <h1>Hi,Richards </h1>
          <p>
            Welcome back to your <span className="lastOne">Money Manager</span>
          </p>
        </div>

        <div>
          <MoneyDetails income={income} amount={amount} expenses={expenses} />
        </div>
        <div className="history-align">
          <div className="add-trans">
            <h1>Add transaction</h1>
            <label htmlFor="title">TITLE</label>
            <br />
            <input
              placeholder="TITLE"
              className="input-element"
              id="title"
              type="text"
            />
            <br />
            <label htmlFor="amount">AMOUNT</label>
            <br />
            <input
              placeholder="AMOUNT"
              className="input-element"
              id="amount"
              type="text"
            />
            <br />
            <label htmlFor="type">TYPE</label>

            <br />
            <select className="input-element" id="type">
              {transactionTypeOptions.map(item => (
                <option key={item.optionId} value={item.optionId}>
                  {item.displayText}
                </option>
              ))}
            </select>
            <br />
            <button
              className="add-button"
              type="button"
              onClick={this.addFunction}
            >
              Add
            </button>
          </div>

          <div className="add-trans">
            <h1>History</h1>
            <div className="headings">
              <p className="heading">Title</p>
              <p className="heading">Amount</p>
              <p className="heading">Type</p>
            </div>

            <ul>
              {transactionsLis.map(item => (
                <TransactionItem
                  key={item.id}
                  love={item}
                  deleteFunctionMain={this.deleteFunctionMain}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
