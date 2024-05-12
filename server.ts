// import { createPagesFunctionHandler } from "@remix-run/cloudflare-pages";
// import { build } from "vite";
// import ReferenceService from "~/services/reference/referenceService";
// import { getSessionStorage } from "~/storages/session.server";
// import { getUserContextStorage } from "~/storages/userContext.server";

// const referenceService = new ReferenceService();

// export async function onRequest(context: EventContext) {
//   const userContext = await getUserContextStorage(context.request);
//   const session = await getSessionStorage(context.request);

//   const handleRequest = createPagesFunctionHandler({
//     build,
//     mode: process.env.NODE_ENV,
//     getLoadContext(context) {
//       return {
//         env: context.env,
//         userContext: userContext.getUserContext(),
//         session: session.getSession(),
//         references: referenceService,
//       };
//     },
//   });

//   const response = await handleRequest(context);

//   return response;
// }

/* eslint-disable no-extend-native */
// no error
declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Map<K, V> {
    ToArray<V>(this: Map<K, V>): V[];
  }
}

// eslint-disable-next-line func-names
Map.prototype.ToArray = function <K, V>(this: Map<K, V>) {
  return [...this.values()];
};

export {};
