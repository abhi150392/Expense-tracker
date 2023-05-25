import React, { useState } from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // let title = props.title;

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    // title = "updated title";
    setTitle("Updated title or title Changed!!!!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
      </div>
      <div className="expense-item__price">${props.amount}</div>
      <button onClick={clickHandler}>Change Title!!!</button>
    </Card>
  );
};

export default ExpenseItem;
