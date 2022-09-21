import React, { useState } from 'react';

import { useFetchInfoQuery } from './search-api-slice';

export function Search(){

    const [searchTerm , setSearchTerm] = useState('');
    const { data = [], isFetching } = useFetchInfoQuery(searchTerm);

    var term = "";

    return (
        <div>
            <h1>Artist, Album and Song Search</h1>
            <input type={'text'} onChange={(e) => {term = e.target.value } } ></input>
            <button onClick={ () => { 
                //if(term.trim()) console.log(term)
                setSearchTerm(term);
                } }>Search</button>
        </div>
    )

}