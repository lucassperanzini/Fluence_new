 import Copo from "../../../../../public/assets/copo.png"
 import './styleCardAguaPeriodo.scss'
function CardAguaPeriodo(){
    //divCard mensagemHidratação foram reutilizados do CardPorcentagem

    return(
        <div className="divCard">
            <h2 className="mensagemHidratacao">Quantidade de água pela manhã </h2>

            <div className="conteudoFlex">
                <img className='copo' src={Copo} alt="" />

                <div className="containerHorariosQuantidade">

                    <span className="horario">6:00 - 12:00</span>

                    <div className="containerML">
                        <span className='quantidadeML'>1000ml</span>
                    </div>


                </div>

            </div>
        
        </div>
    )


}

export default CardAguaPeriodo