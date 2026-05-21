import { PlyrCaption } from "../components/items/plyr/player";

export interface APICapture {
  uuid: string;
  imageId: string | null;
  mediaFileUrl: string | null;
  orderInSequence: number;
  captions: PlyrCaption[] | null;
  hasAllMapsData: boolean;
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
  manifestMetadata: any;
  hasAllMapsData: boolean;
}
