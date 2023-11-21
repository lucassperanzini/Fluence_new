import "./style.scss";
import sociais from "../../../public/assets/sociais.png";
function Footer() {
  return (
    <footer>

      <div className="divSociais">
        <p>Fluence</p>
        <img src={sociais} alt="" />
      </div>

      <div className="divInfos">
        <p>Links</p>
        <ul className="ulFooter">
          <li>Home</li>
          <li>Solução</li>
          <li>Sobre nós</li>
          <li>Serviços</li>
        </ul>
      </div>

      <div className="divInfos">
        <p>Suporte</p>
        <ul className="ulFooter">
            <li>FAQ</li>
            <li>Como funciona</li>
            <li>Contato</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
