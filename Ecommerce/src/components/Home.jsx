import React from 'react';
import ProductList from './ProductList';

const Home = () => {
  return (
    <div className="container">
      <p className="text-center bg-success bg-gradient text-white p-2 rounded">Productos Disponibles</p>
      <ProductList />
    </div>
  );
};

export default Home;