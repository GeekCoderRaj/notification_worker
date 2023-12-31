import React from 'react';
import logo from './logo.svg';
import './App.css';
import {regSw, subscribe} from './serviceWorkerRegistration.js';
function App() {
  async function registerAndSubscribe () {
    try {
      const serviceWorkerReg = await regSw ();
      await subscribe (serviceWorkerReg);
    } catch (error) {
      console.log (error);
    }
  }
  return (
    <div className="App">
      <button onClick={registerAndSubscribe}>
        subscribe for push notifications
      </button>
    </div>
  );
}

export default App;
