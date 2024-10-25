import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const CourseContainer = styled.div`
  padding: 20px;
  background-color: #f2f6fc;
  font-family: 'Roboto', sans-serif;
`;

const Module = styled.div`
  margin-bottom: 40px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ModuleTitle = styled.h2`
  color: #1b2a47;
`;

const ModuleContent = styled.div`
  color: #333;
  margin-bottom: 20px;
`;

const Quiz = styled.div`
  margin-top: 20px;
  background: #e0e0e0;
  padding: 10px;
  border-radius: 5px;
`;

const Question = styled.div`
  margin: 10px 0;
`;

const ProgressBar = styled.div`
  background-color: #e0e0e0;
  height: 10px;
  border-radius: 5px;
  margin: 20px 0;
  position: relative;
`;

const ProgressFill = styled.div`
  background-color: #00bfff;
  height: 100%;
  border-radius: 5px;
  width: ${props => props.width || '0%'};
  transition: width 0.3s ease;
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.button`
  background-color: #00bfff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const ArrowButton = styled(Button)`
  display: flex;
  align-items: center;
`;

const CourseDetail = () => {
  const modules = [
    {
      title: 'Módulo 1: Introdução ao React',
      content: `
        Neste módulo, você aprenderá o que é React e como configurar seu ambiente.
        React é uma biblioteca JavaScript para construir interfaces de usuário, desenvolvida pelo Facebook.
        A instalação do React pode ser feita usando o Create React App, que é uma ferramenta que configura automaticamente o ambiente para você.
        Aprenderemos também sobre JSX, que é uma sintaxe que permite escrever HTML dentro do JavaScript.

        **Conceitos Abordados:**
        - O que é uma SPA (Single Page Application)
        - Como funcionam os componentes e o DOM virtual
        - Exemplos de código para melhor entendimento.

        **O que é uma SPA?**
        Uma SPA é uma aplicação web que carrega uma única página HTML e atualiza dinamicamente o conteúdo conforme o usuário interage com a aplicação.
        Isso melhora a experiência do usuário, pois não há necessidade de recarregar a página toda vez que algo é atualizado.

        **Componentes e DOM Virtual:**
        Em React, tudo é um componente. Componentes são pedaços de código que representam partes da interface do usuário.
        O DOM virtual é uma representação leve do DOM real, permitindo que o React atualize apenas as partes necessárias da interface.

        **Exemplo de Código:**
        \`\`\`javascript
        import React from 'react';

        const Welcome = () => {
          return <h1>Bem-vindo ao curso de React!</h1>;
        };
        \`\`\`
      `,
      quiz: [
        { question: '1. O que é React?', answers: ['Uma biblioteca para construir interfaces.', 'Um banco de dados.'], correct: 0 },
        { question: '2. O que é JSX?', answers: ['Uma extensão de sintaxe para JavaScript.', 'Uma biblioteca de estilos.'], correct: 0 }
      ],
    },
    {
      title: 'Módulo 2: Componentes e Props',
      content: `
        Aprenda a criar componentes reutilizáveis e a passar dados entre eles usando props.
        Componentes são a base do React, permitindo que você construa aplicações complexas a partir de blocos de construção simples.
        Props são propriedades que você pode passar para os componentes para personalizá-los e passar dados entre eles.

        **Componentes Funcionais vs. Componentes de Classe:**
        Componentes funcionais são funções JavaScript que retornam JSX. Eles são mais simples e fáceis de entender.
        Componentes de classe, por outro lado, são mais complexos e permitem o uso de métodos de ciclo de vida.

        **Exemplo de Código com Props:**
        \`\`\`javascript
        const Greeting = ({ name }) => {
          return <h2>Olá, {name}!</h2>;
        };
        \`\`\`

        **Exemplo de Uso:**
        \`\`\`javascript
        <Greeting name="Maria" />
        \`\`\`
      `,
      quiz: [
        { question: '1. O que são componentes em React?', answers: ['Funções que retornam JSX.', 'Estilos de CSS.'], correct: 0 },
        { question: '2. Como se chama a passagem de dados para um componente?', answers: ['Props', 'State'], correct: 0 }
      ],
    },
    {
      title: 'Módulo 3: State e Lifecycle',
      content: `
        Entenda como o state funciona em React e como gerenciar ciclos de vida de componentes.
        O state é uma forma de armazenar informações que mudam ao longo do tempo.
        Além disso, você aprenderá sobre os métodos de ciclo de vida, que permitem executar código em momentos específicos da vida do componente, como quando ele é montado ou atualizado.

        **Utilizando o useState:**
        O Hook useState permite que você adicione o state em componentes funcionais.

        **Exemplo de Código:**
        \`\`\`javascript
        import React, { useState } from 'react';

        const Counter = () => {
          const [count, setCount] = useState(0);
          return (
            <div>
              <h1>{count}</h1>
              <button onClick={() => setCount(count + 1)}>Incrementar</button>
            </div>
          );
        };
        \`\`\`

        **Ciclos de Vida:**
        O React oferece métodos de ciclo de vida como componentDidMount e componentWillUnmount que permitem executar código em momentos específicos.
      `,
      quiz: [
        { question: '1. O que é state em React?', answers: ['Dados que podem mudar.', 'Código JavaScript.'], correct: 0 },
        { question: '2. Qual método é chamado antes de um componente ser removido?', answers: ['componentWillUnmount', 'componentDidMount'], correct: 0 }
      ],
    },
    {
      title: 'Módulo 4: Hooks',
      content: `
        Descubra como usar Hooks para gerenciar estado e efeitos colaterais em componentes funcionais.
        Os Hooks permitem que você use state e outras características do React sem escrever uma classe.
        Aprenderemos sobre o useState e o useEffect, dois dos Hooks mais utilizados.

        **O que são Hooks?**
        Hooks são funções que permitem que você use o state e outras funcionalidades do React em componentes funcionais.

        **Exemplo de Código com useEffect:**
        \`\`\`javascript
        import React, { useEffect, useState } from 'react';

        const Timer = () => {
          const [seconds, setSeconds] = useState(0);

          useEffect(() => {
            const interval = setInterval(() => {
              setSeconds(prevSeconds => prevSeconds + 1);
            }, 1000);
            return () => clearInterval(interval);
          }, []);

          return <h1>{seconds} segundos</h1>;
        };
        \`\`\`

        **Por que usar Hooks?**
        Eles simplificam a lógica de componentes e permitem o compartilhamento fácil de lógica entre componentes.
      `,
      quiz: [
        { question: '1. O que é o Hook useState?', answers: ['Uma função para armazenar valores de estado.', 'Uma função para estilizar componentes.'], correct: 0 },
        { question: '2. O que faz o Hook useEffect?', answers: ['Executa efeitos colaterais após renderizações.', 'Renderiza componentes.'], correct: 0 }
      ],
    },
  ];

  const [currentModule, setCurrentModule] = useState(0);
  const [quizVisible, setQuizVisible] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState(Array(modules.length).fill(null));

  const handleAnswerChange = (questionIndex, answerIndex) => {
    setQuizAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentModule] = answerIndex;
      return newAnswers;
    });
  };

  const handleNextModule = () => {
    setQuizVisible(false);
    if (currentModule < modules.length - 1) {
      setCurrentModule(prev => prev + 1);
    }
  };

  const handlePrevModule = () => {
    if (currentModule > 0) {
      setCurrentModule(prev => prev - 1);
    }
  };

  const handleFinishModule = () => {
    setQuizVisible(true);
  };

  return (
    <CourseContainer>
      <Module>
        <ModuleTitle>{modules[currentModule].title}</ModuleTitle>
        <ModuleContent>{modules[currentModule].content}</ModuleContent>
        <ProgressBar>
          <ProgressFill width={`${((currentModule + 1) / modules.length) * 100}%`} />
        </ProgressBar>
        <NavigationButtons>
          <ArrowButton onClick={handlePrevModule} disabled={currentModule === 0}>
            <FaArrowLeft /> Anterior
          </ArrowButton>
          {quizVisible ? (
            <Button onClick={handleNextModule}>Próximo Módulo</Button>
          ) : (
            <Button onClick={handleFinishModule}>Finalizar Módulo</Button>
          )}
          <ArrowButton onClick={handleNextModule} disabled={currentModule === modules.length - 1}>
            Próximo <FaArrowRight />
          </ArrowButton>
        </NavigationButtons>
        {quizVisible && (
          <Quiz>
            {modules[currentModule].quiz.map((q, index) => (
              <Question key={index}>
                <p>{q.question}</p>
                {q.answers.map((answer, i) => (
                  <label key={i}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      onChange={() => handleAnswerChange(index, i)}
                      checked={quizAnswers[currentModule] === i}
                    />
                    {answer}
                  </label>
                ))}
              </Question>
            ))}
          </Quiz>
        )}
      </Module>
    </CourseContainer>
  );
};

export default CourseDetail;
