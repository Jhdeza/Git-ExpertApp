
//haciendo un custom Hook
//la importacion de React no es necesaria a menos que devuelva JSX 
import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs"; 


export const useFetchGifs = (category) => {                //custom hook (useFetchGifs)
  
  const [prueba, setprueba] = useState ({
    data:[],
    loading: true,
  } );

  useEffect(()=>{
    getGifs( category )
        .then( imgs => { 

            setTimeout(() => {
                setprueba({
                    data: imgs,
                    loading:false
                });
            }, 3000);
        })   
  },[ category])



    return prueba; //  {data:[], loading:true}
}
