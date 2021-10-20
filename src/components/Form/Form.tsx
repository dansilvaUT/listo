import { useContext, useState, useEffect } from "react";
import { AppContext } from "../../context/AppProvider";
import "./Form.scss";

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
    <div className="Form">
      {error && <span>{error}</span>}
      <div className="Form-container">
        <input
          type="text"
          placeholder="What's your todo?"
          onChange={(e) => setItem(e.target.value)}
          value={item}
          className="Form-input"
        />
        <button
          type="submit"
          onClick={() => addListItem(item)}
          className="Form-btn"
        >
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Form;
