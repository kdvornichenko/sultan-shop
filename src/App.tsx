import Favicon from 'react-favicon'
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import BreadCrumbs from './components/ui/BreadCrumbs'
import useProducts from './hooks/useProducts'
import useWindowSize from './hooks/useWindowSize'

function App() {
	const windowSize = useWindowSize()
	useProducts()

	return (
		<BrowserRouter>
			<Favicon url="./icons/favicon.ico" />
			<div className="max-w-8xl mx-auto text-primary">
				{windowSize.isDesktop && <Menu />}
				<Header />
				<div className="px-4">
					<BreadCrumbs />
					<Routes />
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	)
}

export default App
