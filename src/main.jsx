import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import '@fontsource/roboto';
import '@fontsource/outfit';
import '@fontsource/fira-code';
import '@fontsource/roboto-mono';
import '@fontsource/fira-mono';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
