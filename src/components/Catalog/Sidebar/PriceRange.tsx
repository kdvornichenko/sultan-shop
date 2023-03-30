const PriceRange = () => {
	return (
		<>
			<div className="text-sm">
				<span className="mr-1.5 font-light text-slate-700">Цена</span>
				<span className="font-medium">₸</span>
			</div>
			<div className="mt-4 flex items-center gap-2.5">
				<input type="number" className="price-range" placeholder="0" />
				-
				<input type="number" className="price-range" placeholder="0" />
			</div>
		</>
	)
}

export default PriceRange
