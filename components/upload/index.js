import { useRef } from "react";

export function UploadImagem({
    className =''
}) {
    
    const refInput = useRef(null)

    const abrirSeletorArquivos = () => {
        refInput?.current?.click();
    }

    return(
        <div className={`uploadImagemContainer ${className}`} onClick={abrirSeletorArquivos}>
            <input
                type="file" 
                className="oculto" 
                accept="image/*"
                ref={refInput}
            />
        </div>
    );
}