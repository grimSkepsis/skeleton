import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { NextApiRequest, NextApiResponse } from "next";
import { createHttpLink } from "@apollo/client/link/http";
import { setContext } from "@apollo/client/link/context";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { query, mutation, variables } = req.body;

  try {
    const httpLink = createHttpLink({
      uri: process.env.API_URI,
    });

    const authLink = setContext((_, { headers }) => {
      const cookie = req.headers.cookie;
      return {
        headers: {
          ...headers,
          cookie,
        },
      };
    });

    const client = new ApolloClient({
      ssrMode: true,
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });

    if (query) {
      const { data } = await client.query({
        query: gql`
          ${query}
        `,
        variables,
      });
      console.log("Data:", data);

      res.status(200).json({ data });
    } else if (mutation) {
      const { data } = await client.mutate({
        mutation: gql`
          ${mutation}
        `,
        variables,
      });
      res.status(200).json({ data });
    }
  } catch (error: any) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
}
