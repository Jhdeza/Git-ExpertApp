

export const getGifs = async(category) =>{                 //peticion HTTP con Fech(api)

    const url =`https://api.giphy.com/v1/gifs/search?limit=10&q=${encodeURI(category)}&api_key=Dn9cXN81MJk918djnkKifnitLdvxY7uE`;
    const resp= await fetch(url);
     
    const {data} = await resp.json();

    const gifs = data.map( img =>{
        return {                                       
            id:img.id,
            title:img.title,
            url: img.images?.downsized_medium.url
        }
    })
    console.log(gifs);
    return gifs
}