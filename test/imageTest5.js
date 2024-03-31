const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Enable request interception
  await page.setRequestInterception(true);

  // Array to store URLs of loaded images
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

  // Navigate to the homepage
  await page.goto("https://new-digitalcollections.nypl.org"); // Replace with your Next.js app URL

  // Initialize startTime before scrolling down the page
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
      "https://iiif.nypl.org/iiif/2/58270299/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/1408153/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58300996/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58591658/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58498722/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/1952272/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58447105/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/1582202/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58734720/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58495568/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/1945789/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/5179162/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/5452683/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/3928477/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/434724/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/1516806/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/57066397/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/57879179/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/57502571/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/56958645/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/57555753/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/5661680/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/57840965/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/psnypl_mss_986/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/1577406/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/808351/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58507228/full/288,/0/default.jpg",
      "https://iiif.nypl.org/iiif/2/58613681/full/288,/0/default.jpg",
    ];

    const images = document.querySelectorAll("img");
    const loadedImageUrls = Array.from(images).map((img) => img.src);
    return desiredImageUrls.every((url) => loadedImageUrls.includes(url));
  });

  // Measure the time it takes for all desired images to appear
  const loadTime = new Date() - startTime;
  console.log(
    "Time taken for all desired images to appear:",
    loadTime,
    "milliseconds"
  );

  // Output loaded image URLs
  console.log("Loaded image URLs:", loadedImageUrls);

  await browser.close();
})();
