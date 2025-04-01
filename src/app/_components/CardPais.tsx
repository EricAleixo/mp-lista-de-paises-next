import Image from "next/image"

export const CardPais = ({nome, imagemUrl}: {nome: any, imagemUrl: any}) =>{
    return(
        <div className="bg-white flex flex-col items-center gap-5 w-80 p-3 rounded-xl cursor-pointer transition-all duration-150 hover:scale-105">
            <Image className="w-80 h-44 rounded-xl" src={imagemUrl} alt={"Imagem do país " + nome} width={200} height={200}>

            </Image>
            <div>
                <p className="text-2xl mb-5 font-semibold">{nome}</p>
            </div>
        </div>
    )
}