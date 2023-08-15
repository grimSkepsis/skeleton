export function getApiRoutes() {
  return {
    graphql: "/api/graphql",
  };
}

export function buildExternalURL(route: string) {
  return `${process.env.NEXT_PUBLIC_EXTERNAL_URL}${route}`;
}
