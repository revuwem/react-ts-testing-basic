import React from "react";
import { render, screen } from "@testing-library/react";
import Person from "./Person";

test("renders hello with name", () => {
  render(<Person name="Karina" />);
  const divElement = screen.getByRole("contentinfo");
  expect(divElement).toHaveTextContent("Hello, Karina");
  expect(divElement).toHaveAttribute("role", "contentinfo");
});

// test("renders hello with name", () => {
//   render(<Person name="Karina" />);
//   const textElement = screen.getByText(/Hello, Karina/i);
//   expect(textElement).toBeInTheDocument();
// });
