// React
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Student_Home from "./Student_Home";
import Student_Sign_Up from "./Student_Sign_Up";
import Professor_Sign_Up from "./Professor_Sign_Up";
import Professor_Home from "./Professor_Home";
import Admin_Home from "./Admin_Home";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Student" component={Student_Sign_Up} />
          <Route exact path="/Professor" component={Professor_Sign_Up} />
          <Route exact path="/Student/Home" component={Student_Home} />
          <Route exact path="/Professor/Home" component={Professor_Home} />
          <Route exact path="/Admin/Home" component={Admin_Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
