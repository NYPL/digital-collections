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
      // Log the URL of the image being requested
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

  // Scroll down the page to trigger image loading
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      let totalHeight = 0;
      const distance = 100;
      const scrollInterval = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(scrollInterval);
          resolve();
        }
      }, 100);
    });
  });

  // Wait for all desired images to be present in the DOM
  await page.waitForFunction(() => {
    const desiredImageUrls = [
      "https://iiif.nypl.org/iiif/2/58270299/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/1408153/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58300996/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58591658/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58498722/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/1952272/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58447105/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/1582202/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58734720/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58495568/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/1945789/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/5179162/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/5452683/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/3928477/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/434724/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/1516806/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/57066397/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/57879179/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/57502571/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/56958645/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/57555753/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/5661680/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/57840965/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/psnypl_mss_986/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/1577406/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/808351/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58507228/square/!288,288/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58613681/square/!288,288/0/default.jpg",
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
