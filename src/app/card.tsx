"use client"
import { Star } from "lucide-react"
import { useState } from "react"

interface produtosProps {
    props : {
    id: number,
    nome: string,
    preco: number,
    imagem?: string
    }
}

export function Card({props}: produtosProps) {
    const [favorito, setFavorito] = useState(true)
    function toggleFavorito(){
        setFavorito(!favorito)
    }
    return (
        <article className="flex flex-col p-4 bg-teal-950 rounded-lg shadow-md" >
              <img src={props.imagem} alt={props.nome} className="h-64 object-cover" />
              {favorito
                ? <Star onClick={toggleFavorito} className="fill-amber-500 stroke-none cursor-pointer" />
                : <Star onClick={toggleFavorito} className="stroke-white cursor-pointer" />             
              }
              
              <h2 className="text-xl font-bold text-teal-500" >{props.nome}</h2>
              <p className="text-gray-500" >R$ {props.preco}</p>
              <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md" >Comprar</button>
         </article>
    )

}