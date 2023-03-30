import { ICartProduct } from 'models'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { selectProductsInCart } from '@/store/reducers/productsReducer'

import CartProduct from '@/components/Cart/CartProduct'
import SvgDivider from '@/components/ui/Svg/SvgDivider'

const Cart = () => {
	const cartData = useSelector(selectProductsInCart)

	return (
		<div>
			<h1 className="mt-12 font-medium text-[40px] uppercas">Корзина</h1>
			<div className="mt-12">
				<SvgDivider height={1} width={'100%'} opacity={0.3} />
				{cartData.length === 0 ? (
					<div>Корзина пуста :(</div>
				) : (
					cartData.map((item: ICartProduct) => (
						<div key={item.title} className="mt-12">
							<CartProduct cartData={cartData} item={item} />
							<div className="mt-12">
								<SvgDivider height={1} width={'100%'} opacity={0.3} />
							</div>
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default Cart
