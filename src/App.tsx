import AppProvider from "./context";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import "./Main.scss";

function App() {
  return (
    <AppProvider>
      <Header />
      <Wrapper />
    </AppProvider>
  );
}

export default App;
