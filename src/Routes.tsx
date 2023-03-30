import { SkeletonTheme } from 'react-loading-skeleton'
import { Navigate, Route, Routes } from 'react-router-dom'

import Cart from './pages/Cart'
import Catalog from './pages/Catalog'
import ControlPanel from './pages/ControlPanel'
import ProductPage from './pages/ProductPage'

export default () => (
	<SkeletonTheme baseColor="#EDEDED" highlightColor="#DADADA">
		<Routes>
			<Route path="./" element={<Navigate to="./catalog" />} />
			<Route path="./catalog" element={<Catalog />} />
			<Route path="./control-panel" element={<ControlPanel />} />
			<Route path="./catalog/:productId" element={<ProductPage />} />
			<Route path="./cart" element={<Cart />} />
		</Routes>
	</SkeletonTheme>
)
