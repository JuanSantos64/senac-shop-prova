
interface produtosProps {
    id: number,
    nome: string,
    preco: number,
    imagem?: string
}

export function card-produtos(props: produtosProps) {
    return (
        <article className="flex flex-col p-4 bg-teal-950 rounded-lg shadow-md" >
              <img src={props.} alt={produto.nome} className="h-64 object-cover" />
              <Star className="fill-amber-500 stroke-none cursor-pointer" />
              <h2 className="text-xl font-bold text-teal-500" >{produto.nome}</h2>
              <p className="text-gray-500" >R$ {produto.preco}</p>
              <button className="mt-4 bg-teal-500 text-white px-4 py-2 rounded-md" >Comprar</button>
         </article>
    )

}