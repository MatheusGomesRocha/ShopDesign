import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Product from "./Product";
import About from "./About";

export default () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/Product">
                    <Product/>
                </Route>

                <Route exact path="/About">
                    <About/>
                </Route>

            </Switch>
        </BrowserRouter>

    )
}