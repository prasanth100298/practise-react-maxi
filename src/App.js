import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { title: "Car Insurance", amount: 294.56, date: new Date(2025, 2, 28) },
    { title: "Toilet paper", amount: 94.56, date: new Date(2024, 7, 14) },
    { title: "New desk", amount: 450.0, date: new Date(2025, 5, 28) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
