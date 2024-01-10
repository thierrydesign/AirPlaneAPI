import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
 
const Card = ({ usuarioId, login, nome, senha }) => {
  return (
    <div className="card h-100 shadow">
      <div className="card-body">
        <h5 className="card-title">Usuario: {usuarioId}</h5>
        <p className="card-text"><strong>Login:</strong> {login}</p>
        <p className="card-text"><strong>Nome:</strong> {nome}</p>
        <p className="card-text"><strong>Senha:</strong> {senha}</p>
      </div>
    </div>
  );
};
 
export default Card;