import { middleware } from "middleware";
import { NextRequest, NextResponse } from "next/server";

jest.mock("next/server", () => {
  return {
    NextRequest: jest.fn(),
    NextResponse: {
      redirect: jest.fn(() => "redirect response"),
      next: jest.fn(() => "next response"),
    },
  };
});

let request: NextRequest;

it("transforms keywords to q", () => {
  const request = {
    nextUrl: new URL("http://localhost/search/index?keywords=test"),
  } as NextRequest;
  const response = middleware(request);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?q=test",
    301
  );
  expect(response).toBe("redirect response");
});

it("drops ascending/descending relevance sort (default sort)", () => {
  const request = {
    nextUrl: new URL("http://localhost/search/index?sort=score+desc"),
  } as NextRequest;
  const response = middleware(request);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?",
    301
  );
  expect(response).toBe("redirect response");
});

it("drops sequence sort", () => {
  const request = {
    nextUrl: new URL("http://localhost/search/index?sort=sortString+desc"),
  } as NextRequest;
  const response = middleware(request);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?",
    301
  );
  expect(response).toBe("redirect response");
});

it("drops date created sort", () => {
  const request = {
    nextUrl: new URL("http://localhost/search/index?sort=keyDate_st+asc"),
  } as NextRequest;
  const response = middleware(request);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?",
    301
  );
  expect(response).toBe("redirect response");
});

it("transforms date digitized ascending/descending sort", () => {
  const request1 = {
    nextUrl: new URL("http://localhost/search/index?sort=dateDigitized_dt+asc"),
  } as NextRequest;
  const response1 = middleware(request1);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?sort=date-asc",
    301
  );
  expect(response1).toBe("redirect response");

  const request2 = {
    nextUrl: new URL(
      "http://localhost/search/index?sort=dateDigitized_dt+desc"
    ),
  } as NextRequest;
  const response2 = middleware(request2);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?sort=date-desc",
    301
  );
  expect(response2).toBe("redirect response");
});

it("transforms title alphabetical ascending/descending sort", () => {
  const request1 = {
    nextUrl: new URL("http://localhost/search/index?sort=mainTitle_ns+asc"),
  } as NextRequest;
  const response1 = middleware(request1);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?sort=title-asc",
    301
  );
  expect(response1).toBe("redirect response");

  const request2 = {
    nextUrl: new URL("http://localhost/search/index?sort=mainTitle_ns+desc"),
  } as NextRequest;
  const response2 = middleware(request2);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?sort=title-desc",
    301
  );
  expect(response2).toBe("redirect response");
});

it("drops scroll", () => {
  const request = {
    nextUrl: new URL("http://localhost/search/index?keywords=#/?scroll=136"),
  } as NextRequest;
  const response = middleware(request);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?",
    301
  );
  expect(response).toBe("redirect response");
});

it("maintains page", () => {
  const request = {
    nextUrl: new URL("http://localhost/search/index?page=2"),
  } as NextRequest;
  const response = middleware(request);

  expect(NextResponse.next).toHaveBeenCalled();
  expect(response).toBe("next response");
});

it("transforms a filter", () => {
  const request = {
    nextUrl: new URL(
      "http://localhost/search/index?filters%5Bname%5D=Swope%2C+Martha"
    ),
  } as NextRequest;
  const response = middleware(request);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?filters=%5Bname%3DSwope%2C+Martha%5D",
    301
  );
  expect(response).toBe("redirect response");
});

it("transforms multiple filters", () => {
  const request = {
    nextUrl: new URL(
      "http://localhost/search/index?filters%5Bgenre%5D=Photographs&filters%5Bname%5D%5B%5D=Swope%2C+Martha"
    ),
  } as NextRequest;
  const response = middleware(request);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?filters=%5Bgenre%3DPhotographs%5D%5Bname%3DSwope%2C+Martha%5D",
    301
  );
  expect(response).toBe("redirect response");
});

it("transforms rights filter", () => {
  const request = {
    nextUrl: new URL("http://localhost/search/index?filters%5Brights%5D=pd"),
  } as NextRequest;
  const response = middleware(request);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?filters=%5Brights%3DpublicDomain%5D",
    301
  );
  expect(response).toBe("redirect response");
});

it("transforms year_begin and year_end filters", () => {
  const request = {
    nextUrl: new URL(
      "http://localhost/search/index?filters%5Bgenre%5D%5B%5D=Cards&keywords=&&&&year_begin=1900&year_end=1905&"
    ),
  } as NextRequest;
  const response = middleware(request);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?filters=%5Bgenre%3DCards%5D%5BdateStart%3D1900%5D%5BdateEnd%3D1905%5D",
    301
  );
  expect(response).toBe("redirect response");
});

it("transforms date filter", () => {
  const requestWithOnlyDate = {
    nextUrl: new URL(
      "http://localhost/search/index?filters%5Bdate%5D%5B%5D=1900-1905"
    ),
  } as NextRequest;
  const response = middleware(requestWithOnlyDate);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?filters=%5BdateStart%3D1900%5D%5BdateEnd%3D1905%5D",
    301
  );
  expect(response).toBe("redirect response");
});

it("transforms date and one year filter", () => {
  const requestWithDateAndYear = {
    nextUrl: new URL(
      "http://localhost/search/index?filters%5Bdate%5D%5B%5D=-9999-1903&filters%5Bgenre%5D=Scores&keywords=hello"
    ),
  } as NextRequest;
  const response = middleware(requestWithDateAndYear);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?q=hello&filters=%5BdateEnd%3D1903%5D%5Bgenre%3DScores%5D",
    301
  );

  expect(response).toBe("redirect response");
});

it("transforms date and both year filters", async () => {
  const requestWithDateAndYears = {
    nextUrl: new URL(
      "http://localhost/search/index?filters%5Bdate%5D%5B%5D=1900-1905&keywords=hello&year_begin=1901&year_end=1905&"
    ),
  } as NextRequest;
  const response = await middleware(requestWithDateAndYears);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?q=hello&filters=%5BdateStart%3D1901%5D%5BdateEnd%3D1905%5D",
    301
  );
  expect(response).toBe("redirect response");
});

it("transforms filter titles where necessary (form)", () => {
  const requestWithDateAndYears = {
    nextUrl: new URL(
      "http://localhost/search/index?filters%5Bform_mtxt_s%5D%5B%5D=Photocopies&filters%5Bpublisher%5D=The+Division&keywords="
    ),
  } as NextRequest;
  const response = middleware(requestWithDateAndYears);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?filters=%5Bform%3DPhotocopies%5D%5Bpublisher%3DThe+Division%5D",
    301
  );
  expect(response).toBe("redirect response");
});

it("transforms filter titles (place)", () => {
  const requestWithDateAndYears = {
    nextUrl: new URL(
      "http://localhost/search/index?filters%5BplaceTerm_mtxt_s%5D%5B%5D=Photocopies&filters%5Bpublisher%5D=The+Division&keywords="
    ),
  } as NextRequest;
  const response = middleware(requestWithDateAndYears);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?filters=%5Bplace%3DPhotocopies%5D%5Bpublisher%3DThe+Division%5D",
    301
  );
  expect(response).toBe("redirect response");
});

it("transforms root-collection", () => {
  const requestWithRootCollection = {
    nextUrl: new URL(
      "http://localhost/search/index?filters%5Broot-collection%5D=16ad5350-c52e-012f-aecf-58d385a7bc34&keywords="
    ),
  } as NextRequest;
  const response = middleware(requestWithRootCollection);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?filters=%5Bcollection%3D16ad5350-c52e-012f-aecf-58d385a7bc34%5D",
    301
  );
  expect(response).toBe("redirect response");
});

it("transforms title_uuid_s to subcollection uuid only format", () => {
  const requestWithSubCollection = {
    nextUrl: new URL(
      "http://localhost/search/index?filters%5Btitle_uuid_s%5D%5B%5D=Atlas%2052.%20Vol.%2014,%201901.%7C%7C0d11d7c0-c5fc-012f-82dd-58d385a7bc34&keywords=&layout=false#/?scroll=0"
    ),
  } as NextRequest;
  const response = middleware(requestWithSubCollection);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?filters=%5Bsubcollection%3D0d11d7c0-c5fc-012f-82dd-58d385a7bc34%5D",
    301
  );
  expect(response).toBe("redirect response");
});

it("transforms many params", () => {
  const request = {
    nextUrl: new URL(
      "http://localhost/search/index?filters%5Bdate%5D%5B%5D=1900-9999&filters%5Bgenre%5D%5B%5D=Cards&filters%5Bname%5D%5B%5D=Ogden%27s+Cigarettes&filters%5Brights%5D=pd&keywords="
    ),
  } as NextRequest;
  const response = middleware(request);

  expect(NextResponse.redirect).toHaveBeenCalledWith(
    "http://localhost/search/index?filters=%5BdateStart%3D1900%5D%5Bgenre%3DCards%5D%5Bname%3DOgden%27s+Cigarettes%5D%5Brights%3DpublicDomain%5D",
    301
  );
  expect(response).toBe("redirect response");
});
