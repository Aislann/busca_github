import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState("")

  function handleBuscar() {

    axios.get(`https://api.github.com/users/${usuario}`).then(response => console.log(response.data))
  }
  return (
    <div className='App'> 
      <label htmlFor="" className='title'>Buscar Github</label> <br />
      <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} /> <br />
      <button onClick={handleBuscar}> Pesquisar</button>
    </div>
  )
}

export default App
