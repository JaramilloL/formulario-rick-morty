import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Formulario from './components/Formulario'
import Loading from './components/Loading'

const App = () => {
  //estado  para actualizar lo que esl usuario escriba en el input
  const [nombrePersonaje, setNombrePersonaje] = useState('')

  //estado inicial de la aplicacion 
  const [personaje, setPersonaje] = useState([])

  //creamos el estado del loading
  const [loading, setLoading] = useState(false)

  //se ejecuta cuando se recarga la pagina obteniendo los datos iniciales
    //preguntamos si existe un localstaorage guardado

  //obtenemos los nuevos datos cuando se escriba un nombre en el input

  useEffect(()=>{
    if(localStorage.getItem('nombreApi')){
      setNombrePersonaje(JSON.parse(localStorage.getItem('nombreApi')))
    }
  },[])
  useEffect(()=>{
    concumirApi(nombrePersonaje)
    localStorage.setItem('nombreApi', JSON.stringify(nombrePersonaje))
  },[nombrePersonaje])

  //la funcion principal resive los persoajes iniciales
  const concumirApi= async(personaje)=>{
    setLoading(true)
    try {
      const res = await axios.get(`https://rickandmortyapi.com/api/character/?name=${personaje}&status=alive`);
      const json = await res.data;
      const respuesta = await json.results;
      console.log(respuesta);
      setPersonaje(respuesta);

    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  if(loading){
    return (
      <Loading/>
    )
  }
  return (
    <div className='row w-75 m-auto'>
    <Formulario setNombrePersonaje={setNombrePersonaje}/>
      {
        personaje.map((item,index)=>(
          <div className='col-md-4 mb-2' key={index}>
          <div className="card">
          <img src={item.image} className="card-img-top" alt={item.name}/>
          <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.species}</p>
          </div>
    </div>
    </div>
        ))
      }
    </div>
  )
}

export default App