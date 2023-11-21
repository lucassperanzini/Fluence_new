import "./style.scss"
import Logo from "../../../public/assets/logoP.png"
import { Link } from "react-router-dom"
export default function Header() {

    return (

        <>
            <header>
                <nav>
                    <div className='divOpcoes'>
                        <img className="logo" src={Logo}  alt="logo fluence" />
                        <ul>
                            <li>Home</li>
                            <li>Solução</li>
                            <li>Contato</li>
                            <li>Sobre nós</li>
                        </ul>

                        <ul className="ulLogin">
                            <li><button><Link to={"/cadastro"}>Cadastra-se</Link></button></li>
                            <li><Link to={"/login"} href="">Login</Link></li>
                        </ul>

                    </div>

                </nav>
            </header>


        </>
    )



}
