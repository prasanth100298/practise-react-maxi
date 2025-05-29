import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


const ExpenseItem = (props) => {

  return (
    <div className='Expense-item'>
      <ExpenseDate date= {props.date}/>
      <div className='Expense-item__description'>
        <h2>{props.title}</h2>
        <div className='Expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
