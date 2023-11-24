import { useNavigate } from 'react-router-dom';
import "../components/Login/styleLogin.scss"
import { useState } from 'react';
function Cadastro() {
    const [form, setForm] = useState({
        nome:"",
        peso: 0,
        altura: 0,
        email: "",
        password: ""
      });
      
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
          ...prevForm,
          [name]: value
        }));
      }
    
      const submit = async (e) => {
        e.preventDefault();
        console.log(form)
        try {
            const response = await fetch("http://localhost:3000/usuarios", {
              method: "POST",
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(form)
            });
        
            if (response.ok) {
              alert("Cadastro realizado com sucesso!");
              navigate("/login");
            } else {
              alert("Erro no cadastro");
              window.location.reload()
            }
          } catch (error) {
            alert("Erro no cadastro");
            console.error("Erro ao cadastrar:", error);
            // Lógica para lidar com exceções durante a requisição
          }

      }
  return (
    <div className="login-form-container">
     <form onSubmit={submit}>


       <div className="form-group">
         <label htmlFor="nome">Nome</label>
         <input
           placeholder='Digite seu nome'
           type="text"
           id="nome"
           name="nome"
           value={form.nome}
           onChange={handleChange}
         />
       </div>
       <div className="form-group">
         <label htmlFor="peso">Peso</label>
         <input
           placeholder='Digite seu peso'
           type="number"
           id="peso"
           name="peso"
           value={form.peso}
           onChange={handleChange}
         />
       </div>
       <div className="form-group">
         <label htmlFor="altura">Altura(cm)</label>
         <input
           placeholder='Digite sua altura em cm'
           type="number"
           id="altura"
           name="altura"
           value={form.altura}
           onChange={handleChange}
         />
       </div>
       <div className="form-group">
         <label htmlFor="email">Email:</label>
         <input
           placeholder='Digite seu email'
           type="email"
           id="email"
           name="email"
           value={form.email}
           onChange={handleChange}
         />
       </div>

       <div className="form-group">
         <label htmlFor="password">Senha</label>
         <input
           placeholder='Digite sua senha'
           type="password"
           id="password"
           name="password"
           value={form.password}
           onChange={handleChange}
         />
       </div>

       <button type="submit">Cadastrar</button>
     </form>
   </div>
  );
}
export default Cadastro;
