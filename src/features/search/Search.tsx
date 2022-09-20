import React, { useState } from 'react';


export function Search(){

    return (
        <div>
            <h1>Artist, Album and Song Search</h1>
            <input type={'text'} onChange={(e)=>console.log(e)} ></input>
        </div>
    )

}