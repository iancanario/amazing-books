import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  ContainerBackground,
  Header,
  ContainerLogo,
  TextLogo,
  ButtonIcon,
  TextTitle,
  TextContainer,
  ButtonBooks,
  TextDescription,
  TextDescriptionQuote,
  InputSearch,
  ContainerSearch,
} from './styles';

import { MdSearch, MdMenu } from 'react-icons/md';
import illustration from '../../assets/illustration.png';

function Home() {
  const history = useHistory();
  const [renderSearch, setRenderSearch] = useState(false);
  const [searchParam, setSearchParam] = useState('a');
  const [search, setSearch] = useState(false);

  function searchBooks() {
    history.push({
      pathname: '/books',
      state: { searchParam, startIndex: 0, listBooks: [] },
    });
  }

  return (
    <>
      <ContainerBackground>
        <Header>
          <ButtonIcon>
            <MdMenu size={25} />
          </ButtonIcon>
          <TextTitle>Amazing Books</TextTitle>
          {!renderSearch ? (
            <ButtonIcon onClick={() => setRenderSearch(true)}>
              <MdSearch size={25} />
            </ButtonIcon>
          ) : (
            <ContainerSearch>
              <InputSearch
                onChange={(e) => setSearchParam(e.target.value)}
                placeholder="Search"
              />
              <ButtonIcon
                onClick={() => {
                  searchBooks();
                }}
              >
                <MdSearch size={27} />
              </ButtonIcon>
            </ContainerSearch>
          )}
        </Header>
        <ContainerLogo>
          <TextContainer>
            <TextLogo>
              Find your book &<br /> discover yourself
            </TextLogo>

            <TextDescription>
              “You have brains in your head. You have feet in your shoes. You
              can steer yourself any direction you choose. You’re on your own.
              And you know what you know. And YOU are the one who’ll decide
              where to go…”
            </TextDescription>

            <TextDescriptionQuote>
              Oh, the Places You’ll Go! Dr Seuss
            </TextDescriptionQuote>
            <Link
              onClick={() =>
                (window.location.href = 'http://localhost:3000/books')
              }
            >
              <ButtonBooks>Go Books</ButtonBooks>
            </Link>
          </TextContainer>
          <img src={illustration} />
        </ContainerLogo>
      </ContainerBackground>
    </>
  );
}

export default Home;
