import React from 'react'
import ReactDOM from 'react-dom/client'
import { App_TicTacToe } from './js/App_TicTacToe.jsx'
import './css/index.css'
import './css/App_TicTacToe.css'

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App_TicTacToe />
  </React.StrictMode>,
)
