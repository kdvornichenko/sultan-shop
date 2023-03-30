import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICartProduct, IProduct } from 'models'

interface IProductsState {
	data: IProduct[]
	loading: boolean
	filteredData: IProduct[]
	manufacturerFilter: string[]
	currentProductBarcode: string | undefined
	productsInCart: ICartProduct[]
}

const initialState: IProductsState = {
	data: [],
	loading: true,
	filteredData: [],
	manufacturerFilter: [],
	currentProductBarcode: '',
	productsInCart: [],
}

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProductsData: (state, action: PayloadAction<IProduct[]>) => {
			state.data = action.payload
			state.loading = false
		},
		setProductsLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload
		},
		setFilteredProducts: (state, action: PayloadAction<IProduct[]>) => {
			state.filteredData = action.payload
		},
		clearFilteredProducts: (state) => {
			state.filteredData = state.data
		},
		setManufacturerFilter: (state, action: PayloadAction<string>) => {
			const index = state.manufacturerFilter.indexOf(action.payload)
			if (index === -1) {
				state.manufacturerFilter.push(action.payload)
			} else {
				state.manufacturerFilter.splice(index, 1)
			}
		},
		setCurrentProductBarcode: (
			state,
			action: PayloadAction<string | undefined>
		) => {
			state.currentProductBarcode = action.payload
		},
		deleteCurrentProduct: (state, action: PayloadAction<string>) => {
			state.data = state.data.filter(
				(product) => product.barcode !== action.payload
			)
		},
		setProductsInCart: (state, action: PayloadAction<ICartProduct[]>) => {
			state.productsInCart = action.payload
		},
	},
})

export const {
	setProductsData,
	setProductsLoading,
	setFilteredProducts,
	clearFilteredProducts,
	setManufacturerFilter,
	setCurrentProductBarcode,
	deleteCurrentProduct,
	setProductsInCart,
} = productsSlice.actions
