import './ExpenseItem.css';

function ExpenseItem(props) {

  return (
    <div className='Expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='Expense-item__description'>
        <h2>{props.title}</h2>
        <div className='Expense-item__price'>${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
