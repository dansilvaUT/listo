import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

interface AppContextInterface {
  list: Array<string>;
  addItem?: (item: string) => void;
  deleteItem?: (item: string, list: Array<string>) => void;
}

const defaultState = {
  list: [],
};
export const AppContext = createContext<AppContextInterface>(defaultState);

const AppProvider = ({ children }: Props) => {
  const [list, setList] = useState<Array<string>>(["test", "one", "two"]);

  const addItem = (item: string) => {
    setList([...list, item]);
  };

  const deleteItem = (item: string, list: Array<string>) => {
    const idx = list.findIndex((todo) => todo === item);
    list.splice(idx, 1);
    setList([...list]);
  };

  return (
    <AppContext.Provider value={{ list, addItem, deleteItem }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
