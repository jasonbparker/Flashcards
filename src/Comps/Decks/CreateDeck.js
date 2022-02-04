import React from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import "./CreateDeck.css";
import DeckForm from "./DeckForm";

// allows user to create a new deck using the deckForm component

const CreateDeck = () => {
  const history = useHistory();

  const handleSubmit = (newDeck) => {
    createDeck(newDeck).then((res) => history.push(`/decks/${res.id}`));
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="bi bi-house-door-fill"></i> Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Create Deck
          </li>
        </ol>
      </nav>

      <h1>Create Deck</h1>

      <DeckForm handleSubmit={handleSubmit} />
    </div>
  );
};

export default CreateDeck;
