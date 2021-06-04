import "@testing-library/jest-dom/extend-expect";
import {render, screen, cleanup, getByTestId} from "@testing-library/react";

import CardCover from "../CardCover";

afterEach(() => {
    cleanup();
})

test('should Covered Card component render', () => {

    render(<CardCover/>);
    const coveredCardElement = screen.getByTestId(`card-covered`);

    expect(coveredCardElement).toBeInTheDocument();
})

