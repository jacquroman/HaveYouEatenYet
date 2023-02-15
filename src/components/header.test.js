// import { render, fireEvent, screen } from '../test-utils';
//above was a file that is not working because it is using experimental JSX which for some reason is not working

import {render, screen} from "@testing-library/react";
import Header from "./Header";


//test case just to see if the header component is showing up
//TODO write a test case for all the components to check they are rendering
//TODO write unit tests for button clicks (add food list item, remove food list item, click on side panel
//sort through food items with countries)
describe("Header component", () => {
    it("should render Header component correctly", () =>{
        render(<Header/>);
        const element = screen.getByRole('Have You Eaten Yet?');
        expect(element).toBeInTheDocument();
    })
})