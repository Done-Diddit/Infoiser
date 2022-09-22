import React, { useEffect, useState } from 'react';
import { dataType, useFetchInfoQuery } from './search-api-slice';
import { TiltCard } from './tilt-card';

export function logicOfuseHasResults(preSearch : boolean, data : dataType | undefined){

    return  preSearch || !!data && !!data.resultCount;
}

function useHasResults(data : dataType | undefined){

    const [preSearch , setPreSearch] = useState(true);
    const [hasResults, setHasResults] = useState(false);

    useEffect(() => {

        setHasResults(logicOfuseHasResults(preSearch, data));
    })
    
    return [hasResults, setPreSearch] as const
}


export function Search(){

    const [searchTerm , setSearchTerm ] = useState('');
    const [inputTerm, setInputTerm] = useState('');
    const { data, isFetching } = useFetchInfoQuery(searchTerm);
    const [ hasResults, setPreSearch ] = useHasResults(data);






    const searchControl = (
        <div>
            <div>
                <h1>Artist, Album and Song Search</h1>
                <label htmlFor='searchInput'>Search term:</label>
                <button 
                    onClick={ () => { 

                        setInputTerm('');
                        setSearchTerm('');
                        setPreSearch(true);
                        } }>
                    clear
                </button>
                <input  
                        id='searchInput' 
                        type='text'
                        value={inputTerm} 
                        onChange={(e) => setInputTerm(e.target.value) }
                        placeholder='artist, album or song' 
                />
                <button                 
                    onClick={ () => { 

                        setSearchTerm(inputTerm);
                        setPreSearch(false);
                    } }>
                    Search
                </button>
            </div>
            { isFetching || hasResults || <h2>no search results</h2> }
        </div>    
    );

    const resultsControl = (
        <div>
            {data && data.results.slice(0,10). map((info) => (
                <TiltCard {...info} key={info.trackId.toString()} />
            ))}
        </div>
    );

    return <> {searchControl} {resultsControl} </>;

}