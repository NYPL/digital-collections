import logger from "logger";

/**
 * Makes a GET or POST request to the Repo API and returns the response.
 * Times out at 10 seconds to prevent 504 crash.
 * @param {string} apiUrl - The URL for the API request.
 * @param {object} options - Options for the request:
 *   - method: "GET" or "POST" (default is "GET").
 *   - params: URL parameters for GET requests.
 *   - body: Body data for POST requests.
 *   - isRepoApi: Boolean flag to determine if Repo API authorization should be included.
 * @returns {Promise<any>} - The API response.
 */
export const fetchApi = async ({
  apiUrl,
  options = {},
}: {
  apiUrl: string;
  options?: {
    method?: "GET" | "POST";
    params?: { [key: string]: any };
    body?: any;
    isRepoApi?: boolean;
    cache?: boolean;
  };
}) => {
  const apiKey = process.env.AUTH_TOKEN;
  const { method = "GET", params, body, isRepoApi = true } = options;

  const headers = {
    Authorization: `Token token=${apiKey}`,
    ...(method === "POST" && { "Content-Type": "application/json" }),
  };

  if (method === "GET" && params) {
    const queryString = "?" + new URLSearchParams(params).toString();
    apiUrl += queryString;
  }

  const timeout = 10000;

  const fetchWithTimeout = (url: string, opts: RequestInit) => {
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
      ...(isRepoApi ? { headers } : {}),
      body: method === "POST" ? JSON.stringify(body) : undefined,
      ...(options?.cache ? { cache: "force-cache" } : { cache: "no-store" }), // 'force-cache' is the default and can be omitted
    })) as Response;

    if (!response.ok) {
      throw new Error(
        `fetchApi: ${response.status} ${
          response.statusText ? response.statusText : "No message"
        }`
      );
    }

    return await response.json();
  } catch (error) {
    logger.error(error);
    throw new Error(error.message);
  }
};
