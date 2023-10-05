import { useEffect, useRef } from 'react';

export default function UploadImagem({
  className = '',
  setImagem,
  imagemPreview,
  imagemPreviewClassName = '',
  aoSetarReferencia,
}) {
  const refInput = useRef(null);

  useEffect(() => {
    if (!aoSetarReferencia) {
      return;
    }

    aoSetarReferencia(refInput.current);
  }, [refInput?.current]);

  const abrirSeletorArquivos = () => {
    refInput?.current?.click();
  };

  const aoAlterarImagem = () => {
    if (!refInput?.current?.files.length) {
      return;
    }

    const arquivo = refInput?.current?.files[0];
    obterUrlDaImagemEAtualizarOArquivo(arquivo);
  };

  const aoSoltarAImagem = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const arquivo = e.dataTransfer.files[0];
      obterUrlDaImagemEAtualizarOArquivo(arquivo);
    }
    console.log('ao soltar imagem');
  };

  const obterUrlDaImagemEAtualizarOArquivo = (arquivo) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(arquivo);
    fileReader.onloadend = () => {
      setImagem({
        preview: fileReader.result,
        arquivo,
      });
    };
  };

  return (
    <div
      className={`uploadImagemContainer ${className}`}
      onClick={abrirSeletorArquivos}
      onDragOver={(e) => e.preventDefault()}
      onDrop={aoSoltarAImagem}>
      {imagemPreview && (
        <div className='imagemPreviewContainer'>
          <img
            src={imagemPreview}
            alt='Imagem Preview'
            className={imagemPreviewClassName}
          />
        </div>
      )}
      <input
        type='file'
        className='oculto'
        accept='image/*'
        ref={refInput}
        onChange={aoAlterarImagem}
      />
    </div>
  );
}
