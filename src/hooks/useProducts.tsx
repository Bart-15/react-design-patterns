import {fetchProducts, ProductFilters} from '@/service/product.service';

import {Product} from '@/types/product.types';
import {useQuery} from '@tanstack/react-query';

export function useProducts({search, category, maxPrice}: ProductFilters) {
  return useQuery<Product[]>({
    queryKey: ['products', {category, maxPrice, search}],
    queryFn: () => fetchProducts({category, maxPrice, search}),
  });
}
