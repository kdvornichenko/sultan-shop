import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
	selectFilteredByManufacturerProducts,
	selectFilteredByPriceProducts,
	selectFilteredByTypeProducts,
	selectProductsData,
} from '@/store/reducers/productsReducer'
import { setFilteredProducts } from '@/store/slices/productsSlice'

const useCompareAndFilterProducts = () => {
	const dispatch = useDispatch()
	const products = useSelector(selectProductsData)
	const productsByPrice = useSelector(selectFilteredByPriceProducts)
	const productsByManufacturer = useSelector(
		selectFilteredByManufacturerProducts
	)
	const productsByType = useSelector(selectFilteredByTypeProducts)

	useLayoutEffect(() => {
		let filteredProducts = []

		// Ищем товары, которые есть во всех массивах
		if (
			productsByPrice.length > 0 &&
			productsByManufacturer.length > 0
		) {
			for (const product of productsByPrice) {
				if (
					productsByManufacturer.find((p) => p.barcode === product.barcode)
				) {
					filteredProducts.push(product)
				}
			}
		} else {
			filteredProducts = products
		}

		dispatch(setFilteredProducts(filteredProducts))
	}, [products, productsByPrice, productsByManufacturer, productsByType])
}

export default useCompareAndFilterProducts
