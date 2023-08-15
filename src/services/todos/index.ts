import gql from "graphql-tag";
import { mutation, query } from "../graphql";
import { NewTodo, Todo } from "./models";

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
