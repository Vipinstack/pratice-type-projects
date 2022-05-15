import React from 'react';
import Sdata from './Sdata';
import Card from './Cards';

const Netflix = () =>{
    return (
    <Card 
      key={Sdata[0].id}
      imgsrc={Sdata[0].imgsrc}
      titile={Sdata[0].titile}
      Category={Sdata[0].Category}
      link={Sdata[0].link}
  />
    )
}

export default Netflix;