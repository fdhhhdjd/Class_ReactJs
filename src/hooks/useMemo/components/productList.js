import { useMemo, useState } from 'react';

const ProductList = ({ products }) => {
  const [sortBy, setSortBy] = useState('price-asc');

  // Sử dụng useMemo để sắp xếp danh sách sản phẩm dựa trên sortBy
  const sortedProducts = useMemo(() => {
    const copyOfProducts = [...products]; // Tạo bản sao của danh sách sản phẩm để không làm ảnh hưởng đến danh sách gốc

    if (sortBy === 'price-asc') {
      return copyOfProducts.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-desc') {
      return copyOfProducts.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'name-asc') {
      return copyOfProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      // Mặc định sắp xếp theo giá tăng dần
      return copyOfProducts.sort((a, b) => a.price - b.price);
    }
  }, [products, sortBy]);

  console.log('re-render');

  return (
    <div>
      <h1>Product List</h1>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="name-asc">Name: A to Z</option>
      </select>
      <ul>
        {sortedProducts.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
