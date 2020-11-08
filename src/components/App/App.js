import React from 'react';
import {Link, Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "../Home/Home";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://reactphpunit.test/graphql',
    cache: new InMemoryCache()
});

const App = () => {
    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                     renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/">
                            <Home/>
                        </Route>
                    </Switch>
                </div>
            </ApolloProvider>
        </BrowserRouter>
    )
}

export default App;
