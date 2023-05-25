import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const onSaveExpenseDataHandler = (entereExpenseData) => {
    const expenseData = {
      ...entereExpenseData,
      id: Math.random.toString(),
    };
    // console.log(expenseData);
    props.onAddNewExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
