import React from 'react';
import Routes from './navigation/Routes';
import "react-native-gesture-handler";
import { Provider } from 'react-redux';
import { store, persistStorage } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'





const App = () => {
    return (

        <Provider store={store}>
            <Routes />
        </Provider>
    );
}

export default App;