import { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

interface AppContextInterface {
  list: Array<string>;
  addItem?: (item: string) => void;
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

  return (
    <AppContext.Provider value={{ list, addItem }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
