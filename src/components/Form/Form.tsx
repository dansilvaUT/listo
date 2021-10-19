import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppProvider";

const Form = () => {
  const { addItem } = useContext(AppContext);

  const [item, setItem] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  }, [error]);

  const addListItem = (todo: string) => {
    if (!todo) {
      setError("You can't submit an empty todo!");
    } else {
      addItem!(todo);
      setItem("");
    }
  };

  return (
    <>
      {error && <span>{error}</span>}
      <input
        type="text"
        placeholder="What's your todo?"
        onChange={(e) => setItem(e.target.value)}
        value={item}
      />
      <button type="submit" onClick={() => addListItem(item)}>
        Add Item
      </button>
    </>
  );
};

export default Form;
