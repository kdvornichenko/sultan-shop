import { Dispatch, SetStateAction } from 'react'

import Filter from '../Filter'

import ManufacturersFilter from './ManufacturersFilter'
import PriceRange from './PriceRange'
import { FiltersState } from '@/types/filter.types'

const Sidebar = ({
	filters,
	setFilters,
}: {
	filters: FiltersState
	setFilters: (filters: FiltersState) => void
}) => {
	return (
		<div className="catalog-sidebar">
			<div>
				<h4 className="uppercase">Подбор по параметрам</h4>
				<div className="mt-2.5">
					<PriceRange />
				</div>
				<div className="mt-7">
					<h2 className="font-medium">Производитель:</h2>
					<div className="mt-4">
						<ManufacturersFilter />
					</div>
				</div>
			</div>

			<div className="mt-10">
				<h4 className="uppercase">Уход за телом</h4>
				<div className="sidebar-filter">
					<Filter filters={filters} setFilters={setFilters} />
				</div>
			</div>
		</div>
	)
}

export default Sidebar
