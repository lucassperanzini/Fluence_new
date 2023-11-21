/* eslint-disable react/prop-types */
import './style.scss'
function ItemCarrossel({titulo,texto,botao,imagem}) {
    return(
        <>
            <div className="containerPrincipal">

                <div className='divConteudo'>
                    <div className='divTextos'>
                        <h1>{titulo}</h1>
                        <p>{texto}</p>
                        <button>{botao}</button>
                    </div>
                    <div className='divImg'> 
                        <img src={imagem} alt=""/>
                    </div>
                </div>

            </div>
        </>
    )
}

export default ItemCarrossel

