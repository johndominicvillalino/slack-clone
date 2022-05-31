import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import CreateChannel from './components/Create-new-channel/CreateChannel'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <CreateChannel />
  </React.StrictMode>
)
