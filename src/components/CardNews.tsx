// Imports
import Image from "next/image"
import Link from "next/link"

import { ptBR } from 'date-fns/locale/pt-BR'
import { format } from "date-fns";

// Tipagem dos dados
interface CardNewsProps {
  title: string;
  subtitle: string;
  author: string;
  createdAt: string;
  urlImage: string;
  slug: string;
}
export default ({ title, subtitle, author, createdAt, urlImage, slug }: CardNewsProps) => {
  // Início do código
  return (
    // Imagem do artigo
    <Link
      href={`/article/${slug}`}
      className=" w-full sm:max-w-[352px] h-full flex flex-col items-center justify-between gap-2 sm:gap-4 hover:brightness-75 transition-all">

      <div className="flex w-full h-[200px] sm:h-[234px] relative  rounded-2xl overflow-hidden">
        <Image
          src={urlImage}
          alt='Imagem 1'
          fill={true}
          quality={100}
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Bloco do informações do artigo */}
      <div className="flex w-full flex-1 flex-col justify-between gap-1 sm:gap-2">
        {/* Título */}
        <h1 className="font-bold text-lg sm:text-xl text-white">{title}</h1>
        {/* Subtítulo */}
        <p className="text-white hidden md:flex flex-1 text-justify lg:text-left text-sm">{subtitle}</p>

        {/* Bloco de informações do artigo 2 */}
        <div>
          {/* Autor */}
          <p className=" font-bold text-white text-sm md:text-base">{author}</p>
          {/* Criado em */}
          <p className="text-gray text-xs md:text-sm">{format(new Date(createdAt), "dd/MM/yyyy", { locale: ptBR })}</p>
        </div>

      </div>

    </Link>
  )
}