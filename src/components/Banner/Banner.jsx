import { useState } from "react"
import imgBanner from "../../../public/assets/banner2.png"
import imgBanner2 from "../../../public/assets/bannerPrincipal.png"
import "./Banner.scss"
import { useEffect } from "react"
function Banner() {
    const [largura, setLargura] = useState(window.innerWidth)
    const [srcImagem, setSrcImagem] = useState("")

    useEffect(()=>{
        const handleResize = () =>{
            setLargura(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)
        return () =>{
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(()=>{
        if(largura < 800){
            setSrcImagem(imgBanner2)
        }else{
            setSrcImagem(imgBanner)
        }
    }, [largura])

    return (
        <>     <div className="divContainer">
                    <img className="imagemBanner slide-in-right" src={srcImagem} style={{width:"100%"}} alt="" />
                    <h1 className="text-focus-in">Inovação em Hidratação para uma vida melhor</h1>
                    <p className="text-focus-in">A Fluence é uma startup com o foco em cuidado especializado, usando tecnologia no controle da <span>hidratação de doentes & idosos</span></p>
                    <button className="slide-in-left">Saiba mais</button>
                </div>
            
        </>

    )
}

export default Banner