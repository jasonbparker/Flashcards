import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

// form for either editing or creating a card

const CardForm = ({ handleSubmit, card = {} }) => {
  // need card empty object because AddCard isn't passing in a card
  const initNewCard = {
    front: "",
    back: "",
  };
  const [newCard, setNewCard] = useState({ ...initNewCard });
  const [oldCard, setOldCard] = useState({ ...card });
  const { deckId } = useParams();

  const onSubmit = (e) => {
    console.log(card);
    e.preventDefault();
    if (!card.id) {
      handleSubmit(newCard);
    } else {
      handleSubmit(oldCard);
    }

    setNewCard({ ...initNewCard });
  };

  const handleChange = (e) => {
    if (!card.id) {
      setNewCard({ ...newCard, [e.target.id]: e.target.value });
    } else {
      setOldCard({ ...oldCard, [e.target.id]: e.target.value });
    }
  };

  return (
    <div>
      {!card.id && (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea
              type="text"
              class="form-control"
              id="front"
              placeholder="Front Side of Card"
              value={newCard.front}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="back">Back</label>
            <textarea
              type="text"
              class="form-control"
              id="back"
              placeholder="Back Side of Card"
              value={newCard.back}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-deck-btns">
            <Link to={`/decks/${deckId}`}>
              <button className="btn btn-secondary">Cancel</button>
            </Link>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      )}

      {card.id && (
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label htmlFor="front">Front</label>
            <textarea
              type="text"
              class="form-control"
              id="front"
              placeholder="Front Side of Card"
              value={oldCard.front}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="back">Back</label>
            <textarea
              type="text"
              class="form-control"
              id="back"
              placeholder="Back Side of Card"
              value={oldCard.back}
              onChange={handleChange}
              required
            />
          </div>
          <div className="create-deck-btns">
            <Link to={`/decks/${deckId}`}>
              <button className="btn btn-secondary">Cancel</button>
            </Link>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginLeft: ".5rem" }}
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CardForm;
