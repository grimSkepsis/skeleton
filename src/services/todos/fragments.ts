import gql from "graphql-tag";
import { PAGE_INFO_FRAGMET } from "../pagination/fragment";

export const TODO_CONNECTION_FRAGMENT = gql`
  fragment TodoConnectionFragment on TodoConnection {
    edges {
      id
      done
      text
    }
    pageInfo {
      ...PageInfoFragment
    }
  }
  ${PAGE_INFO_FRAGMET}
`;
