import { useState } from "react";
import React from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {
  // const categories = ['perros','gatos','leones']
  const [categories, setcategories] = useState(["perros"]);

//   const handleAdd = () => {
//     setcategories([...categories, "lagartos"]);
//     setcategories(catg=> [...catg, "lagartos"]);
//   };

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setcategories = {setcategories}/>
      <hr />
        <ol>
        {categories.map(category =>( 
          <GifGrid 
              key= {category}
              category={category}

          />
          ))
          }
      </ol>
      
    </>
  );
};

export default GifExpertApp;
