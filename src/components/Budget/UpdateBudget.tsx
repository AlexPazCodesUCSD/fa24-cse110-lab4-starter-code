import React, {useState, useContext} from "react"
import {AppContext} from "../../context/AppContext"

const UpdateBudgetForm = () => {
  const {budget, setBudget} = useContext(AppContext);
  
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="cost">Budget</label>
          <input
            required
            type="number"
            className="form-control"
            id="cost"
            value={budget}
            onChange={(event) => setBudget(parseFloat(event.target.value))}
          ></input>
        </div>

      </div>
    </form>
  );
};

export default UpdateBudgetForm