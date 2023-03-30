import { IProduct } from 'models'
import { useSelector } from 'react-redux'

import {
	selectFilteredProducts,
	selectProductsLoading,
} from '@/store/reducers/productsReducer'

import ProductCard from '../ui/ProductCard/ProductCard'

import CardSkeleton from './CardSkeleton'

const Products = () => {
	const products = useSelector(selectFilteredProducts)
	const isLoading = useSelector(selectProductsLoading)

	return (
		<>
			{isLoading && (
				<>
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
				</>
			)}
			{products?.map((item: IProduct) => (
				<ProductCard key={item.barcode} product={item} />
			))}
		</>
	)
}

export default Products
