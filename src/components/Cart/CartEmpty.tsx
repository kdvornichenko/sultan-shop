import Icon from '../ui/Icons/Icon'

const CartEmpty = () => {
	return (
		<div className="mt-12 flex items-center gap-10 justify-center text-slate-700 text-xl md:mt-15 md:text-2xl lg:mt-16 lg:text-3xl xl:mt-20 xl:text-4xl 2xl:mt-24">
			Ваша корзина пуста
			<Icon name="FaRegFrown" size="2rem" />
		</div>
	)
}

export default CartEmpty
