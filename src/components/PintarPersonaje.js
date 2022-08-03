import React from 'react'

const PintarPersonaje = ({personaje}) => {
    const {image, name, species} = personaje
  return (
    <div className='col-md-4 mb-2'>
          <div className="card">
          <img src={image} className="card-img-top" alt={name}/>
          <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{species}</p>
          </div>
    </div>
    </div>
  )
}

export default PintarPersonaje