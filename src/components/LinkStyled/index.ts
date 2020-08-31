import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkStyled = styled(Link)`
  background-color: orange;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 40px 0;
  cursor: pointer;
  color: black;
  text-decoration: none;
  &:hover {
    background-color: #333333;
    color: orange;
  }
`;