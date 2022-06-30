import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { TrasacationProvider } from "./context/TransactionContext";

ReactDOM.createRoot(document.getElementById('root')).render(
  <TrasacationProvider>  
  <React.StrictMode>
    <App />
  </React.StrictMode>
</TrasacationProvider>
)
