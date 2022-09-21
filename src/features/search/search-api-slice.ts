import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export interface infoType {
    trackId: number
    wrapperType : string,
    artistName : string,
    artworkUrl100 : string,
    longDescription : string
}

export interface dataType {

    resultCount : number,
    results : infoType[]
}

// https://itunes.apple.com/search?term=david+bowie&media=music
export function queryFormatter(term:string = ''){  
    const trimmed = term.trim();
    const escaped = encodeURIComponent(trimmed);
    const plusses = escaped.replaceAll('%20', '+');
    return `?term=${plusses}&media=music`;
}


export const apiSlice = createApi({

    reducerPath : 'api',
    baseQuery : fetchBaseQuery({ 
        baseUrl : 'http://localhost:5000/search'
     }),
     endpoints(builder){
        return {
            fetchInfo : builder.query<dataType,string>({
                // generate rest of query
                query(term:string){ return queryFormatter(term) }
            }) 
        }
     }
    });

export const { useFetchInfoQuery } = apiSlice; // generated query type
