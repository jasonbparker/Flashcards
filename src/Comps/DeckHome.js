import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { listDecks, deleteDeck } from "../utils/api";
import "./DeckHome.css";

//returns a list of all decks. Gives options to view, study, or delete each one.

const DeckHome = () => {
  const [decks, setDecks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    listDecks().then(setDecks);
  }, []);

  const handleDelete = (deckId) => {
    const confirmDelete = window.confirm(
      "Delete this deck?\n\nYou will not be able to recover it."
    );

    if (confirmDelete) {
      deleteDeck(deckId);
      history.go();
    }
  };

  return (
    <div className="container">
      <Link to="/decks/new">
        <button className="btn btn-secondary">
          <i className="bi bi-plus-lg"></i> Create Deck
        </button>
      </Link>

      <div className="decks-list-home">
        {decks.map((deck) => (
          <div className="deck-home" key={deck.id}>
            <div className="deck-title-home">
              <h5>{deck.name}</h5>
              <p>{deck.cards.length} cards</p>
            </div>
            <p>{deck.description}</p>

            <div className="deck-btns-home">
              <div className="view-study">
                <Link to={`/decks/${deck.id}`}>
                  <button className="btn btn-secondary">
                    <i class="bi bi-eye"></i> View
                  </button>
                </Link>
                <Link to={`/decks/${deck.id}/study`}>
                  <button className="btn btn-primary">
                    <i class="bi bi-journal-bookmark"></i> Study
                  </button>
                </Link>
              </div>
              <div className="delete-btn">
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(deck.id)}
                >
                  <i class="bi bi-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeckHome;
