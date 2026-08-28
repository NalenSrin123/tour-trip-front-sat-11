import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CreateCustomer from './pages/admin/customers/CreateCustomer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateCustomer/>
  </StrictMode>,
)
