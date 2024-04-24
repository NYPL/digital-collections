const puppeteer = require("puppeteer");

function parseArgs(args) {
  const parsedArgs = {};
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith("--")) {
      const keyValue = arg.split("=");
      const key = keyValue[0].slice(2);
      const value = keyValue.length > 1 ? keyValue[1] : true;
      parsedArgs[key] = value;
    }
  }
  return parsedArgs;
}

(async () => {
  const args = process.argv.slice(2);
  const parsedArgs = parseArgs(args);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setRequestInterception(true);

  const loadedImageUrls = [];

  // Intercept network requests
  page.on("request", (request) => {
    if (request.resourceType() === "image") {
      console.log("Image request:", request.url());
      loadedImageUrls.push(request.url());
    }
    request.continue();
  });

  let homepage = "https://qa-new-digitalcollections.nypl.org";

  if (parsedArgs["prod"] === true) {
    console.log("Condition is true");
    homepage = "https://new-digitalcollections.nypl.org";
  }

  await page.goto(homepage);

  const startTime = new Date();

  const desiredImageUrls = loadedImageUrls.filter((url) =>
    url.includes("900,900")
  );

  await page.waitForFunction(
    (desiredImageUrls) => {
      const images = document.querySelectorAll("img");
      const loadedImageUrls = Array.from(images).map((img) => img.src);

      return desiredImageUrls.every((url) => loadedImageUrls.includes(url));
    },
    {},
    desiredImageUrls
  );

  const loadTime = new Date() - startTime;
  console.log(
    "Time taken for all desired images to appear:",
    loadTime,
    "milliseconds"
  );

  console.log("Loaded image URLs:", loadedImageUrls);

  await browser.close();
})();
