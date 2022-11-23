import "./ExpenseDate.css"

const ExpenseDate =(props)=>{
   
    const month = props.expenseDate.toLocaleString('En-us', {month:'long'})
    const day = props.expenseDate.toLocaleString('En-us',{day:'2-digit'})
    const year = props.expenseDate.getFullYear()

    return(
    <div className="expense-date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__year">{year}</div>
    </div>
    );
};
export default ExpenseDate;