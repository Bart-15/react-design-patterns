/* eslint-disable @next/next/no-img-element */
import {Product} from '@/types/product.types';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({product}: ProductCardProps) {
  return (
    <div className='flex w-[250px] flex-col gap-2 rounded-md bg-neutral-800 p-3 text-white'>
      <div className='flex flex-row justify-between'>
        <div>
          <h2 className='text-xl font-bold'>{product.name}</h2>
          <p className='opacity-50'>{product.category}</p>
        </div>
        <p>${product.price}</p>
      </div>
      <img src={product.image} alt={product.name} className='rounded-md' />
    </div>
  );
}
