
// 0TxgpCpJar7SC9YO8fMKyQAupnEKiQOU
// api.giphy.com/v1/gifs/search
import { getGifsToAPI } from "../helpers/getGifs";
import { useEffect } from "react";
import { useState } from "react";
import { GifGridItem } from "./GifGridItem";


//Función para extraer los gifs de un website a través de la API
export const GrifGrid = ( { cat } ) => {

    const [imagenes, setImagenes, isLoading] = useState( [] );

    const getImagenes = async() => {
        const newImagenes = await getGifsToAPI( cat );
        setImagenes( newImagenes );
    }

    useEffect( () => {
        getImagenes();
    }, [] )

    return (
      <>
          <h3> { cat }</h3> 
          {
            isLoading && ( <h2> Cargando... </h2> ) 
          }
          <div className="card-grid">
            {
                imagenes.map( ( imagen )   => (
                    <GifGridItem
                        key={ imagen.id }
                        { ...imagen }
                        //url={ imagen.url }

                        />
                    //<li key={ id }> { titulo } </li>            
                ))
                /*imagenes.map( imagen => (
                   <li key={ imagen.id }> { imagen.titulo } </li> 
                ) )*/
            }
          </div>
      </>
      )
  }
