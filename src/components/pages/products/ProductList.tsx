'use client';

import {useProducts} from '@/hooks/useProducts';
import {ProductFilters} from '@/service/product.service';
import {useState} from 'react';
import ProductCard from './ProductCard';
import ProductListFilters from './ProductListFilters';
const ProductList = () => {
  const [search, setSearch] = useState<ProductFilters['search']>();
  const [category, setCategory] = useState<ProductFilters['category']>();
  const [maxPrice, setMaxPrice] = useState<ProductFilters['maxPrice']>();
  const {data: products} = useProducts({
    search,
    category,
    maxPrice,
  });

  return (
    <>
      <ProductListFilters
        onChange={(filters) => {
          setCategory(filters.category);
          setMaxPrice(filters.maxPrice);
          setSearch(filters.search);
        }}
      />
      <div className='flex flex-row flex-wrap gap-4'>
        <div className='flex flex-row flex-wrap gap-4'>
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
