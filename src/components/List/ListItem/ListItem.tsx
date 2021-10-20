import { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";

const ListItem = (param1: { item: string; idx: string }) => {
  const { deleteItem, list } = useContext(AppContext);
  return (
    <div key={param1.idx}>
      <li>{param1.item}</li>
      <button onClick={() => deleteItem!(param1.item, list)}>
        Mark Complete
      </button>
    </div>
  );
};

export default ListItem;
