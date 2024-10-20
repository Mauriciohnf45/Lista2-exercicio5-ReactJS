import React from 'react';

function Botao() {
  const handleClick = () => {
    alert('Botão clicado!'); // Ação ao clicar no botão
  };

  return (
    <button onClick={handleClick}>Clique Aqui</button>
  );
}

export default Botao;
