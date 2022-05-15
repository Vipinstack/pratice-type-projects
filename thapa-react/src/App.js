import Form from './Component/Form';
// import Digital from './Component/Digital';
// import Events from './Component/Events';
// import Amazon from './Amazon';
// import Calculater from './Calculater';
// import Card from './Cards';
// import Netflix from './Netflix';
// import Sdata from './Sdata';
// var React = require ("react");
// var ReactDom = require("react-dom");



const App =() =>{
  return (
    <>
    <Form/>
    </>
  )
}


















// const App = () =>{
//   return(
//     <>
//       {/* <Digital /> */}
//       {/* <Events /> */}
//       <Form />

//     </>
//   );
// }







// const App = () => {

//   let newTime = new Date().toLocaleTimeString();

//   const [ctime, setCtime] = useState(newTime);

//   const IncTm = () =>{
//     let newCTime = new Date().toLocaleTimeString();
//     setCtime(newCTime);
//   };
//   return (

//     <>
//       <h1>⏰</h1>
//       <h1>{ctime}</h1>
//       <button onClick={IncTm}>upDate</button>


//     </>
//   )
// }





// const App = () =>{

// const state = useState();
// // console.log(state);

// const [count, setstate] = useState(0)

// const IncNum = () =>{
//   setstate(count +1);
//   // console.log(setstate);
// }

// return(
// <>
// <h1>Learn For Hooks !?</h1>
// <h1>{count}</h1>
// <button onClick={IncNum}>Click Me</button>

// </>

// )

// }







































// const FunSum =() =>{

//1. Destructuring assignment

  // let [a,b]=[1,2];
  // [a,b]=[b,a];

//2. Temporary variable

// let a = 1;
// let b = 2;
// let temp;

// temp = a;
// a = b;
// b = temp;

//3. Addition and difference

// let a = 1;
// let b = 2;

// a = a + b;
// b = a - b;
// a = a - b;

//4. Bitwise XOR operator

// let a = 1;
// let b = 2;

// a = a ^ b;
// b = a ^ b;
// a = a ^ b;



// let a=10, b=20, c=30;

// a = a + b + c; //60
// b = a - (b + c); //10
// c = a - (b + c); //20
// a = a - (b + c); //30


// let [a,b,c]=[10,20,30];
//   [a,b,c]=[c,a,b];



// console.log(`${a} ${b}`);
// alert(`${a} ${b}`)
// document.write(`${a} ${b}`);

// }



// const App =()=>{
 
//     return(
//       <>
//           <h1>Change two number ?</h1>
//           <FunSum />
                  
//       </>
  
//     );
//   }
















// const SlotM=(props)=>{
//   let x='😍';
//   let y='😍';
//   let z='😍';

// if(x===y && y===z){
//   return(
//     <>
//     <hr />
//     <div style={{display:'flex', justifyContent:'center' }}>
//       {x}{y}{z}
//     </div>
//     <h1 style={{display:'flex', justifyContent:'center' }}>This is Matching</h1>
//     <hr />
//     </>
//   );
// }else{
//   return(
//     <>
//     <div>
//       {x}{y}{z}
//     </div>
//     <h1>This is not Matching</h1>
//     <hr />
//     </>
//   );
// }
// }

// const App =()=>{
 
//   return(
//     <>
//     <h1 style={{display:'flex', justifyContent:'center' }}>🎰Welcome to  Slote machine game🎰</h1>
//    <SlotM />



//     </>

//   );
// }









// const favSeries ='Amzon';

// const FavS = () =>{
//   if( favSeries === 'Amzon'){
//     return <Netflix />
//   }else{
//     return <Amazon />
// }
// };


// const App = () =>(
//     <>
// {/*     
//     {Sdata.map((c) => {
//       return(
      
//       <Card 
//             key={c.id}
//             imgsrc={Sdata[0].imgsrc}
//             titile={Sdata[0].titile}
//             Category={Sdata[0].Category}
//             link={Sdata[0].link}
//        />
  
//       );
//     })} */}
//      {/* {Sdata.map((ncards))}; */}

//      {favSeries ==='Amzon' ? <Netflix /> : <Amazon />}

//      {/* <FavS /> */}

     
//    </>
//   );










//Normal function .... 

// function ncards(val){
//   return(
//     <Card  imgsrc={Sdata[0].imgsrc}
//     titile={Sdata[0].titile}
//     Category={Sdata[0].Category}
//     link={Sdata[0].link}
//   />
//   );
// }


//Arrow Functioin....⏩

// const ncards = (val) =>{
//   return(
//     <Card  imgsrc={Sdata[0].imgsrc}
//     titile={Sdata[0].titile}
//     Category={Sdata[0].Category}
//     link={Sdata[0].link}
//   />
//   );
// }

// const App = () =>(
//   <>
  
//   {Sdata.map((c) => {
//     return(
    
//     <Card 
//           key={c.id}
//           imgsrc={Sdata[0].imgsrc}
//           titile={Sdata[0].titile}
//           Category={Sdata[0].Category}
//           link={Sdata[0].link}
//      />

//     );
//   })}
//    {/* {Sdata.map((ncards))}; */}
//  </>
// );
 











//Calculater..

// ReactDom.render(
//   <>
//     <Calculater />
    
//   </>,
//   document.getElementById("root"));




//New Project for Gretting .

// let currtDate = new Date();
// currtDate =currtDate.getHours();
// let greeting='';
// const cssStyle = { };

// if(currtDate >=1 && currtDate <12)
// {
//   greeting='Good morning';
//   cssStyle.color = 'green';

// }else if(currtDate >=12 && currtDate<19)
// {
//     greeting='Good Afternone';
//     cssStyle.color = 'orange';

// }else 
// {
//   greeting='Good night';
//   cssStyle.color = 'black';
// }

// ReactDom.render(
// <>
// <div className='span_div'>
// <h1>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
// </div>
// </>,
// document.getElementById("root"));




// const curtDate = new Date().toLocaleDateString();
// const curtTime = new Date().toLocaleTimeString();

// const img1 ="https://picsum.photos/200/300";
// const img2 ="https://picsum.photos/250/300";
// const img3 ="https://picsum.photos/300/300";



// const Heading={

//   textAlign: 'center',
//   fontWeight: 'bold',
//   textTransform: 'capitalize',
//   textShadow: '0px 2px 4px black', 
//   color: 'red',
//   margin: '70px',
//   fontFamily: ' "Coda Caption ", sans-serif'
// }

// ReactDom.render(

//     <>
//       <h1 style={Heading}>Hello, I am Vipin Chauhan !!</h1>
//       {/* <p>{`Today Date is ${curtDate}`}</p>
//       <p>{`Today Time is ${curtTime}`}</p> */}

//       <div className="img_div">
//       <img src={img1} alt="randomImages"/>
//       <img src={img2} alt="randomImages"/>
//       <img src={img3} alt="randomImages"/>
//       </div>
      
//     </>,
// document.getElementById("root"));



//template literals.

// const firstName = 'vipin';
// const lastName = 'Chauhan';

// ReactDom.render(
//     <>
//       <h1>Helo Vipin {`${firstName} ${lastName}`}!!</h1>
//     </>,
// document.getElementById("root"));



//Code of React show the data !!

//#1
// ReactDom.render(
// <>
// <h1>Vipin chauhan Netflix Pick !!</h1>
// <p>List of 5 Best Series.</p>
// <ol>
//   <li>Dark</li>
//   <li>Extra curricular</li>
//   <li>My Holo Love</li>
//   <li>My First-2 Love</li>

// </ol>
// </>,
// document.getElementById("root"));



//#2
// const fistName = 'Vipin chauhan';

// ReactDom.render(
// <>
// <h1>that is a Javascript expression</h1>
// <p>mujhe sum krna hai 2and 3 ka {2+3} {fistName}</p>
// </>,
// document.getElementById("root"));

//Code of bebel show the data !!

  // ReactDom.render( React.createElement("h1", 
  // null,
  //  "Vipin chauhan !!"), 
  //  document.getElementById("root"));

//Code of Javascript show the data !!

  //  var h1 =document.createElement('h1');
  //  h1.innerHTML='Thakur vipin chauhan';
  //  document.getElementById('root').appendChild(h1);

  export default App; 