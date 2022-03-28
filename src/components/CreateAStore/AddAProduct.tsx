import * as React from 'react'
import { COLORS } from '../../lib/constants/colors'
import { Button } from '../Button'
import { BagIcon, CameraIcon } from '../Icons'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { SecondInput } from '../form'
import { Card } from '../Card'
import { useAppSelector } from '../../hooks/useStoreHooks'
import { User } from '../../reducers/auth'

interface PhotographBoxProps {
    boxSize?: string
    cameraSize?: number
}
export const PhotographBox = ({ boxSize = '24', cameraSize = 50 }: PhotographBoxProps) => {
    return (
        <div
            className={`flex h-24 w-24 cursor-pointer items-center justify-center rounded-md border-2 border-dashed border-hypay-gray`}
        >
            <CameraIcon size={cameraSize} />
        </div>
    )
}

export const AddAProduct = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<any>()

    const { user } = useAppSelector((state) => state?.auth as { user: User })
    console.log(user, 'add product')

    const { push } = useRouter()
    return (
        <div className="mx-auto w-10/12 ">
            <header className="mx-auto mt-10 w-full">
                <h1 className="text-left text-2xl font-bold text-black md:text-center md:text-[32px]">
                    Adicone um produto
                </h1>
                <div>
                    <p className="text-md mt-3 text-left font-bold text-black md:mt-3">
                        Compartilhe sua loja nas redes sociais e impulsione suas vendas!
                    </p>
                </div>
            </header>
            <form onSubmit={(e) => e.preventDefault()} className="mt-4 md:w-10/12">
                <h3 className="my-3 font-semibold">Nome e descrição</h3>
                <SecondInput
                    className="my-5 md:my-0"
                    name="name"
                    errors={errors}
                    label="Names"
                    register={register}
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
                    validation={{
                        required: true,
                    }}
                    placeholder="Describe your store"
                    type="text"
                />

                <div>
                    <h4 className="my-2 text-xl font-bold">Fotos</h4>
                    <div className="flex items-center justify-between gap-x-3 overflow-x-auto py-2">
                        <div className="">
                            <PhotographBox />
                        </div>
                        <div className="">
                            <PhotographBox />
                        </div>
                        <div className="">
                            <PhotographBox />
                        </div>
                        <div className="">
                            <PhotographBox />
                        </div>
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
                            name="videoDescription"
                            errors={errors}
                            register={register}
                            validation={{
                                required: true,
                            }}
                            placeholder=""
                            type="text"
                        />
                    </div>

                    {/* Stock section */}
                    <div className="mt-4">
                        <h4 className="text-xl font-bold">Estoque</h4>
                        <div className=" flex flex-wrap justify-between">
                            <SecondInput
                                className="my-2 w-5/12 md:my-0 md:w-3/12"
                                name="quantity"
                                errors={errors}
                                label="Quantidade"
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
                            />
                            <SecondInput
                                className="my-2 w-5/12 md:my-0 md:w-3/12"
                                name="sku"
                                errors={errors}
                                label="SKU"
                                register={register}
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
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
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
                                    className="h-6 w-6 border-none bg-transparent outline-none"
                                    placeholder=""
                                    name="digital"
                                />
                                <label htmlFor="quantity" className="ml-2 font-semibold">
                                    Físico
                                </label>
                            </div>
                            <div className=" flex items-center">
                                <input
                                    type="radio"
                                    className="h-6 w-6 border-none bg-transparent outline-none"
                                    placeholder=""
                                    name="digital"
                                />
                                <label htmlFor="digital" className="ml-2 font-semibold">
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
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
                                label="Peso"
                            />
                            <SecondInput
                                className="w-5/12 md:my-2  md:w-4/12"
                                name="length"
                                errors={errors}
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
                                label="Comprimento"
                            />
                            <SecondInput
                                className="w-5/12 md:my-2  md:w-4/12"
                                name="width"
                                errors={errors}
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
                                label="Altura"
                            />
                            <SecondInput
                                className="w-5/12 md:my-2  md:w-4/12"
                                name="height"
                                errors={errors}
                                register={register}
                                validation={{
                                    required: true,
                                }}
                                placeholder=""
                                type="text"
                                label="Largura"
                            />
                        </div>
                    </div>

                    {/* Free shipping */}
                    <h4 className="mt-5 text-xl font-bold">Frete grátis</h4>
                    <div className=" flex items-center">
                        <input
                            id="remember-me"
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
                    <Card rounded padding="p-2" className="my-3 flex h-20 items-center justify-between gap-x-1">
                        <div className="flex items-center gap-x-2">
                            <div className="">
                                <BagIcon color={COLORS.PINK} />
                            </div>
                            <div className="flex flex-col">
                                <h3>Categorias</h3>
                                <p className="text-xs">Escolha aqui qual categoria seu produto se encaixa</p>
                            </div>
                        </div>
                        <div className="">
                            <Button className="rounded-md border-[1px] border-hypay-pink bg-white px-1 text-hypay-pink outline-none">
                                Adicionar categoria
                            </Button>
                        </div>
                    </Card>
                    <Card rounded padding="p-2" className="gap-X-1 my-3 flex h-20 items-center justify-between">
                        <div className="flex items-center gap-x-2">
                            <div>
                                <BagIcon color={COLORS.PINK} />
                            </div>
                            <div className="flex flex-col">
                                <h3>Variações</h3>
                                <p className="text-xs">Exemplo de variações são: cores e tamanhos</p>
                            </div>
                        </div>
                        <div className="">
                            <Button className="rounded-md border-[1px] border-hypay-pink bg-white  px-3 text-hypay-pink outline-none">
                                Adicionar variáveis
                            </Button>
                        </div>
                    </Card>
                    {/* Publish or discrad buttons */}
                    <div className="mt-7 flex items-center justify-around">
                        <button className="text-md font-bold text-hypay-primary">Descartar</button>
                        <Button
                            onClick={() => push('/dashboard/products')}
                            primary
                            className="rounded-md border-[1px]   px-3 text-white outline-none"
                        >
                            Publicar
                        </Button>
                    </div>
                    {/* or skip section */}
                    <div className="mt-4 flex flex-col items-center justify-center">
                        <p className="text-center">Ou</p>
                        <button className="mx-auto text-sm font-bold text-hypay-secondary">Pular estapa</button>
                    </div>
                </div>
            </form>
        </div>
    )
}
