import { useCallback, useState } from 'react'

import Filter from '@/components/Catalog/Filter'
import Products from '@/components/Catalog/Products'
import Sidebar from '@/components/Catalog/Sidebar/Sidebar'
import Sort from '@/components/Catalog/Sort'
import { FiltersState } from '@/types/filter.types'

const Catalog = () => {
	const [filters, setFilters] = useState<FiltersState>({})

	// Выбор одинаковых фильтров сверху и в сайдбаре
	const handleFilterChange = useCallback((filters: FiltersState) => {
		setFilters(filters)
	}, [])

	return (
		<div className="mt-6 sm:mt-7 md:mt-8 lg:mt-10 xl:mt-12">
			<div className="flex items-center justify-between">
				<h1 className="font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
					Косметика и гигиена
				</h1>
				<Sort />
			</div>

			<div className="mt-6 top-filter">
				<Filter filters={filters} setFilters={handleFilterChange} />
			</div>

			<div className="mt-7 flex gap-2 ">
				<div className="hidden md:block mt-5 lg:w-1/4">
					<Sidebar filters={filters} setFilters={handleFilterChange} />
				</div>
				<div className="w-full flex items-start justify-center flex-wrap gap-2 sx:justify-start lg:w-3/4 2xl:gap-6">
					<Products />
				</div>
			</div>
		</div>
	)
}

export default Catalog
