import { getItemData } from "@/utils/utils";
import { ItemModel } from "@/models/item";
import ImageViewer from "./clover/image/image";
import CloverImageViewer from "./clover/image/viewer";
import AudioViewer from "./clover/audio/viewer";
import VideoViewer from "./clover/video/viewer";
import BookViewer from "./clover/book/viewer";
import PDFViewer from "./clover/pdf/viewer";

const getItem = async (uuid) => {
  const item = await getItemData(uuid);
  return item;
};

const Item = async ({ uuid }) => {
  const data = await getItem(uuid);
  const item = new ItemModel(data);

  const viewer = () => {
    switch (item.typeOfResource) {
      case "still image":
        if (item.isSingleCapture) {
          return (
            <>
              <h2> Image: {item.title} </h2>
              <ImageViewer imageID={item.capture.imageID.$} />
            </>
          );
        } else {
          return (
            <>
              <h2> Image: {item.title} </h2>
              <CloverImageViewer />
            </>
          );
        }
      case "moving image":
        return (
          <>
            <h2> Video: {item.title} </h2>
            <VideoViewer />
          </>
        );
      case "sound recording":
        return (
          <>
            <h2> Audio: {item.title} </h2>
            <AudioViewer />
          </>
        );
      case "text":
        //also PDF
        return (
          <>
            <h2> Book: {item.title} </h2>
            <BookViewer />
          </>
        );

      default:
        return <h1>No type of resource match</h1>;
    }
  };

  return <>{viewer()}</>;
};

export default Item;
