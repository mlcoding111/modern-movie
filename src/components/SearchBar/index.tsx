import React from 'react'
import { SearchInput } from './styles'

type Props = {}

const SearchBar = (props: Props) => {
    let input = (document.querySelector('#search') as HTMLInputElement);

    const handleSubmit = (e : any) => {
        e.preventDefault();

        let searchValue = input?.value;
        if(searchValue){
            // Fetch the search request
        }else{
            // Do something else
        }
        console.log(searchValue)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
              <SearchInput id="search"/>
        </form>

    )
}

export default SearchBar