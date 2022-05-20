import dateFormat from "./common/dateFormat";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 1200000, date: new Date(2021, 2, 28) },
    { title: "Car Test1", amount: 1201230, date: new Date(2021, 3, 1) },
    { title: "Car test2", amount: 1255500, date: new Date(2021, 4, 5) },
    { title: "Car test3", amount: 5200000, date: new Date(2021, 5, 15) },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
