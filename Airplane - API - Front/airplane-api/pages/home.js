import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "../Components/Card";
 
 
const Home = () => {
  const [clients, setClients] = useState([]);
 
  useEffect(() => {
    axios
      .get("https://localhost:7207/api/Usuario")
      .then((response) => {
        console.log(response.data);
        setClients(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de usuarios:", error);
      });
  }, []);
 
  return (
    <div className="container mt-5">
      <h1 className="mb-4">Usuarios Cadastrados</h1>
      <div className="row">
        {clients.map((element) => (
          <div key={element.usuarioId} className="col-md-4 mb-4">
            <Card
              usuarioId={element.usuarioId}
              login={element.login}
              nome={element.nome}
              senha={element.senha}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Home;