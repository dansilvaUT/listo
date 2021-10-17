import AppProvider from "./context";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <AppProvider>
      <Wrapper />
    </AppProvider>
  );
}

export default App;
