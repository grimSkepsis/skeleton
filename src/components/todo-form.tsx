import { CreateTodo } from "@/services/todos";
import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

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
    toast.success("Todo created!");
    onCreateTodo();
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography typography={"label"}>Text:</Typography>
      <TextField type="text" id="text" {...register("text")} />
      <Button type="submit">Create Todo</Button>
    </form>
  );
}
