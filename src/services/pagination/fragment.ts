import gql from "graphql-tag";

export const PAGE_INFO_FRAGMET = gql`
  fragment PageInfoFragment on PageInfo {
    hasNextPage
    hasPreviousPage
    currentPage
    totalPages
    total
  }
`;
