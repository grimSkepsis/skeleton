import { CreateTodo } from "@/services/todos";
import { Button, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";

type TodoFormData = {
  text: string;
};

export default function TodoForm() {
  const { register, handleSubmit, reset } = useForm<TodoFormData>();

  async function onSubmit(data: TodoFormData) {
    console.log(data);
    const newTodo = await CreateTodo({ text: data.text, userId: "1234" });
    console.log("NEW TODO CREATED! ", newTodo);
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
