import logger from "logger";

/**
 * Makes a GET or POST request to Repo/Collections API and returns the response.
 * Times out at 10 seconds to prevent 504 crash.
 * @param {string} apiUrl - The URL for the API request.
 * @param {object} options - Options for the request:
 *   - method: "GET" or "POST" (default is "GET").
 *   - params: URL parameters for GET requests.
 *   - body: Body data for POST requests.
 *   - clientIP: IP address of the requester
 *   - isRepoApi: Boolean flag to determine if Repo API or Collections API authorization should be included.
 *   - next: Next.js-specific options (revalidate, tags)
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
    clientIP?: string | null;
    isRepoApi?: boolean;
    next?;
  };
}) => {
  const {
    method = "GET",
    params,
    body,
    clientIP = null,
    isRepoApi = true,
    next,
  } = options;

  const headers: Record<string, string> = {};

  if (isRepoApi) {
    headers["Authorization"] = `Token token=${process.env.AUTH_TOKEN || ""}`;
  } else {
    headers["x-nypl-collections-api-key"] =
      process.env.COLLECTIONS_API_AUTH_TOKEN || "";
  }
  if (method === "POST") {
    headers["Content-Type"] = "application/json";
  }
  if (method === "GET" && params) {
    const queryString = "?" + new URLSearchParams(params).toString();
    apiUrl += queryString;
  }
  if (clientIP) {
    headers["X-Forwarded-For"] = clientIP;
  }

  console.log("apiUrl is: ", apiUrl);

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
      headers: headers,
      body: method === "POST" ? JSON.stringify(body) : undefined,
      next,
    })) as Response;

    if (response.status === 422) {
      logger.error(`Invalid parameter value: ${apiUrl}`);
    } else if (!response.ok) {
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
