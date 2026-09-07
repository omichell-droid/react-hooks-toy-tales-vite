import React from "react";

function ToyCard({ toy, onUpdateToy, onDeleteToy }) {
  const { id, name, image, likes } = toy;

  // When the Like button is clicked, PATCH the toy's likes on the
  // backend, then update state with the server's response so the
  // displayed like count reflects what's actually saved.
  function handleLikeClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ likes: likes + 1 }),
    })
      .then((res) => res.json())
      .then((updatedToy) => onUpdateToy(updatedToy));
  }

  // When the Donate button is clicked, DELETE the toy on the backend,
  // then remove it from state so it disappears from the page.
  function handleDonateClick() {
    fetch(`http://localhost:3001/toys/${id}`, {
      method: "DELETE",
    }).then(() => onDeleteToy(id));
  }

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name}</h2>
      <img src={image} alt={name} className="toy-avatar" />
      <p>{likes} Likes </p>
      <button className="like-btn" onClick={handleLikeClick}>
        Like {"<3"}
      </button>
      <button className="del-btn" onClick={handleDonateClick}>
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
