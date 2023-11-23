import "./style.scss"
import Logo from "../../../public/assets/logoP.png"
import hamburguer from "../../../public/assets/menu_FILL0_wght400_GRAD0_opsz24.png"
import { Link } from "react-router-dom"
export default function Header() {

    return (

        <>
            <header>
                <nav>
                    <div className='divOpcoes'>
                        <img className="logo" src={Logo} alt="logo fluence" />
                           <img className="hamburger" src={hamburguer} alt=""  />
                        
                        <div className="divUL">
            
                            <ul>
                                <li><a href="">Home</a></li>
                                <li><a href="">Solução</a></li>
                                <li><a href="">Contato</a></li>
                                <li><a href="">Sobre nós</a></li>
                            </ul>
                        
                        
                            <ul className="ulLogin">
                                <li><button><Link to={"/cadastro"}>Cadastra-se</Link></button></li>
                                <li><Link to={"/login"} href="">Login</Link></li>
                            </ul>
                        </div>

                    </div>

                </nav>
            </header>


        </>
    )



}
