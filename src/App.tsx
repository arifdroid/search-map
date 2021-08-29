import React from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config';
import { Provider } from 'react-redux';
import { configureStore } from './modules/store';
import MapView from './views/main/MapView';
import MainView from './views/main/MainView';
const store = configureStore();


function App() {

  return (
   <MainView/>
  );
}

function AppWithRedux(props) {
  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  )
}

export default AppWithRedux;
