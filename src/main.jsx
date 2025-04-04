import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import './index.css'
import App from './App.jsx'
import { GlobalStyle } from './styles/GlobalStyles.js'
import store from './redux/index.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
          <App />
    </Provider>
    <GlobalStyle/>
  </StrictMode>,
)
