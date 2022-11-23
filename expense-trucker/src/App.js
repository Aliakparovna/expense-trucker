import ExpenseItem from './components/ExpenseItem'
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    {
      id: 'el1',
      title: 'Car Insuranse',
      date: new Date(2022, 1, 25),
      prise: 4,
    },
    {
      id: 'el2',
      title: 'Tualet paper',
      date: new Date(2022, 1, 25),
      prise: 200,
    },
    {
      id: 'el3',
      title: 'Course',
      date: new Date(2022, 11, 12),
      prise: 150,
    },
    {
      id: 'el4',
      title: 'Car Insuranse',
      date: new Date(2022, 6, 24),
      prise: 100,
    },
  ]
  return (
    <div>
      <ExpenseItem items ={expenses[0]}/>
      <ExpenseItem items ={expenses[1]}/>
      <ExpenseItem items ={expenses[2]}/>
      <ExpenseItem items ={expenses[3]}/>
      <Expenses/>
    </div>
  ); 
}

export default App;
