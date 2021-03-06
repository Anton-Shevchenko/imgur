import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Images from './Images';
import Tags from './Tags';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Post from './Post';


const renderApp = (App) => {
    render(
        <AppContainer>
            <BrowserRouter>
                <App>
                    <Switch>
                        <Route exact path='/' component={Images} />
                        <Route exact path='/category' component={Images} />
                        <Route exact path='/post' component={Post} />
                        
                    </Switch>
                </App>
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('root')
    );
};

renderApp(App);




