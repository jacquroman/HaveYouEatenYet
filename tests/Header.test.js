// import { render, fireEvent, screen } from '../test-utils';
//above was a file that is not working because it is using experimental JSX which for some reason is not working
import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import Header from "../components/Header";

//TO DO: encase your test components in a describe method
//currently you have tests written with JEST and the react testing library
//also write some tests for the internal implementation using enzyme

test("header component renders", () => {
    render(<Header/>);
    const header = screen.getByTestId("header");
    expect(header).toBeInTheDocument();
});

//Testing Frameworks and What they Area Use for:
//1. React Testing Library
//2. Mocha
//3. Chai
//4. Sinon
//5. Enzyme
//6. JEST


// https://stackoverflow.com/questions/54152562/difference-between-enzyme-reacttestutils-and-react-testing-library

//unit tests are important because as you scale up it is hard to functionally test all parts of the component
//React Testing Library is a set of packages that help you test UI components in a user-centric way
//it will test on HOW the user interacts with various elements displayed on the page instead of actual implementation

//it does not test IMPLEMENTATION dtails/internals of a component you are testing

//the react testing library is for tests that resemble how users interact with the web pages

//Do not test:
    //internal state of component
    //internal methods of the component
    //lifecycle methods of a component
    //child components

//ENZYME TESTING - is for checking the value of internal code implementations, such as checking the value
// of state once you click any button, or checking the prop value if something changes BUT these are not necessary for
//testing with the React testing library

//INSTEAD you check the behavior of the DOM when the user clicks on a button or submits a form and so on

//@testing-library/jest-dom is required because it contains assertions like "toBeInTheDocument" "toHaveBeenCalled" etc.


// We try to only expose methods and utilities that encourage you to write tests that closely resemble how your web pages are used.

// Utilities are included in this project based on the following guiding principles:

// If it relates to rendering components, then it should deal with DOM nodes rather than component instances, and it should not encourage dealing with component instances.
// It should be generally useful for testing the application components in the way the user would use it. We are making some trade-offs here because we're using a computer and often a simulated browser environment, but in general, utilities should encourage tests that use the components the way they're intended to be used.
// Utility implementations and APIs should be simple and flexible.
// At the end of the day, what we want is for this library to be pretty light-weight, simple, and understandable.


//these tests are meant to test the functionality of the application not the implementation

//tests i would need to write


//user should be able to successful search for a food item they like

//food item they search for should be added to a list of "To Eat" items

//user should be able to remove an item from the "To Eat List"

//user should be able to click on the side panel and filter the food list by country of food

