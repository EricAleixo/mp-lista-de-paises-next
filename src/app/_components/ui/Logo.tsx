import Image from "next/image"

export const Logo = () =>{
    return(
        <div className="flex items-center gap-4">
            <Image width={70} height={70} src="/mundo.png" alt="Logo de mundo"></Image>
            <h2 className="text-2xl font-semibold">Países do mundo</h2>
        </div>
    )
}