import Image from 'next/image';

export default function cabecalhoComAcoes({
  imagemEsquerda,
  textoEsquerda = null,
  className,
  aoClicarAcaoEsquerda,
  titulo,
  elementoDireita,
  aoClicarElementoDireita,
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
            className='elementoEsquerda'
            onClick={aoClicarAcaoEsquerda}>
            {textoEsquerda}
          </span>
        )
      )}

      <h3>{titulo}</h3>

      <div
        className='elementoDireita'
        onClick={aoClicarElementoDireita}>
        {elementoDireita || null}
      </div>
    </div>
  );
}
