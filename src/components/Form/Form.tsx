import { useContext, useState } from "react";
import { AppContext } from "../../context/AppProvider";

const Form = () => {
  const { addItem } = useContext(AppContext);

  const [item, setItem] = useState<string>("");
  return (
    <>
      <input
        type="text"
        placeholder="What's your todo?"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button type="submit" onClick={() => addItem!(item)}>
        Add Item
      </button>
    </>
  );
};

export default Form;
