/**
 * Returns the uuid, API uri, and numResults of an item given an identifier type and identifier value.
 * @param {string} identifierType - the identifier type
 * @param {string} identifier - the identifier value
 */

export const getAPIResponse = async (
  identifierType: string,
  identifier: string,
  urlParam?: { [key: string]: any }
) => {
  const apiUrl = `${process.env.API_URL}/api/v2/items/${identifierType}/${identifier}`;
  // console.log(`getAPIUri: About to fetch ${apiUrl}`);
  // console.log(`getAPIUri calls apiCall function internally`);
  const apiCallValue = apiCall(apiUrl, urlParam);
  return apiCallValue;
};

/**
 * Returns Repo API response.
 * @param {string} apiUrl - the url to make a request to
 */

export const apiCall = async (
  apiUrl: string,
  urlParam?: { [key: string]: any }
) => {
  const apiKey = process.env.AUTH_TOKEN;
  const queryString = urlParam
    ? "?" + new URLSearchParams(urlParam).toString()
    : "";
  apiUrl += queryString;

  try {
    const startTime = new Date().getTime();
    const response = await fetch(apiUrl, {
      // aggressively cache Repo API?
      // cache: "force-cache",
      headers: {
        Authorization: `Token token=${apiKey}`,
      },
    });

    if (response.status === 200) {
      const data = await response.json();
      // console.log(`apiCall: called ${apiUrl}`);
      // console.log(`Response time: ${new Date().getTime() - startTime}`);
      return data.nyplAPI.response;
    } else {
      return undefined;
    }
  } catch (error) {
    return undefined;
  }
};

/**
 * Makes a POST request to Repo API.
 */
export const apiPOSTCall = async (apiUrl: string, postData: any) => {
  const apiKey = process.env.AUTH_TOKEN;

  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token=${apiKey}`,
      },
      body: JSON.stringify(postData),
    });

    if (response.status === 200) {
      const data = await response.json();
      return data?.nyplAPI?.response;
    } else {
      return undefined;
    }
  } catch (error) {
    return undefined;
  }
};
