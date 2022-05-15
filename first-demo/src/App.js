// import './App.css';
// import reactDom from 'react-dom';
// import Home from './Components/Home';
// import New from './Components/new';
// import Name from './Components/new';
// import Profile from './Components/Profile';
// import Formdata from './Components/Formdata';
// import Api from './Components/Api';

// function App(props) {
//     return (
//       <div>
//       <Api />
//       </div>

//   );
// }

// export default App;


import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>

        </InfoWindow>
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA4WYn4VYvG-82llqonU-zdIXmPrFNpg2s")
})(MapContainer)