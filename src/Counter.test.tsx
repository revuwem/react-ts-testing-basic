import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("changes count state", () => {
  render(<Counter />);

  const buttonElement = screen.getByText("Add one");
  const elementInfo = screen.getByRole("contentinfo");

  fireEvent.click(buttonElement);
  expect(elementInfo).toHaveTextContent("Count is 1");
});
