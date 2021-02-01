import logo from "./logo.svg";
import "./App.css";
import Welcome from "./component/Welcome/Welcome";
import Clock from "./component/Clock/Clock";
import Contact from "./component/contact/Contact";
import { Route, Switch } from "react-router-dom";
import Navigation from "./component/navigation/Navigation";

// import Jeopardy from "./component/jeopardy/Jeopardy";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="John" />}
        />
        <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} />
        <Route path="/welcome/:name" component={Welcome} />
      </Switch>
    </div>
  );
}

export default App;
