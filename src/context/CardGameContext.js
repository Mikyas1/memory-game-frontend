import createDataContext from "./createDataContext";
import gameServer from "../api/gameServer";
import localGameData from "../api/localGameData";

const deckOfCardsReducer = (state, action) => {
    switch (action.type) {
        case 'add_card_to_temp':
            if (state.tempCards.length >= 2) {
                return {...state, tempCards: [action.payload], steps: state.steps + 1};
            }
            if (state.tempCards.length === 1) {
                if (state.tempCards[0].cardId === action.payload.cardId && state.tempCards[0].id !== action.payload.id) {
                    return {
                        cards: state.cards.map(c => {
                            if (c.cardId === action.payload.cardId) {
                                return {...c, solved: true}
                            } else {
                                return {...c};
                            }
                        }), tempCards: [], steps: state.steps + 1
                    };
                } else if (state.tempCards[0].id === action.payload.id) {
                    return {...state, tempCards: [], steps: state.steps + 1};
                }
            }
            return {...state, tempCards: [...state.tempCards, action.payload], steps: state.steps + 1};
        case "clean_up_temp":
            if (state.tempCards.length >= 2 && state.tempCards[0].cardId !== state.tempCards[1].cardId) {
                return {...state, tempCards: []};
            }
            return state;
        case "get_cards":
            return {...action.payload, tempCards: [], steps: 0};
        case "get_last_game_session":
            return {...action.payload};
        default:
            return state;
    }
};

const getGameCards = dispatch => {
    return async (level) => {
        try {
            const response = await gameServer.get('/' + level);
            dispatch({type: 'get_cards', payload: {...response.data}});
        } catch (err) {
            dispatch({type: 'get_cards', payload: localGameData});
        }
    }
}

const saveGame = dispatch => {
    return async (gameState) => {
        try {
            const response = await gameServer.post('save', gameState);
            // save to local storage
            localStorage.setItem("userId", response.data.userId);
        } catch (err) {
            console.log(err)
        }
    }
}

const getLastGameSession = dispatch => {
    return async (userId) => {
        try {
            const response = await gameServer.get('saved-game/' + userId);
            dispatch({type: "get_last_game_session", payload: response.data});
        } catch (err) {
            dispatch({type: 'get_cards', payload: localGameData});
        }
    }
}

const addCartToTemp = (dispatch) => {
    return (card) => {
        dispatch({type: "add_card_to_temp", payload: card});
    }
}

const cleanUpTemp = (dispatch) => {
    return () => {
        setTimeout(() => dispatch({type: "clean_up_temp"}), 2000);
    }
}

export const {Context, Provider} = createDataContext(
    deckOfCardsReducer,
    {addCartToTemp, cleanUpTemp, getGameCards, saveGame, getLastGameSession},
    {
        steps: 0,
        cards: [],
        tempCards: [],
        level: 0,
    },
);

