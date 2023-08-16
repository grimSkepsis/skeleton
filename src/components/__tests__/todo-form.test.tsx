import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import TodoForm from "../todo-form";
import "@testing-library/jest-dom";

describe("TodoForm", () => {
  it("should render a form with a text input and a submit button", async () => {
    render(<TodoForm onCreateTodo={() => {}} />);
    const textInput = screen.getByTestId("text-input");
    expect(textInput).toBeInTheDocument();
    const submitButton = screen.getByTestId("submit-button");
    expect(submitButton).toBeInTheDocument();
  });

  it("should call onCreateTodo with the form data when the form is submitted", async () => {
    const onCreateTodo = jest.fn();
    render(<TodoForm onCreateTodo={onCreateTodo} />);
    const textInput = screen.getByTestId("text-input");
    const submitButton = screen.getByTestId("submit-button");
    fireEvent.change(textInput, { target: { value: "Test todo" } });
    await waitFor(() => {
      fireEvent.click(submitButton);
    });
    expect(onCreateTodo).toHaveBeenCalledWith({ text: "Test todo" });
  });

  it("should reset the form when the form is submitted", async () => {
    const onCreateTodo = jest.fn();
    render(<TodoForm onCreateTodo={onCreateTodo} />);
    const textInput = screen.getByTestId("text-input");
    const submitButton = screen.getByTestId("submit-button");
    fireEvent.change(textInput, { target: { value: "Test todo" } });
    await waitFor(() => {
      fireEvent.click(submitButton);
    });
    expect(textInput).toHaveValue("");
  });
});
