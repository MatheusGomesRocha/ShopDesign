import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Product from "./Product";

export default () => {
  return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/Product">
                <Product />
            </Route>

        </Switch>
    </BrowserRouter>

  )
}