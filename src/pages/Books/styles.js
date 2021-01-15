import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const ContainerBackground = styled.div`
  background: #ffe207;
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
  margin-bottom: 50px;
`;

export const TextTitle = styled.text`
  font-size: 25px;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
`;

export const ButtonIcon = styled.button`
  background-color: transparent;
  border: none;
  text-align: center;
  border-radius: 50px;
  transition-duration: 0.4s;

  &:hover {
    background: ${lighten(0.15, '#ffe207')};
    cursor: pointer;
  }
  &:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;

export const ContainerBooks = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 40px;
  margin-top: 50px;
  height: 100%;
`;

export const BookList = styled.ul`
  margin-left: 30px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    height: 300px;
    width: 150px;
    margin-bottom: 15px;
    background-color: transparent;
    transition-duration: 0.4s;

    img {
      align-self: center;
      max-width: 100%;
      height: 250px;
      border-radius: 4px;
    }
    p {
      max-width: 20ch;
      max-height: 4ch;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-family: Arial, Helvetica, sans-serif;
      font-size: 16px;
    }
    &:hover {
      background: ${lighten(0.15, '#ffe207')};
      cursor: pointer;
    }
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

export const ContainerLogo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-right: 300px;
  margin-left: 300px;
  height: 40%;
`;

export const TextDescription = styled.text`
  margin-right: 50px;
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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonMore = styled.button`
  background-color: transparent;
  width: 180px;
  height: 40px;
  border-radius: 24px;
  border: solid 1px;
  transition-duration: 0.4s;

  &:hover {
    background-color: ${lighten(0.15, '#ffe207')};
    cursor: pointer;
  }
  &:focus {
    outline: thin dotted;
    outline: 0px auto -webkit-focus-ring-color;
    outline-offset: 0px;
  }
`;
