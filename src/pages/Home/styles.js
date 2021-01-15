import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerBackground = styled.div`
  background: #ffe207;
  height: 100%;
  width: 100wh;
  padding: 30px;
  margin: 0px;
`;

export const Header = styled.div`
  background: transparent;
  padding-left: 30px;
  padding-right: 30px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 80px;
  margin-left: 40px;
  height: 90vh;
`;

export const TextLogo = styled.text`
  font-size: 50px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 32px;
`;

export const TextTitle = styled.text`
  font-size: 25px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

export const TextDescription = styled.text`
  font-size: 20px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
`;

export const TextDescriptionQuote = styled.text`
  margin-bottom: 32px;
  font-size: 15px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  text-align: justify;
  align-self: flex-end;
  color: #222222;
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  text-align: center;
  border-radius: 50px;
  transition-duration: 0.4s;

  &:hover {
    background: ${darken(0.03, '#ffe207')};
    cursor: pointer;
  }
  &:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
`;

export const ButtonBooks = styled.button`
  background-color: transparent;
  width: 180px;
  height: 40px;
  border-radius: 24px;
  border: solid 1px;
  &:hover {
    background-color: ${darken(0.05, '#ffe207')};
    cursor: pointer;
  }
  &:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;

export const ContainerSearch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputSearch = styled.input`
  height: 25px;
  border-radius: 16px;
  border: solid 1px;
  margin-right: 5px;
  background-color: transparent;
  padding-left: 15px;
  padding-right: 15px;

  &:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;
