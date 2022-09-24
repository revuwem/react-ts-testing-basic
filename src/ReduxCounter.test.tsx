import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReduxCounter from "./ReduxCounter";
import { Provider } from "react-redux";
import { createStore } from "./store";

test("should increment", () => {
  // use createStore to create store on each test
  // which will not affect to the other test runs
  render(
    <Provider store={createStore()}>
      <ReduxCounter />
    </Provider>
  );

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);
  expect(counter).toHaveTextContent("1");
});
