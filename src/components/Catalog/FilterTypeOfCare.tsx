import { filterData } from 'data/filter.data'
import { IFilterItem } from 'models'
import { ChangeEvent, FC } from 'react'
import { useSelector } from 'react-redux'

import { selectProductsData } from '@/store/reducers/productsReducer'

import { FiltersState } from '@/types/filter.types'

const Filter: FC<{
	filters: FiltersState
	setFilters: (filters: FiltersState) => void
}> = ({ filters, setFilters }) => {
	const filteredTypesOfCareData = [...filterData]
	const products = useSelector(selectProductsData)

	const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		const checked = event.target.checked
		setFilters({ ...filters, [value]: checked })
	}

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

export default Filter
