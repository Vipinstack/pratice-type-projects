import React, { Component } from 'react';

export default class Myclass extends Component {
    render() {
        return (
            <>
          
         <h1>Table_From_Data !!</h1>

         <table border={1} >

         <tr>
             <th>S.no</th>
             <th>Name</th>
             <th>Age</th>
             <th>city</th>
         </tr>

         {this.props.name.map((c,Ind)=>
         <tr>
             <th>{Ind+1}</th>
             <th>{c.name}</th>
             <th>{c.Age}</th>
             <th>{c.city}</th>
         </tr>
         
         )}

         </table>


         
        {this.props.cast.map((c,Ind)=>
         <ol>
             <li>{c.id}</li>
             <li>{c.name}</li>
             <li>{c.info}</li>
         </ol>
         
         )}

        

         
        </>
        )
    }
}
