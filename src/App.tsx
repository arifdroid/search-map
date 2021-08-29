import React from 'react';
import logo from './logo.svg';
import './App.css';
import config from './config';
import { Provider } from 'react-redux';
import { configureStore } from './modules/store';
import MapView from './views/main/MapView';
import MainView from './views/main/MainView';
import Cardview from  'src/views/shared/card/Cardview';

const store = configureStore();


function App() {

  return (
    <>
      <MainView />
      {/* <Cardview text={'cuba 22'}></Cardview> */}
    </>
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
