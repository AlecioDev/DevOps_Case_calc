import React, { useState } from 'react';
import "./App.css"



// Componente para os números
const Numeros = ({ onNumeroClick }) => {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  return (
    <div className="botoes">
      {numeros.map(numero => (
        <button key={numero} onClick={() => onNumeroClick(numero)}>
          {numero}
        </button>
      ))}
    </div>
  );
};

// Componente para as funções matemáticas
const FuncoesMatematicas = ({ onOperadorClick }) => {
  const operadores = ['+', '-', '*', '/'];

  return (
    <div className="botoes">
      {operadores.map(operador => (
        <button key={operador} onClick={() => onOperadorClick(operador)}>
          {operador}
        </button>
      ))}
    </div>
  );
};

// Componente para o resultado
const Resultado = ({ resultado }) => {
  return (
    <div className="resultado">
      <h2>Resultado:</h2>
      <p>{resultado}</p>
    </div>
  );
};

// Componente principal da calculadora
const Calculadora = () => {
  const [expressao, setExpressao] = useState('');
  const [resultado, setResultado] = useState(0);

  const handleNumeroClick = numero => {
    setExpressao(expressao + numero);
  };

  const handleOperadorClick = operador => {
    setExpressao(expressao + ' ' + operador + ' ');
  };

  const calcularResultado = () => {
    try {
      const resultadoCalculado = eval(expressao);
      setResultado(resultadoCalculado);
    } catch (error) {
      setResultado('Erro');
    }
  };

  const limparCalculadora = () => {
    setExpressao('');
    setResultado(0);
  };



  return (
    <div className="calculadora">
        <div><h1>Hello Word!</h1></div>
      <h1>Calculadora</h1>
      <Numeros onNumeroClick={handleNumeroClick} />
      <FuncoesMatematicas onOperadorClick={handleOperadorClick} />
      <button onClick={calcularResultado}>=</button>
      <button onClick={limparCalculadora}>Limpar</button>
      <Resultado resultado={resultado} />
    </div>
  );
};

export default Calculadora;