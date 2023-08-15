import { PageInfo } from "../pagination/models";

export type NewTodo = {
  text: string;
  userId: string;
};

export type Todo = {
  id: string;
  text: string;
  done: boolean;
};

export type TodoConnection = {
  edges: Todo[];
  pageInfo: PageInfo;
};

export const TODO_PAGE_SIZE = 2;
