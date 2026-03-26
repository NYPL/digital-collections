/**
 * Makes a GET or POST request to Repo/Collections API and returns the response.
 * Times out at 10 seconds to prevent 504 crash.
 * @param {string} apiUrl - The URL for the API request.
 * @param {object} options - Options for the request:
 *   - method: "GET" or "POST" (default is "GET").
 *   - params: URL parameters for GET requests.
 *   - body: Body data for POST requests.
 *   - clientIP: IP address of the requester
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
    next?;
  };
}) => {
  const { method = "GET", params, body, clientIP = null, next } = options;

  const headers: Record<string, string> = {};

  headers["x-nypl-collections-api-key"] =
    process.env.COLLECTIONS_API_AUTH_TOKEN || "";
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

  let response: Response;
  try {
    response = (await fetchWithTimeout(apiUrl, {
      method,
      headers: headers,
      body: method === "POST" ? JSON.stringify(body) : undefined,
      next,
    })) as Response;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
  if (response.ok) {
    return await response.json();
  }
  const responseText = await response.text();

  throw new Error(
    `Error fetching ${apiUrl}: ${response.status} ${responseText}`
  );
};
