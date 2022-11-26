


export const getGifsToAPI = async (cat) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=0TxgpCpJar7SC9YO8fMKyQAupnEKiQOU&q=${ cat }&limit=4`;

    const respuesta = await fetch( url );
    const { data } = await respuesta.json();

    const gifs = data.map( imagen => ({
            id: imagen.id,
            titulo: imagen.title,
            url: imagen.images.downsized_medium.url
    } ));
    //console.log(data);
    return gifs;
}