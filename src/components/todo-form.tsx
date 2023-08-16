import { useForm } from "react-hook-form";
import { TodoFormData } from "./types";
import { Button, TextField, Typography } from "@mui/material";

type Props = {
  onCreateTodo: (data: TodoFormData) => void;
};

export default function TodoForm({ onCreateTodo }: Props) {
  const { register, handleSubmit, reset } = useForm<TodoFormData>();

  async function onSubmit(data: TodoFormData) {
    onCreateTodo(data);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography typography={"label"}>Text:</Typography>
      <TextField
        // data-testid="text-input"
        type="text"
        id="text"
        {...register("text")}
        inputProps={{ "data-testid": "text-input" }}
      />
      <div>
        <Button
          type="submit"
          style={{ width: "100%", marginTop: "2rem" }}
          data-testid="submit-button"
        >
          Create Todo
        </Button>
      </div>
    </form>
  );
}
