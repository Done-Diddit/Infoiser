import React, { useState } from 'react';
import { useFetchInfoQuery } from './search-api-slice';
import { TiltCard } from "./tilt-card";

export function Search(){

    const [searchTerm , setSearchTerm ] = useState('');
    const [hasSearched , setHasSearched] = useState(false);
  //  const { data = [], isFetching } = useFetchInfoQuery(searchTerm);
    const { data, isFetching } = useFetchInfoQuery(searchTerm);

    var term = "";

    var searchControl = (
        <div>
            <div>
                <h1>Artist, Album and Song Search</h1>
                <input type={'text'} onChange={(e) => {term = e.target.value } } ></input>
                <button onClick={ () => { 
                    //if(term.trim()) console.log(term)
                    console.log(data);
                    setSearchTerm(term);
                    setHasSearched(true);
                    } }>Search</button>
            </div>
            { hasSearched && (!data || (data) && !data.resultCount ) && <h2>no search results</h2> }
        </div>
        
    );

    var searchResults = (<div>
      {data && data.results.map((info) => (
          <TiltCard {...info} key={info.trackId.toString()} />
      ))}
    </div>);

    return <> {searchControl} {searchResults} </>;

}