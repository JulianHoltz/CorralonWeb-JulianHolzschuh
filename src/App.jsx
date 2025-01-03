import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//los imports que no uso deberia sacrlos...

//CONSEJO los nombres de los archivos no se modifican
//Los estylos en el CSS podemos modificarlo como queramos
//Los componentes se declaran en mayuscula!

//las clases aca se llaman className
//windos + . abre panel de emojis

function App() { //componente
  const [count, setCount] = useState(0) //hooking
  const bienvenido = `bienvenidos a mi pagina wachines!`

  return (
    <>
    <h1>HOLA</h1>
    <p style={{color:'red'}}>{bienvenido} 👀</p>
    </>
  )
}

export default App
