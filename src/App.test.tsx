import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('Add 5 expenses that increase by 50 to test expense creation', () => {
  render(<App />);
  const expenseName = screen.getByTestId("nameInput");
  const expenseCost = screen.getByTestId("costInput");
  for(let i = 0; i < 5; i++){
    const expenseSubmitButton = screen.getByText("Save");
    fireEvent.change(expenseName, {target: {value: "Test " + (i+1)}})
    fireEvent.change(expenseCost, {target: {value: 50 * (i+1)}})
    fireEvent.click(expenseSubmitButton);
  }

  for(let i = 0; i < 5; i++){
    expect("Test " + (i+1)).toBeInTheDocument();
    expect((50 * (i + 1))).toBeInTheDocument();
  }
});

test('Delete 3 expenses and ensure only 2 expenses are left to test expense deletion', () => {
  render(<App/>);
  const expenseName = screen.getByTestId("nameInput");
  const expenseCost = screen.getByTestId("costInput");
  for(let i = 0; i < 5; i++){
    const expenseSubmitButton = screen.getByText("Save");
    fireEvent.change(expenseName, {target: {value: "Test " + (i+1)}})
    fireEvent.change(expenseCost, {target: {value: 10 * (i+1)}})
    fireEvent.click(expenseSubmitButton);
  }

  const expenseDelete5 = screen.getByTestId("delete5");
  const expenseDelete3 = screen.getByTestId("delete3");

  fireEvent.click(expenseDelete5);
  fireEvent.click(expenseDelete3);

  expect(screen.queryByText("Test 5")).not.toBeInTheDocument();
  expect(screen.queryByText("Test 3")).not.toBeInTheDocument();


});

test('Test that alert occurs when remainingExpense is < 0', () => {
  render(<App/>);
  const expenseName = screen.getByTestId("nameInput");
  const expenseCost = screen.getByTestId("costInput");
  const expenseSubmitButton = screen.getByText("Save");
  fireEvent.change(expenseName, {target: {value: "Test " + (1)}})
  fireEvent.change(expenseCost, {target: {value: 1001}})
  fireEvent.click(expenseSubmitButton);

  expect(window.alert);
});
