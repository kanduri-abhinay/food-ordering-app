import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Customer from "./Customer";
import { store } from "./store/store";
import { Provider } from "react-redux";
import AddItem from "./AddItem";
function App() {
  return (
    <Provider store={store}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="/admin/add-item">
          <AddItem />
        </Route>
        <Route path="/customer" exact>
          <Customer />
        </Route>
      </Switch>
    </Provider>
  );
}

export default App;
