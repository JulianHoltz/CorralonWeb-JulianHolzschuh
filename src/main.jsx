import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//Los componentes se declaran en mayuscula!
//Un componente siempre tiene que retornar algo, sino da error

createRoot(document.getElementById('root')).render(
    <App />
)
