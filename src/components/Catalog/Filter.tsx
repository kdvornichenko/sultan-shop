import { filterData } from 'data/filter.data'
import { IFilterItem } from 'models'
import { ChangeEvent, FC } from 'react'

import { FiltersState } from '@/types/filter.types'

const Filter = ({
	filters,
	setFilters,
}: {
	filters: FiltersState
	setFilters: (filters: FiltersState) => void
}) => {
	const filteredData = [...filterData]

	const handleFilterChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		const checked = event.target.checked
		setFilters({ ...filters, [value]: checked })
	}

	return (
		<>
			{filteredData.map((item: IFilterItem) => (
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
