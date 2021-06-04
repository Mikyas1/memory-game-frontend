import "@testing-library/jest-dom/extend-expect";
import {render, screen, cleanup, getByTestId} from "@testing-library/react";

import TopNav from "../TopNav";

afterEach(() => {
    cleanup();
})

const state = {
    steps: 0,
    cards: [
        {
            type: 1,
            value: 3,
            solved: false,
            id: "13",
            cardId: "13",
        },
    ],
    tempCards: [],
    level: 4,
};

test('should TopNav component render', () => {

    render(<TopNav gameState={state} isCompleted={true} getGameCards={() => {}} saveGame={() => {}}/>);

    const topNavElement = screen.getByTestId(`top-nav`);

    expect(topNavElement).toBeInTheDocument();
})

test('should TopNav component render with game completed', () => {

    render(<TopNav gameState={state} isCompleted={true} getGameCards={() => {}} saveGame={() => {}}/>);

    const topNavElement = screen.getByTestId(`top-nav`);

    expect(topNavElement).toBeInTheDocument();
    expect(topNavElement).toHaveTextContent('Game Completed!!!');
})

