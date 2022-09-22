import React, { useEffect, useState } from 'react';
import { dataType, useFetchInfoQuery } from './search-api-slice';
import { TiltCard } from "./tilt-card";

function useHasResults(data : dataType | undefined){

    const [preSearch , setPreSearch] = useState(true);
    const [hasResults, setHasResults] = useState(false);

    useEffect(() => {

        setHasResults( preSearch || !!data && !!data.resultCount );
    })
    
    return [hasResults, setPreSearch] as const
}


export function Search(){

    const [searchTerm , setSearchTerm ] = useState('');
    
    const { data, isFetching } = useFetchInfoQuery(searchTerm);
    const [ hasResults, setPreSearch ] = useHasResults(data);

    var term = "";

    var searchControl = (
        <div>
            <div>
                <h1>Artist, Album and Song Search</h1>
                <button onClick={ () => { 

                // setSearchTerm(term);
                setPreSearch(true);
                } }>clear</button>
                
                <input type={'text'} onChange={(e) => {term = e.target.value } } ></input>
                <button onClick={ () => { 

                    setSearchTerm(term);
                    setPreSearch(false);
                    } }>Search</button>
                </div>
            { hasResults || <h2>no search results</h2> }
        </div>
        
    );

    var searchResults = (<div>
      {data && data.results.map((info) => (
          <TiltCard {...info} key={info.trackId.toString()} />
      ))}
    </div>);

    return <> {searchControl} {searchResults} </>;

}