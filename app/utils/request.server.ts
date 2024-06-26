import { json } from '@remix-run/cloudflare';

/**
 * This helper function helps us returning the accurate HTTP status,
 * 400 Bad Request, to the client.
 */
export const badRequest = <T>(data: T, headers?: Headers) =>
  json<T>(data, { status: 400, headers });
