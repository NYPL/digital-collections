import { UAParser } from "ua-parser-js";
import { headers } from "next/headers";

export const isIOS = () => {
  if (typeof process === "undefined") {
    throw new Error("server");
  }

  const { get } = headers();
  const ua = get("user-agent");
  const parser = new UAParser(ua || "");
  const results = parser.getResult();
  console.log(results);
  return results.os.name === "iOS";
};
