import { useContext } from "react";
import { AppContext } from "../../../context/AppProvider";
import "./ListItem.scss";

const ListItem = (param1: { item: string; idx: string }) => {
  const { deleteItem, list } = useContext(AppContext);
  return (
    <div key={param1.idx} className="ListItem">
      <li>{param1.item}</li>
      <button onClick={() => deleteItem!(param1.item, list)}>
        Mark Complete
      </button>
    </div>
  );
};

export default ListItem;
