const Sort = () => {
	return (
		<div>
			<span className="font-medium">Сортировка:</span>
			<select className="text-slate-700" name="sort" id="sort">
				<option value="1">Название ⬇</option>
				<option value="2">Название ⬆</option>
				<option value="3">Цена ⬇</option>
				<option value="4">Цена ⬆</option>
			</select>
		</div>
	)
}

export default Sort
