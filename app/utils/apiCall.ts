type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export interface ApiCallOptions {
  headers?: Record<string, string>;
}

export async function apiCall(
  url: string,
  method: HttpMethod = 'GET',
  body?: object,
  options: ApiCallOptions = {},
): Promise<any> {
  const { headers = {} } = options;

  const requestHeaders = new Headers(headers);
  requestHeaders.set('Content-Type', 'application/json');

  const requestInit: RequestInit = {
    method,
    headers: requestHeaders,
  };

  if (body) {
    requestInit.body = JSON.stringify(body);
  }

  const response = await fetch(url, requestInit);

  if (!response.ok) {
    throw new Error(`API call failed with status ${response.status}`);
  }

  const responseJson = await response.json();
  return responseJson;
}
