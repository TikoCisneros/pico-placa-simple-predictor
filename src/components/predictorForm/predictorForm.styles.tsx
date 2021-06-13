import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';
import Btn from '../common/button';

const Container = styled(Card)`
  max-width: 768px;
`;

const Content = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const LOGO_SIZE = 120;
const Logo = styled.img`
  width: ${LOGO_SIZE}px;
  height: ${LOGO_SIZE}px;
  margin-bottom: 15px;
`;

const Button = styled(Btn).attrs({
  fullWidth: true,
  style: { marginTop: 15 },
})``;

export {
  Container,
  Content,
  Logo,
  Button,
};
