import React, {useState} from "react";
import {Badge, Form, Row, Col, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const TopNav = ({gameState, isCompleted, getGameCards, saveGame}) => {
    const [localLevel ,setLocalLevel] = useState(gameState.level);

    const getNewLevel = () => {
        if (localLevel > 0 && localLevel <20) {
            getGameCards(localLevel);
        }
    };

    const saveCurrentGame = () => {
        saveGame(gameState);
    }

    return (
        <div data-testid="top-nav" className="pt-lg-3 pb-lg-3">
            <Row>
                <Col>
                    <Badge pill variant="primary">
                        Turns: {gameState.steps}
                    </Badge>{' '}
                    {isCompleted && <Badge pill variant="primary">
                        Game Completed!!!
                    </Badge>}{' '}
                </Col>
                <Col xs={3}>
                    <Row>
                        <Col>
                            <Form.Control value={localLevel} onChange={(e) => setLocalLevel(e.target.value)} type="number" placeholder="level" />
                        </Col>
                        <Col>
                            <Button onClick={() => getNewLevel()}>Change</Button>
                        </Col>
                        <Col>
                            <Button onClick={() => saveCurrentGame()} variant="success">Save</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default TopNav;