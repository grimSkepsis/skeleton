import { CreateTodo } from "@/services/todos";
import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

type TodoFormData = {
  text: string;
};

type Props = {
  onCreateTodo: () => void;
};

export default function TodoForm({ onCreateTodo }: Props) {
  const { register, handleSubmit, reset } = useForm<TodoFormData>();

  async function onSubmit(data: TodoFormData) {
    const newTodo = await CreateTodo({ text: data.text, userId: "1234" });
    onCreateTodo();
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography typography={"label"}>Text:</Typography>
      <TextField type="text" id="text" {...register("text")} />
      <div>
        <Button type="submit" style={{ width: "100%", marginTop: "2rem" }}>
          Create Todo
        </Button>
      </div>
    </form>
  );
}
