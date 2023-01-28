import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Customer from "./Customer";
import AddItem from "./AddItem";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateData } from "./store/Actions";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchData();
  }, []);
  async function fetchData() {
    let resp = await fetch(
      "https://food-ordering-app-server.herokuapp.com/getItems"
    );
    resp = await resp.json();
    dispatch(updateData(resp));
  }
  return (
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
  );
}

export default App;
