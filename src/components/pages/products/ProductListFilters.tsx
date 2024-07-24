import {useDebounce} from '@/hooks/useDebounce';
import {ProductFilters} from '@/service/product.service';
import {useEffect, useState} from 'react';

type ProductListFiltersProps = {
  onChange: (filters: ProductFilters) => void;
};

export default function ProductListFilters({
  onChange,
}: ProductListFiltersProps) {
  const [search, setSearch] = useState<ProductFilters['search']>('');
  const debouncedSearch = useDebounce(search);

  const [category, setCategory] = useState<ProductFilters['category']>('all');
  const [maxPrice, setMaxPrice] = useState<ProductFilters['maxPrice']>(0);

  useEffect(() => {
    onChange({category, maxPrice, search: debouncedSearch});
  }, [category, debouncedSearch, maxPrice]);

  function clearFilters() {
    setSearch('');
    setCategory('all');
    setMaxPrice(0);
  }

  return (
    <div className='flex flex-row gap-2 mb-2'>
      <input
        type='text'
        value={search}
        className='simple-input'
        onChange={(e) => setSearch(e.target.value)}
        placeholder='Search products'
      />
      <select
        value={category}
        className='w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        onChange={(e) =>
          setCategory(e.target.value as ProductFilters['category'])
        }
      >
        <option value='all' defaultChecked>
          All
        </option>
        <option value='first'>First</option>
        <option value='second'>Second</option>
        <option value='third'>Third</option>
      </select>
      <select
        value={maxPrice}
        className='w-[300px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
        onChange={(e) =>
          setMaxPrice(e.target.value ? parseInt(e.target.value) : undefined)
        }
      >
        <option value='0'>0</option>
        <option value='100'>100</option>
        <option value='500'>500</option>
        <option value='1000'>1000</option>
      </select>
      <button onClick={() => clearFilters()} className='btn-primary'>
        Clear
      </button>
    </div>
  );
}
