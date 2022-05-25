import React from 'react'
import { SearchInput } from './styles'
import MediaService from '../../services/MediaService'

type Props = {}

const SearchBar = (props: Props) => {
    
    const [data, setData] = React.useState<any[]>([])

    let input = (document.querySelector('#search') as HTMLInputElement);

    const handleSubmit = (e : any) => {
        e.preventDefault();

        let searchValue = input?.value;
        if(searchValue){
            // Fetch the search request
            MediaService.search(searchValue).then(res => setData(res.data.results))
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