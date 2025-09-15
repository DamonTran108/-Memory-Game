import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from "@testing-library/jest-dom/matchers";
import {render, screen} from '@testing-library/react';


import App from '../src/App';


describe('App', () => {

    it('Renders headline', () => {
        render(<App/>);
       
        
        expect(screen.getByRole("heading").textContent).toMatch("Test1");
    })
})


expect.extend(matchers);

afterEach(() =>{
    cleanup();
});