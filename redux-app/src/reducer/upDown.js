const intitalState = 20;
const changeTheNumber = (state=intitalState, action) =>{
    switch(action.type){
        case "INCREMENT" : return state+1;
        case "DECREMENT" : return state-1;
        default : return  state;
    }
    
}

export default changeTheNumber;