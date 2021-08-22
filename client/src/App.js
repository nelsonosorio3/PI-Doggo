import './App.css';
import React from "react";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {store} from "./store"
import Welcome  from './components/welcome/welcome';
import Nav from './components/nav/nav';
import Home from './components/home/home';
import DogDetails from './components/dogDetails/dogDetails';
import  AddDog from './components/addDog/addDog';
import BottomBar from "./components/bottomBar/bottomBar";

export function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Nav/>
          <Switch>
            <Route exact path = "/">
              <Welcome/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/dog/:id">
              <DogDetails/>
            </Route>
            <Route path="/addDog">
              <AddDog/>
            </Route>
          </Switch>
          <BottomBar/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
