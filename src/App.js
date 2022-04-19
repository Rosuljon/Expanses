import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const dummy_expenses = [
  {
    id: 'e1',
    title: 'Food',
    amount: 300,
    date: new Date(2021,7,14),
  },
  {
    id: 'e2',
    title: 'buying phone',
    amount: 1200,
    date: new Date(2022,9,15),
  },
  {
    id: 'e3',
    title: 'bicycle',
    amount: 100,
    date: new Date(2022,2,1),
  },
  
];

function App() {

  const [expenses, setExpenses] = useState(dummy_expenses);
  
  const addExpenseHandler = (expense) =>{
    setExpenses(prev_expenses =>{
      return [expense, ...prev_expenses]
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
     <Expenses expenses = {expenses}></Expenses>
    </div>
  );
}

export default App;
