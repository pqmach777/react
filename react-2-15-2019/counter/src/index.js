import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import App from './App';
import counter from './reducers/counter'
import Counter from './components/Counter'


const store = createStore()

ReactDOM.render(
    <Provider store={store}>
        <Counter />
    </Provider>

, document.getElementById('root'));


