import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ZustandCounter from "./ZustandCounter";
import { useStore } from "./zustandStore";

// reset global state before each test run
const originalState = useStore.getState();
beforeEach(() => useStore.setState(originalState));

test("should increment", () => {
  render(<ZustandCounter />);

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);
  expect(counter).toHaveTextContent("1");
});

test("should increment again", () => {
  render(<ZustandCounter />);

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const addButton = screen.getByText(/Increment/i);
  fireEvent.click(addButton);
  expect(counter).toHaveTextContent("1");
});
