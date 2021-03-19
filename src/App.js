import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Product from "./Product";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Contact from "./Contact";
import ProductReturn from "./ProductReturn";

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

                <Route exact path="/Login">
                    <Login/>
                </Route>

                <Route exact path="/Register">
                    <Register/>
                </Route>

                <Route exact path="/Contact">
                    <Contact/>
                </Route>

                <Route exact path="/Product_return">
                    <ProductReturn/>
                </Route>

            </Switch>
        </BrowserRouter>

    )
}