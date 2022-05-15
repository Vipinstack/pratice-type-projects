import React from 'react';

 export default function Calculater() {
   
    function add(a,b){
        let sum = a+b;
        return sum;
    }
    function Sub(a,b){
        let Sub = a-b;
        return Sub;
    }
    function Div(a,b){
        let Div = a/b;
        return Div;
    }
    function Mult(a,b){
        let Mult = a*b;
        return Mult;
    }

    return (
        <div>
            <h1>Calculater</h1>
            <ul>
                <li>Sum of two no is {add(40, 44)}</li>
                <li>Sub of two no is {Sub(30,3)}</li>
                <li>Div of two no is {Div(333,100)}</li>
                <li>Mult of two no is {Mult(15,2)}</li>
            </ul>
        </div>
    )
}


