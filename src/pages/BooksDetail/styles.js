import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const ContainerBackground = styled.div`
  background: #ffe207;
  width: 100wh;
  height: 93.7vh;
  padding: 30px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  background: transparent;
  padding-left: 30px;
  padding-right: 30px;
  width: 100%;
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

export const ButtonIconLike = styled.button`
  background-color: transparent;
  height: 40px;
  width: 40px;
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

export const ContainerDetails = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70%;
  width: 70%;
  background-color: #ffffff;
  border-radius: 16px;
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
`;

export const ContainerDetailsBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;

  p {
    max-width: 400px;
    max-height: 40ch;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
    border-top: solid 1px;
    padding-top: 10px;
    text-align: justify;
    text-justify: inter-word;
    overflow: scroll;
    text-overflow: ellipsis;
  }
`;

export const TextTitleBook = styled.text`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bolder;
`;

export const TextAuthor = styled.text`
  font-family: Arial, Helvetica, sans-serif;
  align-self: flex-end;
  font-size: 10px;
  font-weight: bolder;
  color: #555555;
  margin-bottom: 30px;
`;

export const TextPrice = styled.text`
  font-family: Arial, Helvetica, sans-serif;
  align-self: flex-start;
  font-size: 17px;
  font-weight: bolder;
  color: #555555;
  margin-right: 50px;
  margin-top: 4px;
`;

export const ConatinerTitleBook = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ConatinerStarPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
`;

export const ConatinerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  margin-top: 30px;
`;

export const Image = styled.img`
  width: 80%;
  height: 80%;
  margin-left: 30px;
`;

export const ButtonBuy = styled.button`
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
