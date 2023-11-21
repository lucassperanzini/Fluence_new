import imgBanner from "../../../public/assets/banner2.png"
import "./Banner.scss"
function Banner() {
    return (
        <>     <div className="divContainer">
                    <img className="imagemBanner slide-in-right" src={imgBanner} style={{width:"100%"}} alt="" />
                    <h1 className="text-focus-in">Inovação em Hidratação para uma vida melhor</h1>
                    <p className="text-focus-in">A Fluence é uma startup com o foco em cuidado especializado, usando tecnologia no controle da <span>hidratação de doentes & idosos</span></p>
                    <button className="slide-in-left">Saiba mais</button>
                </div>
            
        </>

    )
}

export default Banner