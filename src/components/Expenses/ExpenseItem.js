import { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';


const ExpenseItem = (props) => {

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!!');
  };

  return (
    <div className='Expense-item'>
      <ExpenseDate date= {props.date}/>
      <div className='Expense-item__description'>
        <h2>{title}</h2>
        <div className='Expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </div>
  );
}

export default ExpenseItem;
