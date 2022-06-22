import React, { useState } from 'react';


const SearchBar = (props) => {
    const [search, setSearch] = useState("")

    function handleSubmit(event){
        event.preventDefault();
        let searchTerm = {
            search: search
        };
        console.log(searchTerm)
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <div>
                <label>Search</label>
                <input type='text' value={search} onChange={(event)=> setSearch(event.target.value)}/>
                <button type='submit'>Search</button>
            </div>
        </form>
     );
}
 
export default SearchBar;