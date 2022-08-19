import React from 'react';
import {StatusBar} from 'react-native';
import Imc from './Imc';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <Imc />
    </>
  );
};

export default App;
