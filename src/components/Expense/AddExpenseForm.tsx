import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Expense } from "../../types/types"; 
const AddExpenseForm = () => {
  // Exercise: Consume the AppContext here
  const expenseContext = useContext(AppContext);
  const { expenses, setExpenses} = expenseContext;
  // Exercise: Create name and cost to state variables
  const [name, setName] = useState<string>("");
  const [cost, setCost] = useState<number>(0);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const id =  expenses.length + 1;
    const newExpense: Expense = {
      id: id.toString(),
      name: name,
      cost: cost,
  };
    // Exercise: Add add new expense to expenses context array
    setExpenses([...expenses, newExpense]);
  };

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            value={name}
            // HINT: onChange={}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            required
            type="number"
            className="form-control"
            id="cost"
            value={cost}
            onChange={(event) => setCost(parseFloat(event.target.value))}
          ></input>
        </div>
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddExpenseForm;
