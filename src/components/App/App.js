import React from 'react';
import {Link, Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "../Home/Home";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import './App.css';
import Header from "../Header/Header";
import AddTest from "../AddTest/AddTest";

const client = new ApolloClient({
    uri: 'http://reactphpunit.test/graphql',
    cache: new InMemoryCache()
});

const App = () => {
    return (
        <BrowserRouter>
            <ApolloProvider client={client}>
                <div>
                    <Header />
                    {/* A <Switch> looks through its children <Route>s and
                     renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/create">
                            <AddTest/>
                        </Route>
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
