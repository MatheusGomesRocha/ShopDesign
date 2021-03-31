import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Product from "./Product";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import Contact from "./Contact";
import ProductReturn from "./ProductReturn";
import Map from "./Map";
import Gift from "./Gift";
import Affiliate from "./Affiliate";

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

                <Route exact path="/Map">
                    <Map />
                </Route>

                <Route exact path="/Gift_certificate">
                    <Gift />
                </Route>

                <Route exact path="/Affiliate_program">
                    <Affiliate />
                </Route>

            </Switch>
        </BrowserRouter>

    )
}