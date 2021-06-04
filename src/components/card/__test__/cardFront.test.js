import "@testing-library/jest-dom/extend-expect";
import {render, screen, cleanup, getByTestId} from "@testing-library/react";

import CardFront from "../CardFront";

afterEach(() => {
    cleanup();
})

test('should Up facing Card component render', () => {
    const value = {
        type: 1,
        value: 3,
        solved: false,
        id: "13",
        cardId: "13",
    }
    render(<CardFront value={value}/>);

    const frontFacingCardElement = screen.getByTestId(`card-facing-up`);

    expect(frontFacingCardElement).toBeInTheDocument();
})

