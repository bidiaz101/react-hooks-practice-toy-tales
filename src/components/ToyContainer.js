import React, {  useEffect } from "react";
import ToyCard from "./ToyCard";

function ToyContainer({toys, setToys}) {
  useEffect(()=>{
    fetch("http://localhost:3001/toys")
    .then(resp => resp.json())
    .then(data => setToys(data))
  }, [])

  function handleDelete(id) {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE"
    })
    .then(setToys(toys.filter(toy => toy.id !== id)))
  }

  const toysToDisplay = toys.map(toy => {
    return <ToyCard 
      name={toy.name} 
      image={toy.image} 
      likes={toy.likes} 
      id={toy.id} 
      key={toy.id} 
      handleDelete={handleDelete}
    />
  })

  return (
    <div id="toy-collection">{toysToDisplay}</div>
  );
}

export default ToyContainer;
