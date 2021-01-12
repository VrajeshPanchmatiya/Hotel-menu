import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HotelMenu from "./Components/HotelMenu";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HotelMenu} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
