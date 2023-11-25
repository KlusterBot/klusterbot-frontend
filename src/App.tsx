import { Toaster } from "react-hot-toast";
import "./App.css";
import { AppRoutes } from "./components";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <AppRoutes />
      <Toaster />
    </Provider>
  );
}

export default App;
