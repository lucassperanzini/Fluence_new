import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../components/Login/styleLogin.scss"

function Login() {
  const [form, setForm] = useState({
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
    validate(form);
  }

  const validate = async (data) => {
    try {
      const users = await getUsers();
      const found = users.find(user => user.email === data.email);
      if (found) {
        if (found.password === data.password) {
          alert(`Seja bem-vindo (a) ${found.nome}`);
          // É uma má prática de segurança usar 'delete' para remover a senha. Em vez disso, omita-a ao salvar.
          const { password, ...userWithoutPassword } = found;
          const token = generateToken();
          localStorage.setItem("user", JSON.stringify(userWithoutPassword));
          localStorage.setItem("token", JSON.stringify(token));
          navigate(`/${found.nome}`);
        } else {
          alert("Senha incorreta!");
        }
      } else {
        alert("Usuário não cadastrado!");
      }
    } catch (error) {
      alert("Falha ao buscar usuários.");
      console.error(error);
    }
  }

  const generateToken = () => {
      let result = '';
      for (var i = 80; i > 0; --i) {
          result += (Math.floor(Math.random() * 256)).toString(16);
      }
      return result;
  }

  const getUsers = async () => {
      try {
          const response = await fetch("http://localhost:3000/usuarios", {
              method: "GET"
          })
          return response.json();
      } catch (err) {
          throw new Error(err);
      }
  }
  
  return (
   <div className="login-form-container">
     <form onSubmit={submit}>

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

       <button type="submit">Login</button>
     </form>
   </div>
 );
}

export default Login;