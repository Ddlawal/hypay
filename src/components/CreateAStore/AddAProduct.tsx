import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { COLORS } from '../../lib/constants/colors'
import { Button } from '../Button'
import { BagIcon, CameraIcon, CloseIcon } from '../Icons'
import { useForm } from 'react-hook-form'
import { SecondInput } from '../form'
import { Card } from '../Card'
import { useAddAProductMutation, useEditProductMutation } from '../../store/services/products'
import { AddProductType, ProductsType } from '../../interfaces/products'
import { useSnackbar } from '../../hooks/useSnackbar'

interface PhotographBoxProps {
    src?: string
    boxSize?: string
    cameraSize?: number
    index: number
    imageReceiver?: (image: File, isProductImage?: boolean) => void
    removeImage?: (index: number) => void
}
export const PhotographBox = ({ src, cameraSize = 50, index, imageReceiver, removeImage }: PhotographBoxProps) => {
    const [image1, setImage1] = useState<File | null>(null)

    const handleImageCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileList = event.target.files
        if (fileList) {
            setImage1(fileList[0])
            imageReceiver?.(fileList[0], index === 0)
        }
    }

    const handleRemoveImage = () => {
        setImage1(null)
        removeImage?.(index)
    }

    return (
        <div
            className={`relative flex h-24 w-24 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-hypay-gray`}
        >
            <div className="absolute flex h-full w-full items-center justify-center">
                <input
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    className="absolute z-10 h-full w-full opacity-0 outline-0"
                    onChange={(e) => handleImageCapture(e)}
                    name="product_image"
                />
                {image1 ? (
                    <>
                        <button
                            onClick={handleRemoveImage}
                            className="absolute top-1 right-1 z-10 rounded-full bg-white p-1"
                        >
                            <CloseIcon size={7} color={COLORS.PINK} />
                        </button>
                        <Image
                            src={URL.createObjectURL(image1)}
                            width="100%"
                            alt="seleced Product"
                            height="100%"
                            className="absolute top-0 left-0 inline h-full w-full border border-black object-cover"
                        />
                    </>
                ) : (
                    <>
                        {src ? (
                            <Image
                                src={src}
                                width="100%"
                                alt="seleced Product"
                                height="100%"
                                className="absolute top-0 left-0 inline h-full w-full border border-black object-cover"
                            />
                        ) : (
                            <CameraIcon size={cameraSize} />
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

interface AddProductProps<T> {
    product?: ProductsType
    onSuccess?: (params: T) => void
    setTabIndex?: (value: React.SetStateAction<number>) => void
}

function toDataUrl(url: string, callback: (res: File) => void) {
    fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'no-cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
    }).then(async (res) => {
        const blob = await res.blob()
        // const image = new File([blob], `${Date.now()}.jpg`, { type: 'image/jpeg' })
        const image: any = blob
        image.lastModifiedDate = new Date()
        image.name = `${Date.now()}.jpg`
        const dT = new DataTransfer()

        dT.items.add(image as File)

        callback(dT.files[0])
    })
}

export const AddAProduct = <T,>({ product, onSuccess, setTabIndex }: AddProductProps<T>) => {
    const [images, setImages] = useState<DataTransfer>()
    const [productImage, setProductImage] = useState<File>()
    const { showErrorSnackbar } = useSnackbar()

    const { push } = useRouter()

    useEffect(() => {
        if (product?.other_images_url && product?.other_images_url.length > 0) {
            const dt = new DataTransfer()
            for (let i = 0; i < product?.other_images_url.length; i++) {
                toDataUrl(product.other_images_url[i].image_link, (file) => {
                    dt.items.add(file)
                })
            }

            setImages(dt)
        }
    }, [product])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AddProductType>()

    const [addProduct] = useAddAProductMutation()
    const [editProduct] = useEditProductMutation()

    const imageReceiver = (image: File, isProductImage?: boolean) => {
        if (isProductImage) {
            return setProductImage(image)
        }

        const dt = new DataTransfer()
        if (images) {
            for (let i = 0; i < images.files.length; i++) {
                dt.items.add(images.files[i])
            }
        }
        dt.items.add(image)

        setImages(dt)
    }

    const removeImage = (i: number) => {
        setImages((dt) => {
            dt?.items.remove(i)
            return dt
        })
    }

    const onSubmit = (data: AddProductType) => {
        const extraParams = {
            ...data,
            category_id: '1',
            currency: 'NGN',
            deliveryperiod: '10',
        }

        if (productImage) {
            extraParams.product_image = productImage as File
        }

        if (images?.files.length) {
            extraParams['optional_images[]'] = images.files
        }

        const formData = new FormData()
        for (const objKey in extraParams) {
            formData.append(objKey, extraParams[objKey as keyof Omit<AddProductType, 'optional_images[]'>])
        }

        if (product) {
            formData.append('productID', String(product.id))
            return editProduct(formData)
                .unwrap()
                .then((res) => {
                    onSuccess?.(res)
                    setTabIndex?.(2)
                })
                .catch((err) => console.log(err, 'An Error Occured while trying to Add your product'))
        }

        addProduct(formData)
            .unwrap()
            .then((res) => {
                onSuccess?.(res)
                setTabIndex?.(2)
            })
            .catch((err: any) => {
                console.log(err, 'An Error Occured while trying to Add your product')
                showErrorSnackbar(err.data.message || 'Something went wrong')
            })
    }

    return (
        <div className="mx-auto w-10/12 ">
            <header className="mx-auto mt-10 w-full">
                <h1 className="text-left text-2xl font-bold text-black md:text-center md:text-[32px]">
                    {product ? 'Editar produto' : 'Adicone um produto'}
                </h1>
                <div>
                    <p className="text-md mt-3 text-left font-bold text-black md:mt-3">
                        Compartilhe sua loja nas redes sociais e impulsione suas vendas!
                    </p>
                </div>
            </header>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-4 md:w-10/12">
                <h3 className="my-3 font-semibold">Nome e descrição</h3>
                <SecondInput
                    className="my-5 md:my-0"
                    name="productname"
                    errors={errors}
                    label="Names"
                    register={register}
                    defaultValue={product?.productName}
                    validation={{
                        required: true,
                    }}
                    placeholder="Lucian Store"
                    type="text"
                />
                <SecondInput
                    className="my-5 md:my-0"
                    name="description"
                    errors={errors}
                    label="Descrição"
                    register={register}
                    defaultValue={product?.productDescription}
                    validation={{
                        required: true,
                    }}
                    placeholder="Describe your store"
                    type="text"
                />

                <div>
                    <h4 className="my-2 text-xl font-bold">Fotos</h4>
                    <div className="flex items-center justify-between gap-x-3 overflow-x-auto py-2">
                        {Array<string>(4)
                            .fill('photo', 0, 4)
                            .map((item, i) => (
                                <div key={`${item}-${i}`}>
                                    <PhotographBox
                                        imageReceiver={imageReceiver}
                                        index={i}
                                        removeImage={removeImage}
                                        src={
                                            i === 0
                                                ? product?.image_url
                                                : product?.other_images_url[i]?.image_link || ''
                                        }
                                    />
                                </div>
                            ))}
                    </div>

                    {/* Product link Button  */}
                    <h4 className="my-3 text-xl font-bold">Link do Produto</h4>
                    <Button className="rounded-md border-[1px] border-hypay-pink bg-white px-3 text-hypay-pink outline-none">
                        Copy Link
                    </Button>

                    <div className="mt-8">
                        <h4 className="text-xl font-bold">Videos</h4>
                        <p className="text-md  text-left font-normal text-black md:mt-3">
                            Link do vídeo do seu produto no Youtube ou Vimeo
                        </p>
                        <SecondInput
                            className="my-2 md:my-0"
                            name="video_link"
                            errors={errors}
                            register={register}
                            defaultValue={product?.video_link || ''}
                            placeholder=""
                            type="text"
                        />
                    </div>

                    {/* Stock section */}
                    <div className="mt-4">
                        <h4 className="text-xl font-bold">Estoque</h4>
                        <div className=" flex flex-wrap justify-between">
                            <SecondInput
                                className="my-2 w-5/12 md:my-0 md:w-2/12"
                                name="price"
                                errors={errors}
                                label="Price"
                                register={register}
                                defaultValue={product?.amount}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="number"
                            />
                            <SecondInput
                                className="my-2 w-5/12 md:my-0 md:w-2/12"
                                name="quantity"
                                errors={errors}
                                label="Quantidade"
                                register={register}
                                defaultValue={String(product?.quantity) || ''}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="number"
                            />
                            <SecondInput
                                className="my-2 w-5/12 md:my-0 md:w-2/12"
                                name="SKU"
                                errors={errors}
                                label="SKU"
                                register={register}
                                defaultValue={product?.SKU || ''}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
                            />
                            <SecondInput
                                className="my-2 w-full md:my-0 md:w-3/12"
                                name="barcode"
                                errors={errors}
                                label="Código e barras"
                                register={register}
                                defaultValue={product?.barcode || ''}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="number"
                            />
                        </div>
                    </div>
                    {/* Product Type */}
                    <div className="mt-4">
                        <h4 className=" text-xl font-bold">Tipo de produto</h4>
                        <div className=" flex flex-col ">
                            <div className="my-2 flex items-center">
                                <input
                                    type="radio"
                                    defaultChecked={product?.product_type === 'physical'}
                                    className="h-6 w-6 border-none bg-transparent outline-none"
                                    placeholder=""
                                    value="physical"
                                    {...register('product_type')}
                                />
                                <label htmlFor="product_type" className="ml-2 font-semibold">
                                    Físico
                                </label>
                            </div>
                            <div className=" flex items-center">
                                <input
                                    type="radio"
                                    defaultChecked={product?.product_type === 'digital'}
                                    className="h-6 w-6 border-none bg-transparent outline-none"
                                    placeholder=""
                                    value="digital"
                                    {...register('product_type')}
                                />
                                <label htmlFor="product_type" className="ml-2 font-semibold">
                                    Digital
                                </label>
                            </div>
                        </div>
                    </div>
                    {/* Weight and dimension */}
                    <div className="mt-5">
                        <h4 className="mt-3 text-xl font-bold">Pesos e dimensões</h4>
                        <div className=" flex flex-wrap justify-between md:gap-x-4">
                            <SecondInput
                                className="w-5/12 md:my-2 md:w-4/12"
                                name="weight"
                                errors={errors}
                                register={register}
                                defaultValue={String(product?.weight)}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="number"
                                label="Peso"
                            />
                            <SecondInput
                                className="w-5/12 md:my-2  md:w-4/12"
                                name="length"
                                errors={errors}
                                register={register}
                                defaultValue={String(product?.length)}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="number"
                                label="Comprimento"
                            />
                            <SecondInput
                                className="w-5/12 md:my-2  md:w-4/12"
                                name="width"
                                errors={errors}
                                register={register}
                                defaultValue={String(product?.width)}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="number"
                                label="Altura"
                            />
                            <SecondInput
                                className="w-5/12 md:my-2  md:w-4/12"
                                name="height"
                                errors={errors}
                                register={register}
                                defaultValue={String(product?.height)}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="number"
                                label="Largura"
                            />
                        </div>
                    </div>

                    {/* Free shipping */}
                    <h4 className="mt-5 text-xl font-bold">Frete grátis</h4>
                    <div className=" flex items-center">
                        <input
                            name="remember-me"
                            type="checkbox"
                            className="h-5 w-5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                        />
                        <label htmlFor="quantity" className="ml-2 font-semibold">
                            Esse produto possui frete grátis
                        </label>
                    </div>

                    {/* Advanced shipping */}
                    <h4 className="mt-10 text-xl font-bold">Opções Avançadas</h4>
                    <Card
                        rounded
                        padding="p-2"
                        // elevation="2xl"
                        className="shadow-hypay-3xl my-3 flex h-20 items-center justify-between gap-x-1"
                    >
                        <div className="flex items-center gap-x-2">
                            <div className="">
                                <BagIcon color={COLORS.PINK} />
                            </div>
                            <div className="flex flex-col">
                                <h3>Categorias</h3>
                                <p className="text-xs">Escolha aqui qual categoria seu produto se encaixa</p>
                            </div>
                        </div>
                        <Button className="rounded-md border-[1px] border-hypay-pink bg-white px-1 text-hypay-pink outline-none">
                            Adicionar categoria
                        </Button>
                    </Card>
                    <Card
                        rounded
                        padding="p-2"
                        className="gap-X-1 shadow-hypay-3xl my-3 flex h-20 items-center justify-between"
                    >
                        <div className="flex items-center gap-x-2">
                            <div>
                                <BagIcon color={COLORS.PINK} />
                            </div>
                            <div className="flex flex-col">
                                <h3>Variações</h3>
                                <p className="text-xs">Exemplo de variações são: cores e tamanhos</p>
                            </div>
                        </div>
                        <Button className="rounded-md border-[1px] border-hypay-pink bg-white  px-3 text-hypay-pink outline-none">
                            Adicionar variáveis
                        </Button>
                    </Card>
                    {/* Publish or discrad buttons */}
                    <div className="mt-7 flex items-center justify-around">
                        <Button
                            onClick={() => {
                                push('/dashboard/home')
                            }}
                            className="text-md font-bold text-hypay-primary"
                        >
                            Descartar
                        </Button>
                        <Button
                            onClick={() => handleSubmit}
                            primary
                            className="rounded-md border-[1px]   px-3 text-white outline-none"
                        >
                            Publicar produto
                        </Button>
                    </div>
                    {/* or skip section */}
                    <div className="mt-4 flex flex-col items-center justify-center">
                        <p className="text-center">Ou</p>
                        <button
                            onClick={() => setTabIndex?.(2)}
                            className="mx-auto text-sm font-bold text-hypay-secondary"
                        >
                            Pular estapa
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}
