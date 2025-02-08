import { describe,test,expect,vi } from "vitest";
import { render } from "@testing-library/react";

import App from "./App";

describe("App", () => {
    test("should render correctly", () => {
        const { toJSON } = render(<App />);
        expect( toJSON ).toMatchSnapshot();
    });

    test("should contain "vite", () => {
        const { getElementByText } = render(<App/>);
        expect( getElementByText (/vite/i) ).toBeTruthy;
    });
})