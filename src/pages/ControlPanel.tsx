import AddProductForm from '@/components/ProductsControl/AddProductForm'
import DeleteProductForm from '@/components/ProductsControl/DeleteProductForm'

const ControlPanel = () => {
	return (
		<div className="mt-6 p-4 flex justify-between gap-10 shadow-lg rounded-lg ">
			<AddProductForm />
			<DeleteProductForm />
		</div>
	)
}

export default ControlPanel
