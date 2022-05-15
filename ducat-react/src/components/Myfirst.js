import React from 'react';


export default function Myfirst(pr) {
    return (
        <>
           <h1>Name is {`${pr.name} value ${pr.value}`}</h1>
            <ul>
                {pr.course.map(c=>
                <li>{c}</li>
                )}
            </ul>
               
       
        </>
    )
}
