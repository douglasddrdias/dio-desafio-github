import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import narutoImg from '../../images/naruto.png'
import { Quotes } from '../../components';
import { getQuote } from '../../services';
import justsoSound from '../../sounds/jutso.mp3'

const audio = new Audio(justsoSound);
export function App() {
  const isMonted = useRef(true);
  const [quoteState, setQuoteState] = useState({ quote: 'loading quote ...', speaker: 'loading Speaker' })


  const onUpdate = async () => {
    const quote = await getQuote();
    if (isMonted.current) {
      audio.play();
      setQuoteState(quote);
    }
  }

  useEffect(() => {
    onUpdate();
    return () => {
      isMonted.current = false;
    };
  }, [])
  return (
    <Content>
      <Quotes {...quoteState} onUpdate={onUpdate} />
      <NarutoImg src={narutoImg} alt='Naruto com uma Kunai' />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
// distribui a imagem em 50 da largura e o alinhamento vertical no final
const NarutoImg = styled.img`
  max-width: 50vw;
  align-self: flex-end;
`;
