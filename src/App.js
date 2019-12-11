import React, {useState} from 'react';
import {useSpring, animated as a} from 'react-spring';
import {Container, Box, Header, MiniBox} from './styled';

/*
useSpring - a single spring, moves data from a -> b
useSprings - multiple springs, for lists, where each spring moves data from a -> b
useTrail - multiple springs with a single dataset, one spring follows or trails behind the other
useTransition - for mount/unmount transitions (lists where items are added/removed/updated)
useChain - to queue or chain multiple animations together
*/

function App() {
  const [open, setOpen] = useState(false);
  const [lorem] = useState('quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.')
  const {altura, posicao, texto} = useSpring({
    altura: open ? 300 : 50,
    posicao: open ? 300 : 25,
    texto: open ? 100 : 200,
  });
  const {animateModal} = useSpring({
    animateModal: open ? 1 : 0.9,
  });

  const mostrar = open ? lorem : lorem.substring(0, texto)
  return (
    <Container>
      <Header>
        <MiniBox />
      <Box style={{height: altura, opacity: animateModal, marginTop: posicao, padding: 10, overflow: 'hidden'}} onClick={() => setOpen(!open)}>
        <div style={{overflow: 'hidden'}}>

        <p>item 1</p>
        <p>item 1</p>
        <p>item 1</p>
        <p>item 1</p>
        </div>
      </Box>
        <MiniBox />
      </Header>
    </Container>
  );
}

export default App;
