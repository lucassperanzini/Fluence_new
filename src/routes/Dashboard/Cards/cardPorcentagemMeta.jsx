import chateada from "../../../../public/assets/chateada.png"
import "./style.scss"
import React, { useEffect, useState } from 'react';





function card({porcentagem}){

    const [corDeFundo, setCorDeFundo] = useState('green');

useEffect(() => {
    if (porcentagem < 30)  {
        setCorDeFundo('red');
    } else {
        setCorDeFundo('green');
    }
}, [porcentagem]);


    return(

      
        <div className="divCard">

            <h2 className="mensagemHidratacao">Você precisa de mais água!</h2>
            <div className="containerItens">

                <div className="circle"  style={{backgroundColor:corDeFundo}}>
                    <span className="porcentagem">{parseInt(porcentagem)}%</span>
                    <p className="meta">da sua meta concluída!</p>
                </div>

                <img className="imagemMeta" src={chateada} alt="" />



            </div>
        
        </div>
        
       
    )

}


export default card