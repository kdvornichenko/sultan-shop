import AddProductForm from '@/components/ProductsControl/AddProductForm'
import DeleteProductForm from '@/components/ProductsControl/DeleteProductForm'

const ControlPanel = () => {
	return (
		<div className="mt-6 p-4 flex justify-between gap-10 shadow-lg rounded-lg max-md:flex-col">
			<div className="max-md:w-full w-1/2">
				<AddProductForm />
			</div>
			<div className="max-md:w-full w-1/2">
				<DeleteProductForm />
			</div>
		</div>
	)
}

export default ControlPanel
