import React from 'react';
import Header from '../src/components/Cabecalho';
import Hero from '../src/components/Hero';
import Form from '../src/components/FormVagas';
import ListaVagas from '../src/containers/ListaVagas';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Form />
      <ListaVagas />
    </>
  );
};

export default App;
