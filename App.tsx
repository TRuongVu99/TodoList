import React from 'react';
import Application from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/store';
function App() {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
}

export default App;
