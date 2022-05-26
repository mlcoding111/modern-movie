import React from 'react'
import { SearchInput } from './styles'
import MediaService from '../../services/MediaService'
import { useGlobalContext } from '../../global/MyGlobalContext'

import {useLocation} from 'react-router-dom'

type Props = {}

const SearchBar = (props: Props) => {
    let location = useLocation();

    const {data, setData} = useGlobalContext();
    const [prevData, setPrevData] = React.useState<any[]>([]); // Save old data
    let input = (document.querySelector('#search') as HTMLInputElement);

    // let element = document.querySelector('.genres-list')?.querySelectorAll('li')    
    // element?.forEach(element => element.classList.remove("active"))

    const handleSubmit = (e : any) => {
        setPrevData(data); // Save the prev state of data so we can restore it once the searchBar is empty
        e.preventDefault();
        let searchValue = input?.value;
        if(searchValue){
            // Fetch the search request
            MediaService.search(searchValue).then(res => setData(res.data.results))
        }else{
            setData(prevData)
            // Reset data 
        }
        console.log(searchValue)
    }

    // Everytime location change, empty the SearchBar Value
    React.useEffect(()=>{
        input.value = ""
    }, [location])

    

    const handleEmptyValue = () =>{
        if(input?.value == ""){
            setData(prevData) // Reset data state to the old value
        }        
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} onChange={handleEmptyValue}>
              <SearchInput id="search"/>
        </form>

    )
}

export default SearchBar