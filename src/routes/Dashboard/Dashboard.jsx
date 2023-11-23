import "./style.scss"
import Logo from "../../../public/assets/logoP.png"
import { useEffect } from "react";
import { Link, useNavigate, useParams} from "react-router-dom";
import logoutIcon from "../../../public/assets/Logout.png"
import Usuario from "../../../public/assets/user.png"
import Card from "./Cards/cardPorcentagemMeta";

function Dashboard(){
    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token")
    const validate = () => {
        if (!token || !user) {
            alert("Faça login primeiro");
            navigate("/login")
        }
    }
    
    const { nome } = useParams();
    
    useEffect(() => {
        validate();
       
    })
    return(
        <main>
            <header className="headerUser">
                <img src={Logo} alt="" />
                <div className="divUlHeader">
                    <ul>
                        <li className="liSair">
                            <Link to={"/"}>Sair <img className="iconLogout" src={logoutIcon} alt="" /></Link>
                        </li>
                        <li><img className="fotoUser" src={Usuario} alt="" /></li>
                    </ul>
                </div>
            </header>

            <section className="sectionBoasVindas">
                <div>
                    <h3>Bem vindo, {nome}</h3>
                    <h2>Como você está? Vamos fazer uma revisão diária!</h2>
                </div>
            </section>

            <Card porcentagem={"12"}/>
        </main>
    )
}
export default Dashboard