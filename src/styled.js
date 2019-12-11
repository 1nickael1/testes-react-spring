import styled from 'styled-components';
import { animated as a } from 'react-spring';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Box = styled(a.div)`
  background-color: #777;
  width: 300px;
  margin-top: 50px;
`;

export const MiniBox = styled.div`
  width: 50px;
  height: 50px;
  background-color: black;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #999;
  height: 100px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
