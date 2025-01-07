import EjemploProps from './components/EjemploProps'
import './App.css'

//los imports que no uso deberia sacrlos...

//CONSEJO los nombres de los archivos no se modifican
//Los estylos en el CSS podemos modificarlo como queramos
//Los componentes se declaran en mayuscula!

//las clases aca se llaman className
//windos + . abre panel de emojis

function App() {

  const wellcome = "Esto es una Prop"

  return (
    <>
    <header className='header'>
      <a href="/" className='logoNav'>LOGO</a>

      <nav className='navbar'>
        <a href='/'>HOME</a>
        <a href='/'>TIENDA</a>
        <a href='/'>EVENTOS</a>
      </nav>
      
    </header>

    <h1>HOLA</h1>
    <p style={{color:'red'}}>{"bienvenido"} 👀</p>
    <EjemploProps wellcome={wellcome}/>

    {/*importo el componente de ejemploProps */}
    </>
  )
}

export default App
