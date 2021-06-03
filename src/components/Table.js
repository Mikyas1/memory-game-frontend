import React, {useContext, useMemo, useEffect} from "react";

import GameCard from './Card';
import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Context} from "../context/CardGameContext";
import TopNav from "./TopNav";

const DefaultLevel = 3;

const Table = () => {
    const {state, addCartToTemp, cleanUpTemp, getGameCards, saveGame, getLastGameSession} = useContext(Context);

    useEffect(() => {
        const userId = localStorage.getItem("userId");
        if (userId) {
            // get last game session
            getLastGameSession(userId);
        } else {
            // if user id in not here
            getGameCards(DefaultLevel);
        }
    }, []);

    const IsGameCompleted = () => {
        const unsolvedOnes = state.cards.filter(c => c.solved === false);
        return unsolvedOnes.length > 0 ? false : true;
    }

    const GameCompleted = useMemo(IsGameCompleted, [state.cards]);

    if (state.cards.length === 0) {
        return (
            <h1>Loading....</h1>
        )
    }

    return (
        <Container>
            <TopNav gameState={state} isCompleted={GameCompleted} getGameCards={getGameCards} saveGame={saveGame}/>
            <Row>
                {
                    state.cards.map(a => {
                        return (
                            <GameCard
                                value={a}
                                inTemp={state.tempCards.indexOf(a) !== -1}
                                key={a.id}
                                addCartToTemp={addCartToTemp}
                                cleanUpTemp={cleanUpTemp}
                            />
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default Table;