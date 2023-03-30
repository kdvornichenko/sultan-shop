import { ChangeEvent, FormEvent, useState } from 'react'
import { useSelector } from 'react-redux'

import useDeleteProduct from '@/hooks/useDeleteProduct'

import {
	selectDataFetchLoading,
	selectIsError,
	selectMessageAfterDataFetch,
} from '@/store/reducers/dataFetchReducer'

import AfterSubmitMessage from './AfterSubmitMessage'
import SubmitButton from './SubmitButton'

const DeleteProductForm = () => {
	const [barcode, setBarcode] = useState<string>('')

	const dataFetchLoading = useSelector(selectDataFetchLoading)
	const messageAfterDataFetch = useSelector(selectMessageAfterDataFetch)
	const isError = useSelector(selectIsError)

	const handleBarcodeChange = (event: ChangeEvent<HTMLInputElement>) => {
		setBarcode(event.target.value)
	}

	const deleteProduct = useDeleteProduct(barcode)

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		deleteProduct()
		if (!isError) {
			setBarcode('')
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<h2 className="mb-5 font-semibold text-3xl text-center">Удалить товар</h2>
			<div>
				<label>Штрихкод:</label>
				<input
					type="number"
					id="barcode"
					name="barcode"
					value={barcode}
					onChange={handleBarcodeChange}
					required
					className={isError ? 'border-red-500' : ''}
				/>
			</div>
			<AfterSubmitMessage isError={isError} message={messageAfterDataFetch} />

			<SubmitButton isLoading={dataFetchLoading} text="Удалить" />
		</form>
	)
}

export default DeleteProductForm
