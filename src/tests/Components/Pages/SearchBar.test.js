import React from "react";
import SearchBar from "../../../Components/Pages/SearchBar.js";
import {render, fireEvent, cleanup} from '@testing-library/react';

describe('SearchBar', function(){
    let searchbar;

    beforeEach(()=>{
        searchbar = render(<SearchBar/>);
    })

    afterEach(() => {
        cleanup();
    })

    it('should render searchbar component input field and submit elements correctly', () => {
        const inputSearch = searchbar.getByTestId("search-input");
        expect(inputSearch).toBeInTheDocument();
        const clickHandler = searchbar.getByTestId("searchclick");
        expect(clickHandler).toBeInTheDocument();
    })

    it("should return an empty string if no user input", ()=> {
        const inputSearch = searchbar.getByTestId("search-input");
        expect(inputSearch.value).toBe('');
    })

    it("should return word entered if user input", ()=> {
        const inputSearch = searchbar.getByTestId("search-input");
        expect(inputSearch.value).toBe('');
        fireEvent.change(inputSearch, {target: {value: 'banana'}});
        expect(inputSearch.value).toBe('banana');
    })

    it("should return word user entered and convert it to lowercase", ()=> {
        const inputSearch = searchbar.getByTestId("search-input");
        expect(inputSearch.value).toBe('');
        fireEvent.change(inputSearch, {target: {value: 'Oat'}});
        expect(inputSearch.value).toBe('oat');
    })  
})
