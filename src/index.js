import React from 'react';
import ReactDOM from 'react-dom';
import '%PUBLIC_URL%/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
