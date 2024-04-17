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
  //console.log('Parsed command line arguments:', parsedArgs);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setRequestInterception(true);

  const loadedImageUrls = [];

  // Intercept network requests
  page.on("request", (request) => {
    if (request.resourceType() === "image") {
      // Log the URL of the image being requested
      console.log("Image request:", request.url());
      loadedImageUrls.push(request.url());
    }
    request.continue();
  });

  let homepage = "https://qa-digitalcollections.nypl.org";

  if (parsedArgs["prod"] === true) {
    console.log("Condition is true");
    homepage = "https://digitalcollections.nypl.org";
  }

  await page.goto(homepage);

  const startTime = new Date();

  // Scroll down the page to trigger image loading
  //  await page.evaluate(async () => {
  //    await new Promise((resolve, reject) => {
  //      let totalHeight = 0;
  //      const distance = 100;
  //      const scrollInterval = setInterval(() => {
  //        const scrollHeight = document.body.scrollHeight;
  //        window.scrollBy(0, distance);
  //        totalHeight += distance;
  //
  //        if (totalHeight >= scrollHeight) {
  //          clearInterval(scrollInterval);
  //          resolve();
  //        }
  //      }, 100);
  //    });
  //  });

  // Wait for all desired images to be present in the DOM
  await page.waitForFunction(() => {
    const desiredImageUrls = [
      // Photography Collections
      "https://images.nypl.org/index.php?id=5032198&t=r",
      "https://images.nypl.org/index.php?id=5209999&t=r",
      "https://images.nypl.org/index.php?id=5226203&t=r",
      "https://images.nypl.org/index.php?id=1709433&t=r",
      // Early American Manuscripts Project
      "https://images.nypl.org/index.php?id=5234356&t=r",
      "https://images.nypl.org/index.php?id=5246763&t=r",
      "https://images.nypl.org/index.php?id=5221338&t=r",
      "https://images.nypl.org/index.php?id=5247898&t=r",
      // Public Domain Picks
      "https://images.nypl.org/index.php?id=4001447&t=r",
      "https://iiif-prod.nypl.org/index.php?id=5207703&t=r",
      "https://images.nypl.org/index.php?id=58449605&t=r",
      "https://images.nypl.org/index.php?id=5104173&t=r",
      // Collections About New York City
      "https://images.nypl.org/index.php?id=5652518&t=r",
      "https://images.nypl.org/index.php?id=700001F&t=r",
      "https://images.nypl.org/index.php?id=1509403&t=r",
      "https://iiif-prod.nypl.org/index.php?id=57045713&t=r",
      // Fashion Collections
      "https://images.nypl.org/index.php?id=1948588&t=r",
      "https://images.nypl.org/index.php?id=5231730&t=r",
      "https://images.nypl.org/index.php?id=105956&t=r",
      "https://images.nypl.org/index.php?id=1159593&t=r",
      // Collections for Designers
      "https://images.nypl.org/index.php?id=101739&t=r",
      "https://images.nypl.org/index.php?id=96534&t=r",
      "https://images.nypl.org/index.php?id=487624&t=r",
      "https://images.nypl.org/index.php?id=1585122&t=r",
    ];

    const images = document.querySelectorAll("img");
    const loadedImageUrls = Array.from(images).map((img) => img.src);
    return desiredImageUrls.every((url) => loadedImageUrls.includes(url));
  });

  const loadTime = new Date() - startTime;
  console.log(
    "Time taken for all desired images to appear:",
    loadTime,
    "milliseconds"
  );

  console.log("Loaded image URLs:", loadedImageUrls);

  await browser.close();
})();
