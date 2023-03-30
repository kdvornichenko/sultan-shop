import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import {
	selectManufacturerFilter,
	selectProductsData,
	selectProductsLoading,
} from '@/store/reducers/productsReducer'
import {
	setFilteredProducts,
	setManufacturerFilter,
} from '@/store/slices/productsSlice'

import Input from '@/components/ui/Input'

const ManufacturersFilter = () => {
	const dispatch = useDispatch()
	const selectedManufacturer = useSelector(selectManufacturerFilter)
	const [searchQuery, setSearchQuery] = useState('')

	const productsData = useSelector(selectProductsData)
	const isLoading = useSelector(selectProductsLoading)

	useEffect(() => {
		let filtered = productsData ?? []
		if (selectedManufacturer.length > 0) {
			filtered = filtered.filter((product) =>
				selectedManufacturer.includes(product.manufacturer)
			)
		}
		dispatch(setFilteredProducts(filtered))
	}, [selectedManufacturer, productsData, dispatch])

	const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		dispatch(setManufacturerFilter(value))
	}

	const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSearchQuery(event.target.value)
	}

	const manufacturers = useMemo(
		() =>
			Array.from(new Set(productsData?.map((product) => product.manufacturer))),
		[productsData]
	)

	const filteredManufacturers = manufacturers.filter((manufacturer) => {
		return manufacturer.toLowerCase().includes(searchQuery.toLowerCase())
	})

	return (
		<>
			{isLoading ? (
				<div className="w-full max-w-[260px]">
					<Skeleton borderRadius={80} height={60} />
					<div className="mt-4">
						<Skeleton count={4} />
					</div>
				</div>
			) : (
				<>
					<Input
						placeholder="Поиск..."
						className="input-search"
						icon="MdOutlineSearch"
						iconSize="1.5rem"
						handleSearchChange={handleSearchChange}
					/>
					<div className="mt-4 manufacturers-filter">
						{filteredManufacturers.map((manufacturer) => (
							<label key={manufacturer} htmlFor={manufacturer}>
								<input
									type="checkbox"
									id={manufacturer}
									name="manufacturer"
									value={manufacturer}
									checked={selectedManufacturer.includes(manufacturer)}
									onChange={handleCheckboxChange}
								/>
								<span>{manufacturer}</span>
								<span>
									(
									{
										productsData?.filter((p) => p.manufacturer === manufacturer)
											.length
									}
									)
								</span>
							</label>
						))}
					</div>
				</>
			)}
		</>
	)
}

export default ManufacturersFilter
