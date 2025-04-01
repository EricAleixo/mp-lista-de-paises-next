"use client"

import { useState } from "react"
import { CardPais } from "./CardPais"
export const ContainerPaises = ({ data }: { data: any[] }) => {

    const [inputValue, setInputValue] = useState("");

    const inputUpdate = (e:any) =>{
        setInputValue(e)
    }

    const filtrarNome = (data: any[], nome:string) =>{
        const dataFiltrada = data.filter(item => item.translations.por.common.toLowerCase().includes(nome.toLowerCase()))

        return dataFiltrada.map((item, index) =>(
            <CardPais key={index} nome={item.translations.por.common} imagemUrl={item.flags.png} />
        ))
    }

    return (
        <div className="bg-gray-200 w-screen min-h-screen px-48 py-20">

            <div className="mb-4 border-2 w-fit rounded-sm bg-white">
                <input onChange={(e) => {
                    inputUpdate(e.target.value)
                    console.log("atualizado")
                }} className="p-2" type="text" placeholder="Digite o nome do país" value={inputValue} />
            </div>

            <div className="grid grid-cols-3 gap-16">
                {
                    filtrarNome(data, inputValue)
                }
            </div>
        </div>
    )
}