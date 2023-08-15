import { DocumentNode, print } from "graphql";
import axios from "axios";
import { buildExternalURL, getApiRoutes } from "@/util/routes";

export async function query(
  query: DocumentNode,
  args: Record<string, any>,
  cookie?: string
) {
  const response = await axios.post(
    buildExternalURL(getApiRoutes().graphql),
    {
      query: print(query),
      variables: args,
    },
    {
      headers: { cookie },
    }
  );

  const { data, errors } = response.data;

  if (errors) {
    throw new Error(errors[0].message);
  }

  return data;
}

export async function mutation(
  mutation: DocumentNode,
  args: Record<string, any>,
  cookie?: string
) {
  const response = await axios.post(
    buildExternalURL(getApiRoutes().graphql),
    {
      mutation: print(mutation),
      variables: args,
    },
    {
      headers: { cookie },
    }
  );

  const { data, errors } = response.data;

  if (errors) {
    throw new Error(errors[0].message);
  }

  return data;
}
