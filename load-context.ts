import { type AppLoadContext } from "@remix-run/cloudflare";
import { type PlatformProxy } from "wrangler";
import ReferenceService from "./app/services/reference/referenceService";
import { ISession } from "./app/storages/session.server";
import { getUserContextStorage } from "./app/storages/userContext.server";
import { IUserContext } from "./app/types/interfaces/iUserContext";

// When using `wrangler.toml` to configure bindings,
// `wrangler types` will generate types for those bindings
// into the global `Env` interface.
// Need this empty interface so that typechecking passes
// even if no `wrangler.toml` exists.
interface Env {}

type Cloudflare = Omit<PlatformProxy<Env>, "dispose">;

declare module "@remix-run/cloudflare" {
  interface AppLoadContext {
    cloudflare: Cloudflare;
    userContext?: IUserContext;
    session?: ISession;
    references?: ReferenceService;
  }
}

type GetLoadContext = (args: {
  request: Request;
  context: { 
    cloudflare: Cloudflare}; // load context _before_ augmentation
}) => Promise<AppLoadContext>;

// Shared implementation compatible with Vite, Wrangler, and Cloudflare Pages
export const getLoadContext: GetLoadContext = async ({
  context, request
}) => {
    // const userContext = await getUserContextStorage(request);
  // const session = await getSessionStorage(request);

  return {
    ...context,
    cloudflare: context.cloudflare,
    userContext: undefined,
    session: undefined,
    references: undefined
  };
};