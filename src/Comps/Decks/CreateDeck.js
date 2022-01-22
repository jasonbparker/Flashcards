import React from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";
import "./CreateDeck.css";
import DeckForm from "./DeckForm";

const CreateDeck = () => {
  const history = useHistory();

  const handleSubmit = (newDeck) => {
    createDeck(newDeck).then((res) => history.push(`/decks/${res.id}`));
  };

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <Link to="/">
              <i class="bi bi-house-door-fill"></i> Home
            </Link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
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
