import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from '../App';


//TO DO: encase your test components in a describe method

//test tutorials: https://reactjs.org/docs/testing-recipes.html
//https://reactjs.org/docs/testing-environments.html
//https://reactjs.org/docs/testing-recipes.html#mocking-modules


test("app component renders", () => {
    render(<App/>);
    const app = screen.getByTestId("app");
    expect(app).toBeInTheDocument();
})
