import cuidado from "../../../public/assets/1.png"
import integração from "../../../public/assets/2.png"
import analise from "../../../public/assets/3.png"
import "./style.scss"
function Diferenciais() {
  return (
    <section>
      <h1 className="tituloDiferenciais">Diferenciais</h1>
      <div className="divItens">
        <div>
          <img src={cuidado} alt="" />
          <p>cuidado personalizado com a sua saúde</p>
        </div>
        <div>
          <img src={integração} alt="" />
          <p>Integração com sistemas de saúde da sua prefêrencia</p>
        </div>
        <div>
          <img src={analise} alt="" />
          <p>Analise de dados para maior precisão no seu acompanhamento</p>
        </div>
      </div>
    </section>
  );
}
export default Diferenciais;
