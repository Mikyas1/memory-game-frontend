import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import CardCover from './card/CardCover';
import CardFront from './card/CardFront';

const GameCard = ({ value, addCartToTemp, cleanUpTemp, inTemp }) => {
  const [count, setCount] = useState(0);

  useEffect(cleanUpTemp, [count, cleanUpTemp]);

  return (
    <Col data-testid={`card-${value.id}`}>
      <Card
        variant="top"
        className="mb-3"
        style={{ border: 'none', width: 150 }}
      >
        <a
          style={{ cursor: 'pointer' }}
          onClick={() => {
            addCartToTemp(value);
            setCount((c) => c + 1);
          }}
        >
          {!inTemp && !value.solved && <CardCover data-testid="covered" />}

          {(inTemp || value.solved) && (
            <CardFront data-testid="facing-up" value={value} />
          )}
        </a>
      </Card>
    </Col>
  );
};

export default GameCard;
