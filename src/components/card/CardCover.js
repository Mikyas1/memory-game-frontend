import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import cardImage from '../../assets/card.jpg';

const CardCover = () => {
  return (
    <Card.Img
      data-testid={`card-covered`}
      className="animate__animated animate__flipInY"
      src={cardImage}
    />
  );
};

export default CardCover;
