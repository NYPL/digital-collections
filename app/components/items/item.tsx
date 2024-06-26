import { getItemData } from "@/utils/utils";
import { ItemModel } from "@/models/item";

const getItem = async (uuid) => {
  const item = await getItemData(uuid);
  return item;
};

const Item = async ({ uuid }) => {
  const data = await getItem(uuid);
  const item = new ItemModel(data);
  // console.log("item is:")
  console.log("item is: ", item);

  const viewer = () => {
    switch (item.typeOfResource) {
      case "still image":
        return <h2> Image: {item.title} </h2>; //<ComponentA />;
      case "moving image":
        return <h2> Video: {item.title} </h2>; //<ComponentB />;
      case "sound recording":
        return <h2> Audio: {item.title} </h2>; //<ComponentC />;
      case "text":
        return <h2> Book/PDF: {item.title} </h2>; //<ComponentD />;

      default:
        return <h1>No type of resource match</h1>;
    }
  };

  return <>{viewer()}</>;
};

export default Item;
