import React from 'react'
import { SearchInput } from './styles'
import MediaService from '../../services/MediaService'
import { useGlobalContext } from '../../global/MyGlobalContext'

type Props = {}

const SearchBar = (props: Props) => {
    const {data, setData} = useGlobalContext();

    let input = (document.querySelector('#search') as HTMLInputElement);

    const handleSubmit = (e : any) => {
        e.preventDefault();
        let searchValue = input?.value;
        if(searchValue){
            // Fetch the search request
            MediaService.search(searchValue).then(res => setData(res.data.results))
        }else{
            MediaService.getPopular('movie').then(res=> setData(res.data.results))
            // Reset data 
        }
        console.log(searchValue)
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} onChange={(e) => input?.value == "" ? MediaService.getPopular('movie').then(res=> setData(res.data.results)) : null}>
              <SearchInput id="search"/>
        </form>

    )
}

export default SearchBar