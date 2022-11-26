import { useEffect, useState } from "react";
import { getGifsToAPI } from "../helpers/getGifs";


export const useFetchGifs = ({ cat }) => {

    const [imagenes, setImagenes] = useState([])

    const getImagenes = async() => {
        const newImagenes = await getGifsToAPI( cat );
        setImagenes( newImagenes );
    }

    useEffect( () => {
        getImagenes();
    }, [] )

  return{
    imagenes: imagenes,
    isLoading: false
  }
}
