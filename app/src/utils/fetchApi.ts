import logger from "logger";
/**
 * Makes a GET or POST request to the Repo API and returns the response.
 * Times out at 10 seconds to prevent 504 crash.
 * @param {string} apiUrl - The URL for the API request.
 * @param {object} options - Options for the request:
 *   - method: "GET" or "POST" (default is "GET").
 *   - params: URL parameters for GET requests.
 *   - body: Body data for POST requests.
 *   - cacheTime: The serverside revalidation period (in seconds).
 *   - cacheSetting: The browser cache strategy, default is 'force-cache'.
 * @returns {Promise<any>} - The API response.
 */
export const fetchApi = async (
  apiUrl: string,
  options?: {
    method?: "GET" | "POST";
    params?: { [key: string]: any };
    body?: any;
    cacheTime?: number;
    cacheSetting?: RequestCache;
  }
) => {
  const apiKey = process.env.AUTH_TOKEN;
  const method = options?.method || "GET";
  const headers = {
    Authorization: `Token token=${apiKey}`,
    ...(method === "POST" && { "Content-Type": "application/json" }),
  };

  if (method === "GET" && options?.params) {
    const queryString = "?" + new URLSearchParams(options?.params).toString();
    apiUrl += queryString;
  }

  const timeout = 10000;

  const fetchWithTimeout = (url: string, opts: RequestInit) => {
    console.log(url, opts);
    return Promise.race([
      fetch(url, opts),
      new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("fetchApi: Request timed out")),
          timeout
        )
      ),
    ]);
  };

  try {
    const response = (await fetchWithTimeout(apiUrl, {
      method,
      headers,
      body: method === "POST" ? JSON.stringify(options?.body) : undefined,
      ...(options?.cacheTime && { next: { revalidate: options.cacheTime } }),
      ...(options?.cacheSetting && { cache: options.cacheSetting }),
    })) as Response;
    if (!response.ok && response.status !== 200) {
      throw new Error(
        `fetchApi: ${response.status} ${
          response.statusText ? response.statusText : "No message"
        }`
      );
    }
    const data = await response.json();
    return method === "GET" ? data?.nyplAPI?.response : data;
  } catch (error) {
    logger.error(error);
    throw new Error(error.message);
  }
};
