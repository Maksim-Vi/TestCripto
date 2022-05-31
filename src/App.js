import './App.css';
import { connect, Provider } from 'react-redux';
import { store } from './redux/redux-store';
import Header from './components/Header';
import { openServerConnection } from './API/ConnectWebSocket';
import React from 'react';
import { Box, CircularProgress } from '@mui/material';
import { selectLoaded } from './redux/reducers/Websocket/WebsocketReducer';
import { compose } from 'redux';

const App = (props) => {

  const loader = () => {
    return <Box sx={{display: 'flex',alignItems: 'center',justifyContent: 'center', width: '100%',height: '50rem'}}>
      <CircularProgress />
    </Box>
  }

  const mainComponents = () =>{
    return (
        <div className="App">
          <Header />
        </div>
    )
  }

  React.useEffect(()=>{
    openServerConnection()
  },[])

  return !props.loaded ? loader() : mainComponents()
}

const mapStateToProps = (state) => {
  return {
    loaded: selectLoaded(state)
  }
}

let AppContainer = compose(connect(mapStateToProps)(App))

const Main = () =>{
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  )
}

export default Main


