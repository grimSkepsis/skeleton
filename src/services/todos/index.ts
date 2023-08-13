import gql from "graphql-tag";
import { query } from "../graphql";

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
