import { SkeletonTheme } from 'react-loading-skeleton'
import { Navigate, Route, Routes } from 'react-router-dom'

import Cart from './pages/Cart'
import Catalog from './pages/Catalog'
import ControlPanel from './pages/ControlPanel'
import ProductPage from './pages/ProductPage'

export default () => (
	<SkeletonTheme baseColor="#EDEDED" highlightColor="#DADADA">
		<Routes>
			<Route
				path="/sultan-shop/"
				element={<Navigate to="/sultan-shop/catalog" />}
			/>
			<Route path="/sultan-shop/catalog" element={<Catalog />} />
			<Route path="/sultan-shop/control-panel" element={<ControlPanel />} />
			<Route path="/sultan-shop/catalog/:productId" element={<ProductPage />} />
			<Route path="/sultan-shop/cart" element={<Cart />} />
		</Routes>
	</SkeletonTheme>
)
