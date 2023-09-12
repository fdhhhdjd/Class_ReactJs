//* REACT
import React, { useState } from 'react';

//* DATA
import { productDummy } from '../../../data/productDummy';

//* COMPONENTS
import ProductList from '../components/productList';

const Learn_1 = () => {
  const [products] = useState(productDummy);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default Learn_1;
