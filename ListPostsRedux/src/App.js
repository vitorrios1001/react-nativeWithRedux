import React from 'react';
import { View, Text } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Title, Left, Right  } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';
import Router from './Router';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

const App = () => {
    return (
        <Provider store={store}>            
            <Router />        
        </Provider>
    );
};

export default App;