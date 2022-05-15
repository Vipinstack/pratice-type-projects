
function App() {
  return (
      <>
       <h1 style={{display:'flex',alignItems: "center",justifyContent: "center",color:"#9e9e9e"}}>Increment/Decement Conter</h1>
       <h5 style={{display:'flex',alignItems: "center",justifyContent: "center",color:"#9e9e9e"}}>using react and redux</h5>
       <div style={{display:'flex',alignItems: "center",justifyContent: "center"}}>

      <span style={{display:'flex',alignItems: "center",justifyContent: "center",fontSize:"0px",backgroundColor:"#9e9e9e",borderRadius:"10%"}}>
      <button style={{margin:"1px",padding:"10px",fontSize:"20px"}}>+</button>
      <input style={{margin:"1px",padding:"10px",fontSize:"20px",backgroundColor:"white"}} type="text" value="9990235068"/>
      <button style={{ margin:"2px",padding:"10px",fontSize:"20px"}}>-</button>
      </span>
      </div>
      </>
  );
}

export default App;
