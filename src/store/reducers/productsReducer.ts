import { productsSlice } from '../slices/productsSlice'
import { RootState } from '../types'

export const selectProductsData = (state: RootState) => state.products.data

export const selectProductsLoading = (state: RootState) =>
	state.products.loading

export const selectFilteredProducts = (state: RootState) =>
	state.products.filteredData

export const selectManufacturerFilter = (state: RootState) =>
	state.products.manufacturerFilter

export const selectCurrentProductBarcode = (state: RootState) =>
	state.products.currentProductBarcode

export const selectProductsInCart = (state: RootState) =>
	state.products.productsInCart

export default productsSlice.reducer
