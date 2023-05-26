import React, { useState } from "react";
import ExpenseItem from "../Expenses/ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    console.log("Expenses Js");
    console.log(selectedYear);
    setYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense?.date?.getFullYear()?.toString() === year;
  });
  console.log(filteredExpenses);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onSelectedYear={filterChangeHandler} />
        {filteredExpenses.length === 0 ? (
          <p>No Expenses found</p>
        ) : (
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))
        )}
      </Card>
    </div>
  );
};

export default Expenses;
