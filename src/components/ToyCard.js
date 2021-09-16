import React,{ useState } from "react";

function ToyCard({name, image, likes, id, handleDelete}) {
  const [newLikes, setNewLikes] = useState(likes)

  function handleLike(){
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: newLikes+1 })
    })
    .then(resp => resp.json())
    .then(data => setNewLikes(data.likes))
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{newLikes} Likes </p>
      <button className="like-btn" onClick={handleLike}>Like {"<3"}</button>
      <button className="del-btn" onClick={() => handleDelete(id)}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
