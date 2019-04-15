import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Notes from "../../Routes/Notes"
import Add from "../../Routes/Add"
import Note from "../../Routes/Note"
import Edit from "../../Routes/Edit"
//import { Query } from "react-apollo"

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
            <Route exact={true} path={"/"} component={Notes} />
            <Route exact={true} path={"/note/:id"} component={Note} />
            <Route exact={true} path={"/add"} component={Add} />
            <Route exact={true} path={"/edit/:id"} component={Edit} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
