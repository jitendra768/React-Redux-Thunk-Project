/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { fireEvent, render, screen } from "@testing-library/react";
import Register from "./Register";
import React from "react";

test("RegisterForm submits correct data", () => {
  const handleSubmit = jest.fn();
  const {asFragment}=render(<Register onSubmit={handleSubmit} />);

  fireEvent.change(screen.getByTestId("email-input"), {
    target: { value: "john@example.com" },
  });

  fireEvent.change(screen.getByTestId("password-input"), {
    target: { value: "password123" },
  });

  fireEvent.change(screen.getByTestId("confirmPassword-input"), {
    target: { value: "password123" },
  });

  fireEvent.click(screen.getByTestId("register-button"));
  expect(handleSubmit).toHaveBeenCalledWith({
    email: "john@example.com",
    password: "password123",
    confirmPassword: "password123",
  });
  expect(asFragment()).toMatchSnapshot()  //create snapshot
});
