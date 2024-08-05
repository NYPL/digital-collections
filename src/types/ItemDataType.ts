export interface ItemDataType {
  uuid: string;
  mods: any;
  capture: any;
  typeOfResource: string;
  title: string;
  isPDF?: boolean;
  isBook?: boolean;
  isSingleCapture: boolean;
  imageID: string;
  href: string;
}

export default ItemDataType;
