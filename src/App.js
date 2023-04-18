
import { useState } from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Route, useLocation } from 'wouter';
import Detalle from './components/Detalle';
import { GifsContextProvider } from './contexto/GifsContext';



function App() {
  const [path, pushLocation] = useLocation()
  const [keyword, setKeyword] = useState("")

  const handleSubmit = evt=>{
    evt.preventDefault()
    pushLocation(`/search/${keyword}`)
  }

  const handleChange = event=>{
    setKeyword(event.target.value)
  }

  return (
    <GifsContextProvider>
      <div className="App">
        <section className="App-content">
          <h4>BsmartLab Desafio</h4>
          <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleChange} value={keyword} placeholder='Buscar Gif'/>
            <button>Buscar</button>
          </form>
          <div className='gif-list'>
          <Route 
            path='/search/:keyword' 
            component={ListOfGifs}
          />
          <Route
            path='/gif/:id' 
            component={Detalle}
          />
          </div>
        </section>
      </div>
    </GifsContextProvider>
  );
}

export default App;
