export interface APICapture {
  uuid: string;
  imageId: string | null;
  orderInSequence: number;
}

export interface APIItem {
  uuid: string;
  buyable: boolean;
  isRestricted: boolean;
  permittedLocationText: string | null;
  contentType: string | null;
  yearStart: string | null;
  yearEnd: string | null;
  citationResourceType: string | null;
  captures: APICapture[];
}
