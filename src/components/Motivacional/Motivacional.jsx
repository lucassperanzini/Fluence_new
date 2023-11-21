import idosos from "../../../public/assets/idosos.png"
import "./style.scss" 
function Motivacional(){
    return(
        <section className="sectionMotivacional">
            <div className="divConteudo">
                <div className="divTitulo">
                    <h1 className="tituloMotivacional">Mais do que Números,</h1>
                    <h1 className="tituloMotivacional">são histórias de vida!</h1>
                </div>
                <div className="divMotivacional">
                    <p className="textoMotivacional">Para os doentes cada dia traz desafios únicos. Uma hidratação adequada vai além da saúde física é sobre qualidade de vida, dignidade e independência  </p>
                    <img className="imagemMotivacional" src={idosos} alt="" />
                </div>
            </div>
        </section>
       
    )
}
export default Motivacional