import Image from 'next/image';

export default function cabecalhoComAcoes({
  imagemEsquerda,
  textoEsquerda = null,
  className,
  aoClicarAcaoEsquerda,
  titulo,
  elementoDireita,
}) {
  return (
    <div className={`cabecalhoAcoes ${className}`}>
      {imagemEsquerda ? (
        <Image
          src={imagemEsquerda}
          alt='Imagem da esquerda'
          onClick={aoClicarAcaoEsquerda}
          width={24}
          height={24}
        />
      ) : (
        textoEsquerda !== null && (
          <span
            className='cabecalhoAcoesTextoEsquerda'
            onClick={aoClicarAcaoEsquerda}>
            {textoEsquerda}
          </span>
        )
      )}

      <h3>{titulo}</h3>

      {elementoDireita && <button type='button'>{elementoDireita}</button>}
    </div>
  );
}
