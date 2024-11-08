import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HooksApp } from './HooksApp'
// import { FormularioComponent } from './components/FormularioComponent'
import { FormularioComponent2 } from './components/FormularioComponent2'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HooksApp/>
    {/* <FormularioComponent/> */}
    <FormularioComponent2/>
  </StrictMode>,
)
