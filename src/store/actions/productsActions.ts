import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IProduct } from 'models'

export const fetchProducts = createAsyncThunk<IProduct[]>(
	'products/fetch',
	async () => {
		const response = await axios.get<IProduct[]>(
			import.meta.env.VITE_CATALOG_URL
		)
		return response.data
	}
)
