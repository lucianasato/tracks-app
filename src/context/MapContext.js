import React, { useState } from 'react';
import spotApi from '../api/spots';
const MapContext = React.createContext();

export const MapProvider = ({ children }) => {
  const [result, setResult] = useState([]);

  spotApi.get('map/listing')
  .then(response => {
    setResult(response.data);
  });

  return <MapContext.Provider value={result} >
    { children }
  </MapContext.Provider>
};

export default MapContext;