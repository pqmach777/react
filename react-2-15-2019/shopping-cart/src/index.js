import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {BrowserRouter,Switch, Route} from 'react-router-dom';
import BaseLayout from './components/Baselayout';
import productReducer from './reducers/productReducer'

import App from './App';
import Cart from './components/Cart';


const store = createStore(productReducer);

ReactDOM.render(
    <Provider store={store}>
    <BrowserRouter>
       <BaseLayout>
            <Switch> 
                <Route exact path="/" component={Cart} />
                <Route path="/app" component={App} />
            </Switch>
       </BaseLayout>
    </BrowserRouter>
    </Provider>
    , document.getElementById('root'));

