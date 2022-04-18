import {
  getGraphQLParameters,
  processRequest,
  shouldRenderGraphiQL,
  renderGraphiQL,
} from "graphql-helix";
import { NextApiHandler } from "next/types";
import { schema } from "../../graphql/schema";
import { createContext, Context } from "../../graphql/context";

export default (async (req, res) => {
  const request = {
    body: req.body,
    headers: req.headers,
    method: String(req.method),
    query: req.query,
  };

  if (shouldRenderGraphiQL(request)) {
    return res.send(renderGraphiQL({ endpoint: "/api/graphql" }));
  }
  const { operationName, query, variables } = getGraphQLParameters(request);

  const result = await processRequest<Context>({
    operationName,
    query,
    variables,
    request,
    schema,
    contextFactory: () => createContext(req),
  });

  if (result.type === "RESPONSE") {
    result.headers.forEach(({ name, value }) => res.setHeader(name, value));
    res.status(result.status).json(result.payload);
  }
}) as NextApiHandler;
