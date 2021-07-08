import React from 'react'
import ReactDOM from 'react-dom'
import { AppProvider} from './context'
import App from './App'

import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
 <Router>
  <AppProvider>
 <App />
</AppProvider>
 </Router>
 ,
 document.querySelector("#root")
);
