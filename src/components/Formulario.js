import { useFormulario } from '../hooks/useFormulario'
import Swal from 'sweetalert2'

const Formulario = ({setNombrePersonaje}) => {
    //destructuramos el hook obteniendo las siguentes funciones
    const [inputs, handleChange, reset] = useFormulario({
        nombre: ''
    })
    //destructuramos el input
    const {nombre} = inputs

    const handleSubmit= (e)=>{
        e.preventDefault()
        console.log(nombre);
        
        if(!nombre.trim()){
            return Swal.fire({
                title: 'Error',
                text: 'No deje el campo en blanco',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        }
        setNombrePersonaje(nombre.trim().toLowerCase());

        reset()
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Ingrese personaje"
                className="form-control mb-2 w-75 d-block m-auto"
                value={nombre}
                onChange={handleChange}
                name= "nombre"
            />
            <button 
            type='submit' 
            className="btn btn-primary mb-2">Buscar</button>
        </form>
    </div>
  )
}

export default Formulario