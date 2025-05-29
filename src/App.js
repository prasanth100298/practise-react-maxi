import Expense from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.56, date: new Date(2025, 2, 28) },
    { title: "Toilet paper", amount: 94.56, date: new Date(2024, 7, 14) },
    { title: "New desk", amount: 450.0, date: new Date(2025, 5, 28) },
    ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expense item={expenses}/>
    </div>
  );
}

export default App;
