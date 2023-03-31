import { IProduct } from 'models'
import { ChangeEvent, FC, FormEvent, useEffect, useState } from 'react'

import AfterSubmitMessage from './AfterSubmitMessage'
import SubmitButton from './SubmitButton'
import { filterData } from '@/data/filter.data'

const AddProductForm: FC<{ product?: IProduct }> = ({ product }) => {
	const [isError, setIsError] = useState<boolean>(false)
	const [isLocalImgUrl, setIsLocalImgUrl] = useState<boolean>(true)
	const [isInStock, setIsInStock] = useState<boolean | null>(null)

	const [checkedVolumeType, setCheckedVolumeType] = useState<string>('weight')
	const [volumeText, setVolumeText] = useState<string>('вес')
	const [message, setMessage] = useState<string>('')
	// -----------------------------------------------
	const [typesOfCare, setTypesOfCare] = useState<string[]>([])
	const typeOfCareOptions = filterData

	const handleTypeOfCareChange = (event: ChangeEvent<HTMLInputElement>) => {
		const typeId = event.target.value
		setTypesOfCare((prevTypesOfCare) => {
			if (prevTypesOfCare.includes(typeId)) {
				return prevTypesOfCare.filter((type) => type !== typeId)
			} else {
				return [...prevTypesOfCare, typeId]
			}
		})
	}
	// ------------------------------------------------
	const initialFormData: IProduct = {
		title: '',
		img: {
			imgUrl: '',
			isLocal: true,
		},
		label: '',
		volumeType: '',
		volume: '',
		barcode: '',
		vendorCode: '',
		manufacturer: '',
		brand: '',
		description: '',
		price: '',
		isInStock: null,
		typeOfCare: [],
	}

	useEffect(() => {
		if (product) {
			setFormData({
				title: product?.title,
				img: {
					imgUrl: product?.img.imgUrl,
					isLocal: product?.img.isLocal,
				},
				label: product?.label,
				volumeType: product?.volumeType,
				volume: product?.volume,
				barcode: product?.barcode,
				vendorCode: product?.vendorCode,
				manufacturer: product?.manufacturer,
				brand: product?.brand,
				description: product?.description,
				price: product?.price,
				isInStock: product?.isInStock,
				typeOfCare: product?.typeOfCare,
			})
		}
	}, [product])

	const [formData, setFormData] = useState<IProduct>(initialFormData)

	const handleChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target

		if (name === 'imgUrl') {
			setFormData((prevFormData) => ({
				...prevFormData,
				img: {
					...prevFormData.img,
					imgUrl: value,
					isLocal: false,
				},
			}))
		} else {
			setFormData((prevFormData) => ({
				...prevFormData,
				vendorCode: prevFormData.barcode.slice(0, 6),
				isInStock: isInStock,
				[name]: value,
			}))
		}
	}

	const handleRadioBtnChange = (event: ChangeEvent<HTMLInputElement>) => {
		if (event.target.value === 'global') {
			setIsLocalImgUrl(false)
			formData.img.imgUrl = ''
		} else if (event.target.value === 'local') {
			setIsLocalImgUrl(true)
		}

		if (event.target.value === 'inStock') {
			setIsInStock(true)
			setFormData({ ...formData, isInStock: true })
		} else if (event.target.value === 'outOfStock') {
			setIsInStock(false)
			setFormData({ ...formData, isInStock: false })
		}

		if (event.target.name === 'volumeType') {
			setFormData({ ...formData, volumeType: event.target.value })
			setCheckedVolumeType(event.target.value)
			if (event.target.value === 'weight') {
				setVolumeText('вес')
			} else {
				setVolumeText('объем')
			}
		}
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const productsData = JSON.parse(
			localStorage.getItem('productsData') || '[]'
		)
		const isProductExists = productsData.some(
			(product: IProduct) => product.barcode === formData.barcode
		)
		if (isProductExists) {
			if (
				window.confirm(
					`Данный товар со штрихкодом ${formData.barcode} уже существует в каталоге, вы уверены, что хотите изменить его данные?`
				)
			) {
				const updatedData = productsData.map((product: IProduct) => {
					if (product.barcode === formData.barcode) {
						return {
							...formData,
							img: {
								imgUrl: formData.img.isLocal
									? `/sultan-shop/img/products/${formData.barcode}`
									: formData.img.imgUrl,
								isLocal: formData.img.isLocal,
							},
							typeOfCare: typesOfCare,
						}
					} else {
						return product
					}
				})
				localStorage.setItem('productsData', JSON.stringify(updatedData))
				setMessage(`Данные товара со штрихкодом ${formData.barcode} обновлены`)
			} else {
				setIsError(true)
				setMessage(
					`Редактирование товара со штрихкодом ${formData.barcode} отменено`
				)
				return
			}
		} else {
			localStorage.setItem(
				'productsData',
				JSON.stringify([
					...productsData,
					{
						...formData,
						img: {
							imgUrl: formData.img.isLocal
								? `/sultan-shop/img/products/${formData.barcode}`
								: formData.img.imgUrl,
							isLocal: formData.img.isLocal,
						},
						typeOfCare: typesOfCare,
					},
				])
			)
			setMessage(`Товар со штрихкодом ${formData.barcode} добавлен`)
		}
		setFormData(initialFormData)
		setIsError(false)
	}

	const RequireStar = () => {
		return <span className="text-red-500">*</span>
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<h2 className="mb-5 font-semibold text-3xl text-center">
					{product ? 'Редактировать' : 'Добавить'} товар
				</h2>

				<div>
					<label htmlFor="title">
						<RequireStar />
						Название товара:
					</label>
					<input
						type="text"
						id="title"
						name="title"
						value={formData.title}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label>
						<RequireStar />
						Url изображения:
					</label>
					<div className="flex flex-col">
						<label htmlFor="local">
							<input
								type="radio"
								id="local"
								name="imgUrlType"
								value="local"
								checked={isLocalImgUrl === true}
								onChange={handleRadioBtnChange}
								required
							/>
							Внутренний
						</label>
						<label htmlFor="global">
							<input
								type="radio"
								id="global"
								name="imgUrlType"
								value="global"
								checked={isLocalImgUrl === false}
								onChange={handleRadioBtnChange}
								required
							/>
							Внешний
						</label>
					</div>
				</div>

				{!isLocalImgUrl && (
					<div>
						<label htmlFor="label">
							<RequireStar />
							Введите URL изображения:
						</label>
						<input
							type="text"
							id="imgUrl"
							name="imgUrl"
							value={formData.img.imgUrl}
							onChange={handleChange}
							required
						/>
					</div>
				)}

				<div>
					<label htmlFor="label">Лэйбл:</label>
					<input
						type="text"
						id="label"
						name="label"
						value={formData.label}
						onChange={handleChange}
					/>
				</div>

				<div>
					<label>
						<RequireStar />
						Тип размера:
					</label>
					<div className="flex flex-col">
						<label htmlFor="weight">
							<input
								type="radio"
								id="weight"
								name="volumeType"
								value="weight"
								checked={checkedVolumeType === 'weight'}
								onChange={handleRadioBtnChange}
								required
							/>
							Вес
						</label>
						<label htmlFor="volume">
							<input
								type="radio"
								id="volume"
								name="volumeType"
								value="volume"
								checked={checkedVolumeType === 'volume'}
								onChange={handleRadioBtnChange}
								required
							/>
							Объем
						</label>
					</div>
				</div>

				<div>
					<label htmlFor="volume">
						<RequireStar />
						Введите {volumeText}:
					</label>
					<input
						type="text"
						id="volume"
						name="volume"
						value={formData.volume}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label htmlFor="barcode">
						<RequireStar />
						Штрихкод:
					</label>
					<input
						type="number"
						id="barcode"
						name="barcode"
						value={formData.barcode}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label htmlFor="manufacturer">
						<RequireStar />
						Производитель:
					</label>
					<input
						type="text"
						id="manufacturer"
						name="manufacturer"
						value={formData.manufacturer}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label htmlFor="brand">
						<RequireStar />
						Бренд:
					</label>
					<input
						type="text"
						id="brand"
						name="brand"
						value={formData.brand}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label htmlFor="description">
						<RequireStar />
						Описание:
					</label>
					<textarea
						id="description"
						name="description"
						value={formData.description}
						onChange={handleChange}
						className="h-36"
						required
					/>
				</div>

				<div>
					<label htmlFor="price">
						<RequireStar />
						Цена:
					</label>
					<input
						type="number"
						id="price"
						name="price"
						value={formData.price}
						onChange={handleChange}
						required
					/>
				</div>

				<div>
					<label>
						<RequireStar />
						Наличие товара:
					</label>
					<div className="flex flex-col">
						<label htmlFor="inStock">
							<input
								type="radio"
								id="inStock"
								name="isInStock"
								value="inStock"
								checked={isInStock === true}
								onChange={handleRadioBtnChange}
								required
							/>
							В наличии
						</label>
						<label htmlFor="outOfStock">
							<input
								type="radio"
								id="outOfStock"
								name="isInStock"
								value="outOfStock"
								checked={isInStock === false}
								onChange={handleRadioBtnChange}
								required
							/>
							Отсутствует
						</label>
					</div>
				</div>

				<AfterSubmitMessage isError={isError} message={message} />

				<SubmitButton text={product ? 'Сохранить' : 'Добавить'} />
			</form>
			<div className="flex flex-col">
				{typeOfCareOptions.map(({ type, title }) => (
					<label key={type}>
						<input
							type="checkbox"
							value={type}
							onChange={handleTypeOfCareChange}
							checked={typesOfCare.includes(type)}
						/>
						<span>{title}</span>
					</label>
				))}
			</div>
		</>
	)
}

export default AddProductForm
