import React from 'react'
import { SearchInput } from './styles'
import MediaService from '../../services/MediaService'
import { useGlobalContext } from '../../global/MyGlobalContext'

type Props = {}

const SearchBar = (props: Props) => {
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

    

    const handleEmptyValue = () =>{
        if(input?.value == ""){
            setData(prevData) // Reset data state to the old value
            // MediaService.getGenresList(type)
            // genresList.forEach(genre => {
            //     genre.name === innerText ? document.getElementById(innerText)?.classList.add("active") : document.getElementById(genre.name)?.classList.remove("active")
            //   })
        }        
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} onChange={handleEmptyValue}>
              <SearchInput id="search"/>
        </form>

    )
}

export default SearchBar