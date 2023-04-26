import { redirect } from '@remix-run/cloudflare';

export const action = async () =>
  redirect(`https://upjob.com/api/v1/user-service/login/facebook`, {
    status: 302,
  });
