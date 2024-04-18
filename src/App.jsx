import store from "./redux/store";
import UserData from "./userData";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={store}>
      <div>
        <UserData />
      </div>
    </Provider>
  );
}

export default App;
