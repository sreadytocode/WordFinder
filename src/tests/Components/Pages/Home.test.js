import React from "react";
import Home from "../../../Components/Pages/Home.js";
import {render, fireEvent, screen, cleanup} from '@testing-library/react';

describe('Home', function () {
    let home;


    beforeEach(()=>{
        home = render(<Home/>)
    })
    
    afterEach(() => {
        cleanup();
    })

    it('should render home component', () => {
        const homeComponent = home.getByTestId('home-1');
        expect(homeComponent).toBeInTheDocument();
    })

})

