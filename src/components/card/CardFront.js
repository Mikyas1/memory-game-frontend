import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import clubImage from '../../assets/club.png';
import diamondImage from '../../assets/diamond.png';
import heartImage from '../../assets/heart.png';
import spadeImage from '../../assets/spade.png';

const CardFront = ({ value }) => {
  const memoKnowCardType = useCallback((t) => {
    switch (t) {
      case 1:
        return { image: clubImage, color: 'black' };
      case 2:
        return { image: diamondImage, color: 'red' };
      case 3:
        return { image: heartImage, color: 'red' };
      case 4:
        return { image: spadeImage, color: 'black' };
      default:
        return { image: '', color: '' };
    }
  }, []);

  const memoKnowCardValue = useCallback((v) => {
    switch (v) {
      case 1:
        return 'A';
      case 11:
        return 'J';
      case 12:
        return 'Q';
      case 13:
        return 'K';
      default:
        return v;
    }
  }, []);

  return (
    <Card.Body
      data-testid={`card-facing-up`}
      style={{ backgroundColor: 'white' }}
      className="animate__animated animate__tada"
    >
      <h2
        data-testid="card-value"
        style={{ color: memoKnowCardType(value.type).color }}
      >
        {memoKnowCardValue(value.value)}
      </h2>
      <Row style={{ height: 97, paddingTop: 28 }}>
        <Col></Col>
        <Col xs={5}>
          <Image
            data-testid="card-img"
            width="30"
            src={memoKnowCardType(value.type).image}
            roundedCircle
          />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
        <Col xs={4}>
          {value.value !== 10 && (
            <h2 style={{ color: memoKnowCardType(value.type).color }}>
              {memoKnowCardValue(value.value)}
            </h2>
          )}
          {value.value === 10 && (
            <h5
              style={{
                color: memoKnowCardType(value.type).color,
                marginBottom: 21,
              }}
            >
              {memoKnowCardValue(value.value)}
            </h5>
          )}
        </Col>
      </Row>
    </Card.Body>
  );
};

CardFront.propTypes = {
  value: PropTypes.shape({
    type: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    solved: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
    cardId: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardFront;
