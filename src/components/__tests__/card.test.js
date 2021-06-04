import "@testing-library/jest-dom/extend-expect";
import {render, screen, cleanup, getByTestId} from "@testing-library/react";

import Card from "../Card";
import CardFront from "../card/CardFront";

afterEach(() => {
    cleanup();
})

test('should Card component render', () => {
    const card = {
        type: 1,
        value: 3,
        solved: false,
        id: "13",
        cardId: "13",
    };

    render(<Card value={card}
                 cleanUpTemp={() => {}}
                 inTemp={false}
                 addCartToTemp={() => {}}/>
    );
    const cardElement = screen.getByTestId(`card-${card.id}`);

    expect(cardElement).toBeInTheDocument();
})

test ('should Card face be covered when not solved and not in Temp', () => {
    const card = {
        type: 1,
        value: 3,
        solved: false,
        id: "13",
        cardId: "13",
    };

    render(<Card value={card}
                 cleanUpTemp={() => {}}
                 inTemp={false}
                 addCartToTemp={() => {}}/>
    );
    const cardElement = screen.getByTestId(`card-${card.id}`);

    expect(cardElement).toBeInTheDocument();
    expect(screen.getByTestId('card-covered')).toBeInTheDocument();
})

test ('should Card face be facing up when solved but not in Temp', () => {
    const card = {
        type: 1,
        value: 3,
        solved: true,
        id: "13",
        cardId: "13",
    };

    render(<Card value={card}
                 cleanUpTemp={() => {}}
                 inTemp={false}
                 addCartToTemp={() => {}}/>
    );
    const cardElement = screen.getByTestId(`card-${card.id}`);

    expect(cardElement).toBeInTheDocument();
    expect(screen.getByTestId('card-facing-up')).toBeInTheDocument();
})

test ('should Card face be facing up when not solved but in Temp', () => {
    const card = {
        type: 1,
        value: 3,
        solved: true,
        id: "13",
        cardId: "13",
    };

    render(<Card value={card}
                 cleanUpTemp={() => {}}
                 inTemp={true}
                 addCartToTemp={() => {}}/>
    );
    const cardElement = screen.getByTestId(`card-${card.id}`);

    expect(cardElement).toBeInTheDocument();
    expect(screen.getByTestId('card-facing-up')).toBeInTheDocument();
})