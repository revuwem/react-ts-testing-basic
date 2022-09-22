import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonWrapper from "./ButtonWrapper";

test("fires onClick", () => {
  const onClick = jest.fn();
  render(<ButtonWrapper onClick={onClick} title="Add Item" />);
  const buttonElement = screen.getByText("Add Item");
  fireEvent.click(buttonElement);
  expect(onClick).toHaveBeenCalledTimes(1);
});
