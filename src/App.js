import React from 'react';
// import ReducePage from './pages/reducePage'
import ReduxPage from './pages/reduxPage'
import HooksPage from './pages/hooksPage'
import ReactReduxPage from './pages/reactReduxPage'
import ReactReduxHookPage from './pages/reactReduxHookPage'

function App() {
  return (
    <div className="App">
      {/* <ReducePage/> */}
      <ReduxPage/>
      <HooksPage/>
      <ReactReduxPage/>
      <ReactReduxHookPage/>
    </div>
  );
}

export default App;
