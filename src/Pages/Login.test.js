/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "./Login";
import React from "react";
test("LoginForm submits correct data", () => {
  const handleSubmitForm = jest.fn();
  const { asFragment }=render(<Login onSubmit={handleSubmitForm} />);

  // Fill out the form
  fireEvent.change(screen.getByPlaceholderText("Email"), {
    target: { value: "test@example.com" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "password123" },
  });

  // Submit the form
  fireEvent.click(screen.getByText("Sign in"));

  // Check if the form was submitted with the correct data
  expect(handleSubmitForm).toHaveBeenCalledWith({
    email: "test@example.com",
    password: "password123",
  });
  expect(asFragment()).toMatchSnapshot();
});
