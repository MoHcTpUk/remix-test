import { type AppLoadContext } from "@remix-run/cloudflare";
import { type PlatformProxy } from "wrangler";
import ReferenceService from "~/services/reference/referenceService";
import { ISession } from "~/storages/session.server";
import { IUserContext } from "~/types/interfaces/iUserContext";

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
}) => AppLoadContext;

// Shared implementation compatible with Vite, Wrangler, and Cloudflare Pages
export const getLoadContext: GetLoadContext = ({
  context,
}) => {
  return {
    ...context,
    cloudflare: context.cloudflare,
    userContext: undefined,
    session: undefined,
    references: undefined
  };
};