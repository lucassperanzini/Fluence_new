import chateada from "../../../../../public/assets/chateada.png";
import animado from "../../../../../public/assets/animado.png";

import "./cardPorcentagem.scss";
import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function CardMeta({ porcentagem}) {
 


  const [corDeFundo, setCorDeFundo] = useState("green");

  useEffect(() => {
    if (porcentagem <= 30) {
      setCorDeFundo("red");
    } else {
      setCorDeFundo("#008000");
    }
  }, [porcentagem]);


  return (
    <div className="divCard">
      <h2 className="mensagemHidratacao">{porcentagem >= 30?'Continue como está! Você está quase lá!':"Você precisae beber mais água!"  }</h2>
      <div className="containerItens">
        <div className="circle" style={{ backgroundColor: corDeFundo }}>
          <span className="porcentagem">{parseInt(porcentagem)}%</span>
          <p className="meta">da sua meta concluída!</p>
        </div>

        <img className="imagemMeta" src={ porcentagem >= 30 ? animado : chateada} alt="" />
      </div>
    </div>
  );
}

export default CardMeta;
