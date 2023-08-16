import gql from "graphql-tag";
import { mutation, query } from "../graphql";
import { NewTodo, Todo, TodoConnection } from "./models";
import { TODO_CONNECTION_FRAGMENT } from "./fragments";

export function GetTodos() {
  return query(
    gql`
      query todos {
        todos {
          id
          text
          done
        }
      }
    `,
    {}
  ).then((res) => res.todos);
}

export function GetTodosPaginated(
  limit: number,
  page: number
): Promise<TodoConnection> {
  return query(
    gql`
      query todosPaginated($limit: Int!, $page: Int!) {
        todosPaginated(page: $page, limit: $limit) {
          ...TodoConnectionFragment
        }
      }
      ${TODO_CONNECTION_FRAGMENT}
    `,
    {
      limit,
      page,
    }
  ).then((res) => res.todosPaginated);
}

export function CreateTodo(input: NewTodo): Promise<Todo> {
  return mutation(
    gql`
      mutation createTodo($input: NewTodo!) {
        createTodo(input: $input) {
          id
          text
          done
        }
      }
    `,
    { input }
  ).then((res) => res.todos);
}

export function DeleteTodo(id: string): Promise<boolean> {
  return mutation(
    gql`
      mutation deleteTodoById($id: String!) {
        deleteTodoById(id: $id)
      }
    `,
    { id }
  ).then((res) => res.deleteTodoById);
}

export function UpdateTodo(id: string, done: boolean): Promise<Todo> {
  return mutation(
    gql`
      mutation updateTodoById($id: String!, $done: Boolean!) {
        updateTodoById(id: $id, done: $done) {
          id
          text
          done
        }
      }
    `,
    { id, done }
  ).then((res) => res.updateTodoById);
}
