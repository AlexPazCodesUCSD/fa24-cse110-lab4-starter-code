import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);

  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const [remainingExpenses, setRemainingExpenses] = useState<number>(budget - totalExpenses);

  
  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  // Exercise: Create an alert when Remaining is less than 0.
  useEffect(() => {
    setRemainingExpenses(budget - totalExpenses);
  }, [expenses]);

  useEffect(() => {
    if(remainingExpenses < 0){
      alert("You have exceeded your budget");
    }
  }, [remainingExpenses]);

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
