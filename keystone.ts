import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { withAuth, session } from "./auth";

export default withAuth(
  config({
    db: {
      provider: "sqlite",
      url: "file:./database.db",
    },
    ui: {
      isAccessAllowed: (context) => !!context.session?.data,
    },
    experimental: {
      generateNextGraphqlAPI: true,
      generateNodeAPI: true,
    },
    lists,
    session,
  })
);
