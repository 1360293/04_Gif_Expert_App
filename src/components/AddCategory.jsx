
//Forma óptima de comunicación entre Padre e Hijo
import React from 'react'
import { useState } from 'react'

export const AddCategory = ( { onNuevaCategoria } ) => {
  
  const [ inputValue, setInputValue ] = useState('')

  const onInputChange = ( evento ) => {
    //console.log(evento);
    setInputValue( evento.target.value );
  }

  const onSubmit = ( event ) => {
    event.preventDefault();
    if( inputValue.trim().length <= 1 ) return;

    onNuevaCategoria( inputValue.trim() );
    setInputValue('');
  }
  
    return (
        <form onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={ inputValue }        
                onChange={ onInputChange }
            />
        </form>
  )
}
