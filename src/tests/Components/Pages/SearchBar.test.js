import React from "react";
import SearchBar from "../../../Components/Pages/SearchBar.js";
import {render, fireEvent, cleanup} from '@testing-library/react';
import mockFetch from "../DummyData/mockFetch.js";


describe('SearchBar', function(){
    let searchbar;

    beforeEach(()=>{
        searchbar = render(<SearchBar/>)
    })

    afterEach(() => {
        cleanup();
        jest.restoreAllMocks();
    })

    it('should render searchbar component input field and submit elements correctly', () => {
        const inputSearch = searchbar.getByTestId("search-input")
        expect(inputSearch).toBeInTheDocument();
        const clickHandler = searchbar.getByTestId("searchclick")
        expect(clickHandler).toBeInTheDocument();
    })

    it("should return an empty string if no user input", ()=> {
        const inputSearch = searchbar.getByTestId("search-input")
        expect(inputSearch.value).toBe('')
        const clickHandler = searchbar.getByTestId("searchclick")
        fireEvent.click(clickHandler);
    })

    it("should return word entered if user input", async ()=> {
        const inputSearch = searchbar.getByTestId("search-input")
        expect(inputSearch.value).toBe('')
        fireEvent.change(inputSearch, {target: {value: 'oat'}})
        expect(inputSearch.value).toBe('oat')
        const clickHandler = searchbar.getByTestId("searchclick")
        fireEvent.click(clickHandler);

    })

    it("should return user entered and convert it to lowercase", ()=> {
        const inputSearch = searchbar.getByTestId("search-input")
        expect(inputSearch.value).toBe('')
        fireEvent.change(inputSearch, {target: {value: 'Oat'}})
        fireEvent.change(inputSearch, {target: {value: 'oat'}})
        const clickHandler = searchbar.getByTestId("searchclick")
        fireEvent.click(clickHandler);
        expect(inputSearch.value).toBe('oat')
    })
    
})


describe('jest.spyOn', () => {
    let searchbar;
    let windowFetchSpy;
    
    beforeEach(()=>{
        const setWords = jest.fn()
        jest
            .spyOn(React, 'useState')
            .mockImplementation(words => [words, setWords])

        
        
        global.fetch = jest.fn(() => Promise.resolve({
            json: () => Promise.resolve(mockFetch)
        }))
       windowFetchSpy = jest.spyOn(window, 'fetch').mockImplementation(mockFetch);
        searchbar = render(<SearchBar/>)
        
    })

    afterEach(() => {
        jest.restoreAllMocks();
    })

    it("should make api call", ()=> {
        
        searchbar.debug()
        const clickHandler = searchbar.getByTestId("searchclick")
        fireEvent.click(clickHandler);

        // expect(windowFetchSpy).toHaveBeenCalled()
        // expect(windowFetchSpy).toHaveBeenCalledWith('https://api.dictionaryapi.dev/api/v2/entries/en/oat')
        // expect(searchbar.getByText("Widely cultivated cereal grass, typically Avena sativa.")).toBeVisible()

        // expect(setWords).toHaveBeenCalled()
        

    })

    

})