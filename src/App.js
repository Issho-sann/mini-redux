import React from 'react';
// import ReducePage from './pages/reducePage'
import ReduxPage from './pages/reduxPage'
import HooksPage from './pages/hooksPage'
import ReactReduxPage from './pages/reactReduxPage'

function App() {
  return (
    <div className="App">
      {/* <ReducePage/> */}
      <ReduxPage/>
      <HooksPage/>
      <ReactReduxPage/>
    </div>
  );
}

export default App;
