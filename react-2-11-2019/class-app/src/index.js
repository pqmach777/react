import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch,Route,Redirect} from 'react-router-dom';

import App from './App';
import AddMovie from './components/AddMovie';
import AllMovies from './components/AllMovies';
import Article from './components/Article'
import BaseLayout from './components/BaseLayout';
import NewArticle from './components/NewArticle';
import Forms from './components/Forms'


ReactDOM.render(
    <BrowserRouter>
        <BaseLayout>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/add-movie" component={AddMovie} />
                <Route path="/forms" component={Forms} />
                <Redirect from='/old-page' to='/' />
                <Route path="/all-movies" component={AllMovies} />
                <Route path="/article/:art" component={Article}/>
                <Route path="/newart/:art" component={NewArticle}/>
            </Switch>
        </BaseLayout>
    </BrowserRouter>

    , document.getElementById('root'));


