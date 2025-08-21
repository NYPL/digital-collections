export type ProcessedImage = {
  imageID: string;
  proxy_url: string;
  center_full_visual: [number, number]; // [cx, cy]
  region_visual: [number, number, number, number]; // [x, y, w, h]
  region_center: [number, number, number, number]; // [x, y, w, h]
  thumb_url_visual: string;
  thumb_url_center: string;
  thumb_url_square: string;
};

const processedImages: ProcessedImage[] = [
  {
    imageID: "58270299",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/58270299/full/pct:11.6895/0/default.jpg",
    center_full_visual: [2235.0311320750334, 3034.126821992833],
    region_visual: [0, 1939, 4380, 2190],
    region_center: [0, 2043, 4380, 2190],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/58270299/0,1939,4380,2190/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/58270299/0,2043,4380,2190/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/58270299/square/!288,288/0/default.jpg",
  },
  {
    imageID: "1408153",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/1408153/full/pct:90.2998/0/default.jpg",
    center_full_visual: [283.79653766723635, 397.05979267533303],
    region_visual: [0, 255, 567, 284],
    region_center: [0, 238, 567, 284],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/1408153/0,255,567,284/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/1408153/0,238,567,284/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/1408153/square/!288,288/0/default.jpg",
  },
  {
    imageID: "58300996",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/58300996/full/pct:6.6649/0/default.jpg",
    center_full_visual: [3852.8695865148165, 4466.053947702518],
    region_visual: [0, 2546, 7682, 3841],
    region_center: [0, 2890, 7682, 3841],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/58300996/0,2546,7682,3841/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/58300996/0,2890,7682,3841/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/58300996/square/!288,288/0/default.jpg",
  },
  {
    imageID: "58498722",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/58498722/full/pct:11.9070/0/default.jpg",
    center_full_visual: [3026.2657899917126, 2238.285354151784],
    region_visual: [0, 713, 6100, 3050],
    region_center: [0, 625, 6100, 3050],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/58498722/0,713,6100,3050/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/58498722/0,625,6100,3050/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/58498722/square/!288,288/0/default.jpg",
  },
  {
    imageID: "1952272",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/1952272/full/pct:86.1953/0/default.jpg",
    center_full_visual: [380.8345400140877, 283.5034777641287],
    region_visual: [0, 94, 760, 380],
    region_center: [0, 107, 760, 380],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/1952272/0,94,760,380/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/1952272/0,107,760,380/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/1952272/square/!288,288/0/default.jpg",
  },
  {
    imageID: "58447105",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/58447105/full/pct:7.6418/0/default.jpg",
    center_full_visual: [2987.2205182800635, 4069.2463153745534],
    region_visual: [0, 2394, 6700, 3350],
    region_center: [0, 2484, 6700, 3350],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/58447105/0,2394,6700,3350/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/58447105/0,2484,6700,3350/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/58447105/square/!288,288/0/default.jpg",
  },
  {
    imageID: "1582202",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/1582202/full/pct:10.5895/0/default.jpg",
    center_full_visual: [2579.777858654986, 3049.326504045632],
    region_visual: [0, 1840, 4835, 2418],
    region_center: [0, 2071, 4835, 2418],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/1582202/0,1840,4835,2418/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/1582202/0,2071,4835,2418/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/1582202/square/!288,288/0/default.jpg",
  },
  {
    imageID: "58734720",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/58734720/full/pct:5.9883/0/default.jpg",
    center_full_visual: [4112.6725478152, 4031.7965919374346],
    region_visual: [0, 1447, 10338, 5169],
    region_center: [0, 1690, 10338, 5169],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/58734720/0,1447,10338,5169/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/58734720/0,1690,10338,5169/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/58734720/square/!288,288/0/default.jpg",
  },
  {
    imageID: "58495568",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/58495568/full/pct:11.7701/0/default.jpg",
    center_full_visual: [2114.0173389222764, 2857.3665840846784],
    region_visual: [0, 1770, 4350, 2175],
    region_center: [0, 2094, 4350, 2175],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/58495568/0,1770,4350,2175/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/58495568/0,2094,4350,2175/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/58495568/square/!288,288/0/default.jpg",
  },
  {
    imageID: "1945789",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/1945789/full/pct:78.2875/0/default.jpg",
    center_full_visual: [375.23880366641276, 316.13717276986125],
    region_visual: [0, 126, 760, 380],
    region_center: [0, 137, 760, 380],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/1945789/0,126,760,380/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/1945789/0,137,760,380/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/1945789/square/!288,288/0/default.jpg",
  },
  {
    imageID: "5179162",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/5179162/full/pct:7.8204/0/default.jpg",
    center_full_visual: [4573.779694963755, 3639.23581892258],
    region_visual: [0, 1437, 8809, 4404],
    region_center: [0, 1072, 8809, 4404],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/5179162/0,1437,8809,4404/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/5179162/0,1072,8809,4404/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/5179162/square/!288,288/0/default.jpg",
  },
  {
    imageID: "5452683",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/5452683/full/pct:7.7435/0/default.jpg",
    center_full_visual: [3190.2796122854556, 4566.840993973193],
    region_visual: [0, 2914, 6612, 3306],
    region_center: [0, 2760, 6612, 3306],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/5452683/0,2914,6612,3306/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/5452683/0,2760,6612,3306/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/5452683/square/!288,288/0/default.jpg",
  },
  {
    imageID: "3928477",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/3928477/full/pct:8.2902/0/default.jpg",
    center_full_visual: [4459.069749998532, 3130.352924326075],
    region_visual: [0, 914, 8865, 4432],
    region_center: [0, 872, 8865, 4432],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/3928477/0,914,8865,4432/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/3928477/0,872,8865,4432/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/3928477/square/!288,288/0/default.jpg",
  },
  {
    imageID: "434724",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/434724/full/pct:12.5429/0/default.jpg",
    center_full_visual: [2584.6362042064297, 2092.361228494304],
    region_visual: [0, 796, 5183, 2592],
    region_center: [0, 745, 5183, 2592],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/434724/0,796,5183,2592/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/434724/0,745,5183,2592/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/434724/square/!288,288/0/default.jpg",
  },
  {
    imageID: "1516806",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/1516806/full/pct:11.5186/0/default.jpg",
    center_full_visual: [2172.785626913078, 2866.3834784221235],
    region_visual: [0, 1755, 4445, 2222],
    region_center: [0, 1774, 4445, 2222],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/1516806/0,1755,4445,2222/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/1516806/0,1774,4445,2222/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/1516806/square/!288,288/0/default.jpg",
  },
  {
    imageID: "57066397",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/57066397/full/pct:17.2856/0/default.jpg",
    center_full_visual: [1391.5536641383487, 2574.5483865386695],
    region_visual: [0, 1834, 2962, 1481],
    region_center: [0, 1817, 2962, 1481],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/57066397/0,1834,2962,1481/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/57066397/0,1817,2962,1481/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/57066397/square/!288,288/0/default.jpg",
  },
  {
    imageID: "57879179",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/57879179/full/pct:11.8081/0/default.jpg",
    center_full_visual: [2002.627134386258, 2878.8019444847323],
    region_visual: [0, 1795, 4336, 2168],
    region_center: [0, 1741, 4336, 2168],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/57879179/0,1795,4336,2168/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/57879179/0,1741,4336,2168/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/57879179/square/!288,288/0/default.jpg",
  },
  {
    imageID: "57502571",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/57502571/full/pct:13.7450/0/default.jpg",
    center_full_visual: [1908.042438945984, 2563.7108635127333],
    region_visual: [0, 1633, 3725, 1862],
    region_center: [0, 1699, 3725, 1862],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/57502571/0,1633,3725,1862/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/57502571/0,1699,3725,1862/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/57502571/square/!288,288/0/default.jpg",
  },
  {
    imageID: "56958645",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/56958645/full/pct:14.5661/0/default.jpg",
    center_full_visual: [1784.9949373903344, 2351.9514996330468],
    region_visual: [0, 1473, 3515, 1758],
    region_center: [0, 1454, 3515, 1758],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/56958645/0,1473,3515,1758/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/56958645/0,1454,3515,1758/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/56958645/square/!288,288/0/default.jpg",
  },
  {
    imageID: "57555753",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/57555753/full/pct:18.5911/0/default.jpg",
    center_full_visual: [1195.6807539412569, 2229.719294730338],
    region_visual: [0, 1541, 2754, 1377],
    region_center: [0, 1209, 2754, 1377],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/57555753/0,1541,2754,1377/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/57555753/0,1209,2754,1377/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/57555753/square/!288,288/0/default.jpg",
  },
  {
    imageID: "5661680",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/5661680/full/pct:8.6839/0/default.jpg",
    center_full_visual: [3669.15159876124, 3282.9868750934047],
    region_visual: [0, 1435, 7390, 3695],
    region_center: [0, 1100, 7390, 3695],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/5661680/0,1435,7390,3695/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/5661680/0,1100,7390,3695/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/5661680/square/!288,288/0/default.jpg",
  },
  {
    imageID: "57840965",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/57840965/full/pct:10.5004/0/default.jpg",
    center_full_visual: [2699.3695015909966, 3152.300556270894],
    region_visual: [0, 1933, 4876, 2438],
    region_center: [0, 2384, 4876, 2438],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/57840965/0,1933,4876,2438/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/57840965/0,2384,4876,2438/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/57840965/square/!288,288/0/default.jpg",
  },
  {
    imageID: "psnypl_mss_986",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/psnypl_mss_986/full/pct:11.9292/0/default.jpg",
    center_full_visual: [2150.2298714313556, 2523.475874813682],
    region_visual: [0, 1450, 4292, 2146],
    region_center: [0, 1553, 4292, 2146],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/psnypl_mss_986/0,1450,4292,2146/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/psnypl_mss_986/0,1553,4292,2146/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/psnypl_mss_986/square/!288,288/0/default.jpg",
  },
  {
    imageID: "1577406",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/1577406/full/pct:13.2300/0/default.jpg",
    center_full_visual: [1940.6994947703583, 2413.0298153242834],
    region_visual: [0, 1446, 3870, 1935],
    region_center: [0, 1672, 3870, 1935],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/1577406/0,1446,3870,1935/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/1577406/0,1672,3870,1935/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/1577406/square/!288,288/0/default.jpg",
  },
  {
    imageID: "808351",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/808351/full/pct:29.3410/0/default.jpg",
    center_full_visual: [1085.4030318627224, 810.8476903479893],
    region_visual: [0, 289, 2089, 1044],
    region_center: [0, 350, 2089, 1044],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/808351/0,289,2089,1044/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/808351/0,350,2089,1044/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/808351/square/!288,288/0/default.jpg",
  },
  {
    imageID: "58507228",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/58507228/full/pct:15.5481/0/default.jpg",
    center_full_visual: [2260.9247344562277, 1671.6324306568865],
    region_visual: [0, 481, 4765, 2382],
    region_center: [0, 456, 4765, 2382],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/58507228/0,481,4765,2382/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/58507228/0,456,4765,2382/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/58507228/square/!288,288/0/default.jpg",
  },
  {
    imageID: "58613681",
    proxy_url:
      "https://iiif.nypl.org/iiif/2/58613681/full/pct:17.8896/0/default.jpg",
    center_full_visual: [2129.0037613424233, 1376.1888901437812],
    region_visual: [0, 314, 4249, 2124],
    region_center: [0, 369, 4249, 2124],
    thumb_url_visual:
      "https://iiif.nypl.org/iiif/2/58613681/0,314,4249,2124/!288,144/0/default.jpg",
    thumb_url_center:
      "https://iiif.nypl.org/iiif/2/58613681/0,369,4249,2124/!288,144/0/default.jpg",
    thumb_url_square:
      "https://iiif.nypl.org/iiif/2/58613681/square/!288,288/0/default.jpg",
  },
];
