import ImageViewer from "./clover/image/image";
import CloverImageViewer from "./clover/image/viewer";
import AudioViewer from "./clover/audio/viewer";
import VideoViewer from "./clover/video/viewer";
import BookViewer from "./clover/book/viewer";
import PDFViewer from "./clover/pdf/viewer";
import { ItemModel } from "@/../models/item";

interface ItemProps {
  item: ItemModel;
}

const Item = ({ item }: ItemProps) => {
  let viewer;
  switch (item.typeOfResource) {
    case "still image":
      if (item.isSingleCapture) {
        viewer = (
          <>
            <h2> Image: {item.title} </h2>
            <ImageViewer imageID={item.capture.imageID.$} />
          </>
        );
      } else {
        viewer = (
          <>
            <h2> Image: {item.title} </h2>
            <CloverImageViewer />
          </>
        );
      }
      return viewer;
    case "moving image":
      viewer = (
        <>
          <h2> Video: {item.title} </h2>
          <VideoViewer />
        </>
      );
      return viewer;
    case "sound recording":
      viewer = (
        <>
          <h2> Audio: {item.title} </h2>
          <AudioViewer />
        </>
      );
      return viewer;
    case "text":
      //also PDF
      viewer = (
        <>
          <h2> Book: {item.title} </h2>
          <BookViewer />
        </>
      );
      return viewer;
    default:
      return <h2>No type of resource match</h2>;
  }
};

export default Item;
