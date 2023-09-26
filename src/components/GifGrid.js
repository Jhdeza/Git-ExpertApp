import React from 'react'
 import { GifGridItem } from './GifGridItem'
import { useFetchGifs } from '../hooks/useFetchGifs'

export const GifGrid = ({category}) => {

// const [image, setimage] = useState([])

const {data,loading} =useFetchGifs(category); 
                            //utilizando el custom hook

//     useEffect( ()=>{
//                 getGifs(category)
//                 .then(setimage)
//             },[category])

  return (
    <>
    <h3>{category}</h3>

    {loading && <p>loading</p>}
    
    <div className='card-grid'>
            {
                data.map( img =>
                    <GifGridItem 
                        key={img.id}
                         {...img} />
                )
            }
     </div>
    </>
  )
  
}
