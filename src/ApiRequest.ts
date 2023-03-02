// Source: https://greeeg.com/en/issues/stop-breaking-rest-api-http-requests-with-typescript

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface SuccessfulResponse<Data extends Record<string, any>> {
  ok: true
  data: Data
}

interface ErrorResponse {
  ok: false
  data: undefined
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RequestResponse<Data extends Record<string, any>> =
    | SuccessfulResponse<Data>
    | ErrorResponse;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const request = async <Data extends Record<string, any>>(
  url: string,
  options: RequestInit,
): Promise<RequestResponse<Data>> => {
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();
    return {
      ok: true,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      data,
    };
  } catch (e) {
    return {
      ok: false,
      data: undefined,
    };
  }
};

export default request;
