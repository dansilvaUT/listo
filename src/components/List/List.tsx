import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import ListItem from "./ListItem/ListItem";

const List = () => {
  const { list } = useContext(AppContext);

  const renderList = (todos: Array<string>) => {
    return (
      <ul>
        {todos?.map((todo: string) => (
          <ListItem key={todo} idx={todo} item={todo} />
        ))}
      </ul>
    );
  };

  return renderList(list);
};

export default List;
