import { filterData } from 'data/filter.data'
import { IFilterItem } from 'models'
import { ChangeEvent, FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import {
	selectFilteredByTypeProducts,
	selectProductsData,
} from '@/store/reducers/productsReducer'
import { setFilteredByTypeProducts } from '@/store/slices/productsSlice'

import { FiltersState } from '@/types/filter.types'

const FilterTypeOfCare: FC<{
	filters: FiltersState
	setFilters: (filters: FiltersState) => void
}> = ({ filters, setFilters }) => {
	const dispatch = useDispatch()
	const filteredTypesOfCareData = [...filterData]
	const products = useSelector(selectProductsData)
	const [filteredProducts, setFilteredProducts] = useState(products)
	const filtProd = useSelector(selectFilteredByTypeProducts)

	const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		const checked = event.target.checked
		setFilters({ ...filters, [value]: checked })
	}

	useEffect(() => {
		const filtered = products.filter((product) => {
			return product.typeOfCare.some((type) => filters[type])
		})
		setFilteredProducts(filtered)
	}, [filters, products])

	useEffect(() => {
		dispatch(setFilteredByTypeProducts(filteredProducts))
		console.log(filteredProducts)
	}, [filteredProducts, dispatch])

	return (
		<>
			{filteredTypesOfCareData.map((item: IFilterItem) => (
				<label key={item.type}>
					<span>{item.title}</span>
					<input
						type="checkbox"
						value={item.type}
						checked={filters[item.type]}
						onChange={handleFilterChange}
					/>
					<span />
				</label>
			))}
		</>
	)
}

export default FilterTypeOfCare
