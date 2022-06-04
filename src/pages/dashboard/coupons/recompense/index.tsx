import React from 'react'
import { PrimaryLayout } from '../../../../components/Layout'
import { SecondInput } from '../../../../components/form'
import { useForm } from 'react-hook-form'
import { recompenseTableHeader, recompenseTableData, recompenseTableInterface } from '../../../../lib/data'

function Recompense() {
    const {
        register,
        formState: { errors },
    } = useForm<any>()

    return (
        <PrimaryLayout currentTabIndex={6} dropDownIndex={2}>
            <div className="py-4 px-8 md:px-12">
                <header className="border-b-2 pb-8 md:py-6">
                    <h1 className="mb-6 text-4xl font-bold">Dê prêmios aos clientes que indicam outros</h1>
                    <p className="text-base">
                        Compartilhe cupons com outros vendedores e ganhe prêmios na nossa plataforma. Todo vendedor que
                        entrar para o Hypay pelo link que você enviar, você acumula pontos. Quanto mais pontos você
                        alcançar, mais prêmios você ganha.
                    </p>
                    <p className="  flex  items-center gap-2 py-2 text-sm text-red-500">
                        Saiba mais detalhes sobre como funciona
                    </p>
                    <div className="flex flex-col md:flex-row md:items-end ">
                        <SecondInput
                            className="mb-5 mr-8 w-full items-end md:my-0 md:w-2/5"
                            name="productname"
                            errors={errors}
                            label="Código"
                            register={register}
                            // defaultValue={product?.productName}
                            validation={{
                                required: true,
                            }}
                            placeholder="Xx3jp4hH"
                            type="text"
                        />
                        <button className="mb-4 h-9 w-44 rounded-lg bg-hypay-orange text-base text-white md:my-6 md:mb-1">
                            Gerar Código
                        </button>
                    </div>
                    <p className="h-3 pt-1 text-xs">
                        Compartilhe esse código com seus compradores para que eles ganhem prêmios
                    </p>
                </header>
                <section className="my-4">
                    <main>
                        <table className="my-8 w-full border-collapse overflow-hidden rounded-md border-2 bg-white">
                            <thead className="border-b-2 border-gray-200 px-6 py-10">
                                <tr>
                                    {recompenseTableHeader.map((header, index: number) => (
                                        <th key={index} className={`p-4 text-left`}>
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {Array(7)
                                    .fill(recompenseTableData)
                                    .flat()
                                    .map(
                                        (
                                            {
                                                code,
                                                status,
                                                responsible,
                                                email,
                                                telephone,
                                                creationDate,
                                                indication,
                                            }: recompenseTableInterface,
                                            index: number
                                        ) => (
                                            <tr className="border-b-2" key={index}>
                                                <td className="p-4">{code}</td>
                                                <td className="m-4  flex items-center justify-center rounded border border-hypay-green text-base text-hypay-green ">
                                                    {status}
                                                </td>
                                                <td className="p-4 text-base">{responsible}</td>
                                                <td className="p-4 text-base">{email}</td>
                                                <td className="p-4 text-base">{telephone}</td>
                                                <td className="p-4 text-base">{creationDate}</td>
                                                <td className="p-4 text-base">{indication}</td>
                                            </tr>
                                        )
                                    )}
                            </tbody>
                        </table>
                    </main>
                </section>
            </div>
        </PrimaryLayout>
    )
}

export default Recompense
